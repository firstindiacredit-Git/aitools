import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const MAIL_TM_API = process.env.MAIL_TM_API || "https://api.mail.tm";

const domainCache = {
  value: [],
  fetchedAt: 0,
};

// Middleware
app.use(cors());
app.use(express.json());

// API Routes - MUST be defined BEFORE static file serving
// Gemini API endpoint for detection
app.post("/api/detect/gemini", async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({
        success: false,
        error: "Text is required",
      });
    }

    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

    if (!GEMINI_API_KEY) {
      return res.status(500).json({
        success: false,
        error: "Gemini API key not configured in environment variables",
      });
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are an expert AI content detector. Analyze the text and determine if it's AI-generated or human-written.

Respond ONLY with a JSON object in this exact format:

{
  "aiPercentage": <number 0-100>,
  "isAIGenerated": <boolean>,
  "confidence": "<Low|Medium|High>",
  "reasoning": "<brief explanation>",
  "aiIndicators": ["<indicator1>", "<indicator2>", ...]
}

Look for these AI indicators:
- Repetitive sentence structures and patterns
- Overly formal or robotic language
- Generic phrases and clichés
- Lack of personal voice or contractions
- Perfect grammar without natural variations
- Common AI phrases: "delve into", "tapestry", "landscape of", "it's important to note", "moreover", "furthermore"
- Lack of emotional language or personality
- Overly structured and organized content
- Absence of colloquialisms or regional expressions
- Too many transition words
- Perfect parallel sentence structures

Look for these HUMAN indicators:
- Natural contractions (don't, can't, it's, they're)
- Personal voice ("I think", "in my experience")
- Varied sentence lengths and structures
- Emotional language ("really", "actually", "honestly")
- Natural imperfections or colloquialisms
- Conversational tone
- Specific details and examples
- Natural pauses or asides

Analyze this text:

${text}`,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.1,
            maxOutputTokens: 4096,
            responseMimeType: "application/json",
          },
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));

      // Handle specific error cases
      if (response.status === 403) {
        const errorMsg =
          errorData?.error?.message || "API key is invalid or revoked";
        console.warn(`⚠️ Gemini API Key Error: ${errorMsg}`);
        return res.status(403).json({
          success: false,
          error:
            "Gemini API key is invalid or has been revoked. Please update your API key in .env file.",
          errorDetails: errorMsg,
          fallbackAvailable: true,
        });
      }

      // Handle quota/rate limit errors
      if (response.status === 429) {
        const errorMsg = errorData?.error?.message || "API quota exceeded";
        console.warn(`⚠️ Gemini API Quota Error: ${errorMsg}`);
        return res.status(429).json({
          success: false,
          error:
            "Gemini API quota exceeded. Please check your billing or wait before retrying.",
          errorDetails: errorMsg,
          fallbackAvailable: true,
        });
      }

      // Return error response instead of throwing
      return res.status(response.status).json({
        success: false,
        error: `Gemini API error: ${response.status}`,
        errorDetails: errorData,
        fallbackAvailable: true,
      });
    }

    const data = await response.json();

    if (
      data &&
      data.candidates &&
      data.candidates[0] &&
      data.candidates[0].content &&
      data.candidates[0].content.parts &&
      data.candidates[0].content.parts[0]
    ) {
      const content = data.candidates[0].content.parts[0].text;
      let jsonContent = content.trim();

      // Clean up JSON if wrapped in markdown
      if (jsonContent.startsWith("```json")) {
        jsonContent = jsonContent
          .replace(/```json\n?/g, "")
          .replace(/```\n?/g, "")
          .trim();
      } else if (jsonContent.startsWith("```")) {
        jsonContent = jsonContent.replace(/```\n?/g, "").trim();
      }

      // Handle truncated JSON
      if (!jsonContent.endsWith("}")) {
        const lastBrace = jsonContent.lastIndexOf("}");
        if (lastBrace > 0) {
          jsonContent = jsonContent.substring(0, lastBrace + 1);
        } else {
          jsonContent = jsonContent + "}";
        }
      }

      const result = JSON.parse(jsonContent);

      return res.json({
        success: true,
        aiPercentage: result.aiPercentage || 0,
        isAIGenerated: result.isAIGenerated || false,
        confidence: result.confidence || "Medium",
        reasoning: result.reasoning || "",
        aiIndicators: result.aiIndicators || [],
      });
    }

    return res.status(500).json({
      success: false,
      error: "No response from Gemini API",
    });
  } catch (error) {
    console.error("Gemini detection error:", error);
    // Return proper error response - don't crash
    return res.status(500).json({
      success: false,
      error: error.message || "Internal server error",
      fallbackAvailable: true,
    });
  }
});

// Load word mappings from JSON file
let wordMappings = null;
function loadWordMappings() {
  if (wordMappings) return wordMappings;
  try {
    const mappingsPath = path.join(__dirname, "word-mapping.json");
    const mappingsData = fs.readFileSync(mappingsPath, "utf8");
    wordMappings = JSON.parse(mappingsData);
    return wordMappings;
  } catch (error) {
    console.error("Error loading word mappings:", error);
    return { formal: {}, informal: {} };
  }
}

// Gemini API endpoint for text conversion/humanization
app.post("/api/convert/gemini", async (req, res) => {
  try {
    const { text, formal } = req.body;

    if (!text) {
      return res.status(400).json({
        success: false,
        error: "Text is required",
      });
    }

    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

    if (!GEMINI_API_KEY) {
      return res.status(500).json({
        success: false,
        error: "Gemini API key not configured in environment variables",
      });
    }

    // Load word mappings
    const mappings = loadWordMappings();
    const mode = formal ? "formal" : "informal";
    const wordMap = mappings[mode] || {};

    // Build word replacement list for the prompt
    const wordReplacements = Object.entries(wordMap)
      .slice(0, 50) // Limit to first 50 to avoid prompt being too long
      .map(([original, replacement]) => `   - ${original} -> ${replacement}`)
      .join("\n");

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are an expert at making AI-generated text completely undetectable. Rewrite the following text by changing ONLY specific words that trigger AI detection, keep everything else exactly the same including paragraph structure.

CRITICAL RULES - MINIMAL WORD CHANGES ONLY:
1. Keep 95% of the text unchanged - only change words that trigger AI detection
2. DO NOT split or break paragraphs - keep the same paragraph structure
3. Change pronouns to alternatives:
   - this -> that, these -> those
   - it -> this, that -> it
   - its -> it's, it's -> its
4. Change similar-sounding words:
   - their -> there, there -> their
   - to -> too, too -> to
   - your -> you're, you're -> your
   - then -> than, than -> then
5. Replace formal/AI words with ${formal ? "formal" : "casual"} alternatives:
${
  wordReplacements ||
  `   - involves -> includes, uses
   - such as -> like
   - allows -> helps (when used with "allows businesses/companies to")
   - reach -> connect with, target
   - track -> monitor, watch
   - tailor -> customize, adjust
   - using -> with, through
   - understand -> know, see
   - improve -> boost, increase
   - drive -> get, achieve
   - effectively -> well, better
   - crucial -> important, key
   - achieving -> getting, reaching
   - practice -> exercise
   - specific -> unique
   - external -> outside
   - support -> service`
}
6. Keep the same meaning, structure, paragraphs, and most words
7. Replace "today's" with "today"
8. Replace "world's" with "world"
9. Replace "its" with "it's"
10. Replace "you're" with "you are"
11. Replace "we're" with "we are"
12. Replace "they're" with "they are"
13. Replace "she's" with "she is"
14. Replace "he's" with "he is"
15. Replace "she's" with "she is"
16. Replace "he's" with "he is"
17. Replace "she's" with "she is"
18. Replace "he's" with "he is"
19. ${
                    formal
                      ? "Remove spaces after full stops/periods (word. word becomes word.word). Keep spaces after commas."
                      : "Keep spaces after full stops/periods (word. word). Keep spaces after commas."
                  }
20. Add double dashes before specific words: write "--performance" not "--performance--", "--behavior" not "--behavior--","--analytics" not "--analytics--"
21. Remove parentheses around acronyms - write "SEO" not "(SEO)"
22. Do NOT split paragraphs - keep them exactly as they are
23. Do NOT use ** asterisks at all
24. Do NOT add explanations - return ONLY the rewritten text

What to change:
- Pronouns (this/that, it/this, its/it's)
- Similar-sounding words (their/there, to/too, your/you're, then/than)
- Formal words to casual alternatives (involves->includes, allows->helps, etc.)
- Add double dashes before specific words: --performance, --behavior, --engagement, --analytics (NOT --word--, just --word)
- Remove parentheses around acronyms
- Keep same paragraphs - DO NOT split them

Original text:
${text}

Rewritten text (word changes only, same paragraphs):`,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.6,
            maxOutputTokens: 4096,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));

      // Handle specific error cases
      if (response.status === 403) {
        const errorMsg =
          errorData?.error?.message || "API key is invalid or revoked";
        console.warn(`⚠️ Gemini API Key Error: ${errorMsg}`);
        return res.status(403).json({
          success: false,
          error:
            "Gemini API key is invalid or has been revoked. Please update your API key in .env file.",
          errorDetails: errorMsg,
        });
      }

      // Handle quota/rate limit errors
      if (response.status === 429) {
        const errorMsg = errorData?.error?.message || "API quota exceeded";
        console.warn(`⚠️ Gemini API Quota Error: ${errorMsg}`);
        return res.status(429).json({
          success: false,
          error:
            "Gemini API quota exceeded. Please check your billing or wait before retrying.",
          errorDetails: errorMsg,
        });
      }

      return res.status(response.status).json({
        success: false,
        error: `Gemini API error: ${response.status}`,
        errorDetails: errorData,
      });
    }

    const data = await response.json();

    if (
      data &&
      data.candidates &&
      data.candidates[0] &&
      data.candidates[0].content &&
      data.candidates[0].content.parts &&
      data.candidates[0].content.parts[0]
    ) {
      const convertedText = data.candidates[0].content.parts[0].text.trim();

      // Remove any markdown code blocks if present
      let cleanedText = convertedText;
      if (cleanedText.startsWith("```")) {
        cleanedText = cleanedText
          .replace(/```[a-z]*\n?/g, "")
          .replace(/```\n?/g, "")
          .trim();
      }

      // Remove any ** asterisks and replace with -- dashes if needed
      cleanedText = cleanedText.replace(/\*\*([^*]+)\*\*/g, "--$1");
      // Remove any remaining single asterisks
      cleanedText = cleanedText.replace(/\*\*/g, "").replace(/\*/g, "");

      // Ensure space after commas (normalize to ", " format)
      cleanedText = cleanedText.replace(/,\s*/g, ", ");

      // Only in formal mode: Remove spaces after full stops/periods (". " becomes ".")
      if (formal) {
        cleanedText = cleanedText.replace(/\.\s+/g, ".");
      }

      // Remove parentheses around acronyms only ((SEO) -> SEO, but keep other parentheses)
      cleanedText = cleanedText.replace(/\(([A-Z]{2,})\)/g, "$1");

      // Convert --word-- to --word (only left side dashes)
      const wordsToFix = [
        "performance",
        "behavior",
        "engagement",
        "analytics",
        "automation",
      ];
      wordsToFix.forEach((word) => {
        cleanedText = cleanedText.replace(
          new RegExp(`--${word}--`, "gi"),
          `--${word}`
        );
      });

      return res.json({
        success: true,
        text: cleanedText,
      });
    }

    return res.status(500).json({
      success: false,
      error: "No response from Gemini API",
    });
  } catch (error) {
    console.error("Gemini conversion error:", error);
    return res.status(500).json({
      success: false,
      error: error.message || "Internal server error",
    });
  }
});

async function getTempMailDomains() {
  const fifteenMinutes = 15 * 60 * 1000;
  if (
    domainCache.value.length &&
    Date.now() - domainCache.fetchedAt < fifteenMinutes
  ) {
    return domainCache.value;
  }

  try {
    const resp = await fetch(`${MAIL_TM_API}/domains?page=1`);
    if (!resp.ok) {
      console.error("Temp mail domain fetch failed", resp.status);
      return [];
    }
    const data = await resp.json();
    const domains = (data["hydra:member"] || [])
      .map((item) => item.domain)
      .filter(Boolean);
    if (domains.length) {
      domainCache.value = domains;
      domainCache.fetchedAt = Date.now();
    }
    return domains;
  } catch (error) {
    console.error("Temp mail domain fetch error:", error);
    return [];
  }
}

async function createMailTmAccount() {
  const domains = await getTempMailDomains();
  if (!domains.length) {
    throw new Error("No temp mail domains available");
  }

  const domain = domains[Math.floor(Math.random() * domains.length)];

  for (let attempt = 0; attempt < 5; attempt += 1) {
    const localPart = `user${Math.random().toString(36).slice(2, 10)}`;
    const address = `${localPart}@${domain}`;
    const password = `Temp${Math.random().toString(36).slice(2, 12)}!`;

    const accountResp = await fetch(`${MAIL_TM_API}/accounts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ address, password }),
    });

    if (accountResp.status === 409 || accountResp.status === 422) {
      // Address collision, try another username
      continue;
    }

    if (!accountResp.ok) {
      const error = await accountResp.json().catch(() => ({}));
      throw new Error(
        error?.message || "Temp mail service refused account creation"
      );
    }

    const tokenResp = await fetch(`${MAIL_TM_API}/token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ address, password }),
    });

    if (!tokenResp.ok) {
      const error = await tokenResp.json().catch(() => ({}));
      throw new Error(
        error?.message || "Unable to authenticate temp mail account"
      );
    }

    const tokenData = await tokenResp.json();
    return {
      email: address,
      password,
      token: tokenData.token,
      refreshToken: tokenData.refresh_token,
      id: tokenData.id,
      expiresAt: tokenData.expires_at,
    };
  }

  throw new Error("Failed to allocate temp mail address after multiple attempts");
}

function getAuthToken(req) {
  const header = req.headers.authorization || "";
  const [, token] = header.split(" ");
  return token || null;
}

async function proxyMailTm(pathSuffix, token, options = {}) {
  const resp = await fetch(`${MAIL_TM_API}${pathSuffix}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      ...(options.headers || {}),
    },
  });

  const payload = await resp.json().catch(() => ({}));
  if (!resp.ok) {
    const error =
      payload?.message || payload?.detail || "Temp mail service error";
    const status = resp.status || 500;
    const err = new Error(error);
    err.status = status;
    err.payload = payload;
    throw err;
  }

  return payload;
}

app.post("/api/temp-mail/account", async (req, res) => {
  try {
    const account = await createMailTmAccount();
    return res.json({
      success: true,
      account,
    });
  } catch (error) {
    console.error("Temp mail account error:", error);
    return res.status(500).json({
      success: false,
      error: error.message || "Unable to create temp mail account",
    });
  }
});

app.get("/api/temp-mail/messages", async (req, res) => {
  const token = getAuthToken(req);
  if (!token) {
    return res.status(401).json({
      success: false,
      error: "Missing Authorization header",
    });
  }

  try {
    const data = await proxyMailTm("/messages?page=1", token);
    const messages = (data["hydra:member"] || []).map((msg) => ({
      id: msg.id,
      from: msg.from,
      to: msg.to,
      subject: msg.subject,
      intro: msg.intro,
      seen: msg.seen,
      createdAt: msg.createdAt,
      attachments: msg.attachments,
    }));
    return res.json({ success: true, messages });
  } catch (error) {
    console.error("Temp mail list error:", error);
    return res.status(error.status || 500).json({
      success: false,
      error: error.message || "Unable to fetch messages",
      details: error.payload,
    });
  }
});

app.get("/api/temp-mail/messages/:id", async (req, res) => {
  const token = getAuthToken(req);
  if (!token) {
    return res.status(401).json({
      success: false,
      error: "Missing Authorization header",
    });
  }

  try {
    const message = await proxyMailTm(`/messages/${req.params.id}`, token);
    return res.json({ success: true, message });
  } catch (error) {
    console.error("Temp mail message error:", error);
    return res.status(error.status || 500).json({
      success: false,
      error: error.message || "Unable to fetch message",
      details: error.payload,
    });
  }
});

app.post("/api/temp-mail/send", async (req, res) => {
  const token = getAuthToken(req);
  if (!token) {
    return res.status(401).json({
      success: false,
      error: "Missing Authorization header",
    });
  }

  const { to, subject, text } = req.body || {};
  if (!to || !text) {
    return res.status(400).json({
      success: false,
      error: "Recipient and message body are required",
    });
  }

  try {
    const payload = await proxyMailTm(
      "/messages",
      token,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to,
          subject: subject || "",
          text,
        }),
      }
    );
    return res.json({ success: true, message: payload });
  } catch (error) {
    console.error("Temp mail send error:", error);
    return res.status(error.status || 500).json({
      success: false,
      error: error.message || "Unable to send message",
      details: error.payload,
    });
  }
});

// Serve static files with correct MIME types (after API routes)
app.use(
  express.static(__dirname, {
    setHeaders: (res, filePath) => {
      const ext = path.extname(filePath);
      const mimeTypes = {
        ".html": "text/html",
        ".css": "text/css",
        ".js": "application/javascript",
        ".json": "application/json",
        ".png": "image/png",
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".gif": "image/gif",
        ".svg": "image/svg+xml",
        ".woff": "font/woff",
        ".woff2": "font/woff2",
        ".ttf": "font/ttf",
        ".eot": "application/vnd.ms-fontobject",
      };
      if (mimeTypes[ext]) {
        res.setHeader("Content-Type", mimeTypes[ext]);
      }
    },
  })
);

// Handle missing CSS/JS files - return empty with correct content-type
app.use((req, res, next) => {
  // Don't interfere with API routes
  if (req.path.startsWith("/api")) {
    return next();
  }

  // Check if it's a missing static file request
  const ext = path.extname(req.path);
  if (ext === ".css" || ext === ".js") {
    // Return empty file with correct MIME type instead of 404 HTML
    res.type(ext === ".css" ? "text/css" : "application/javascript");
    return res.send("");
  }

  next();
});

// Serve landing pages
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/ai-detection", (req, res) => {
  res.sendFile(path.join(__dirname, "aidetection.html"));
});

app.get("/ai-humanizer", (req, res) => {
  res.sendFile(path.join(__dirname, "aiconvert.html"));
});

app.get("/canva", (req, res) => {
  res.sendFile(path.join(__dirname, "canva.html"));
});

app.get("/semrush", (req, res) => {
  res.sendFile(path.join(__dirname, "semrush.html"));
});
app.get("/envato", (req, res) => {
  res.sendFile(path.join(__dirname, "envato.html"));
});

app.get("/envato2", (req, res) => {
  res.sendFile(path.join(__dirname, "envato2.html"));
});

app.get("/analytics/keywordmagic", (req, res) => {
  res.sendFile(path.join(__dirname, "analytics/keywordmagic.html"));
});

app.get("/analytics/overview", (req, res) => {
  res.sendFile(path.join(__dirname, "analytics/overview.html"));
});

app.get("/seoptimer", (req, res) => {
  res.sendFile(path.join(__dirname, "seoptimer.html"));
});

app.get("/quillbot", (req, res) => {
  res.sendFile(path.join(__dirname, "quillbot.html"));
});
app.get("/quillbot2", (req, res) => {
  res.sendFile(path.join(__dirname, "quillbot2.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(
    `Gemini API Key configured: ${process.env.GEMINI_API_KEY ? "Yes" : "No"}`
  );
});
