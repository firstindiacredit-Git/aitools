class DetectorService {
  // Analyze text patterns for AI characteristics
  analyzePatterns(text) {
    const patterns = {
      repetitiveStructure: 0,
      unnaturalPhrasing: 0,
      lackOfPersonality: 0,
      overlyFormal: 0,
      genericLanguage: 0,
    };

    // Check for repetitive sentence structures
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [];
    const sentenceStarts = sentences.map((s) =>
      s.trim().split(" ")[0].toLowerCase()
    );
    const uniqueStarts = new Set(sentenceStarts);
    if (sentences.length > 3 && uniqueStarts.size < sentences.length * 0.6) {
      patterns.repetitiveStructure = 0.7;
    }

    // Check for common AI phrases
    const aiPhrases = [
      /it('s| is) (important|worth noting|essential|crucial) to (note|mention|understand|remember)/i,
      /in (conclusion|summary|essence)/i,
      /it('s| is) (imperative|paramount|vital)/i,
      /delve into/i,
      /tapestry of/i,
      /landscape of/i,
      /realm of/i,
      /it('s| is) no secret that/i,
      /moreover/i,
      /furthermore/i,
      /additionally/i,
      /in today('s| is) digital age/i,
      /cutting-edge/i,
      /revolutionize/i,
      /paradigm shift/i,
      /game-changer/i,
    ];

    let phraseCount = 0;
    aiPhrases.forEach((phrase) => {
      if (phrase.test(text)) phraseCount++;
    });
    patterns.unnaturalPhrasing = Math.min(phraseCount / 5, 1);

    // Check for lack of contractions
    const contractionPattern =
      /(won't|can't|don't|isn't|aren't|wasn't|weren't|haven't|hasn't|hadn't|wouldn't|shouldn't|couldn't|mightn't|mustn't|i'm|you're|he's|she's|it's|we're|they're)/gi;
    const contractions = text.match(contractionPattern) || [];
    const wordCount = text.split(/\s+/).length;
    if (wordCount > 50 && contractions.length < wordCount * 0.02) {
      patterns.lackOfPersonality = 0.6;
    }

    // Check for overly formal language
    const formalWords =
      /(utilize|leverage|facilitate|implement|endeavor|ascertain|commence|terminate|acquire|magnitude)/gi;
    const formalMatches = text.match(formalWords) || [];
    patterns.overlyFormal = Math.min(formalMatches.length / 10, 1);

    // Check for generic language
    const genericPhrases =
      /(very important|highly effective|greatly beneficial|significant impact|various different|many people|some individuals)/gi;
    const genericMatches = text.match(genericPhrases) || [];
    patterns.genericLanguage = Math.min(genericMatches.length / 5, 1);

    return patterns;
  }

  // Calculate overall AI probability
  calculateAIScore(patterns) {
    const weights = {
      repetitiveStructure: 0.25,
      unnaturalPhrasing: 0.3,
      lackOfPersonality: 0.2,
      overlyFormal: 0.15,
      genericLanguage: 0.1,
    };

    let score = 0;
    for (const [key, value] of Object.entries(patterns)) {
      score += value * weights[key];
    }
    return Math.round(score * 100);
  }

  // Detect using free AI detection service
  async detectWithFreeService(text) {
    try {
      const response = await fetch("https://api.gptzero.me/v2/predict/text", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": "gptzero-api-key",
        },
        body: JSON.stringify({ document: text }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      if (data && data.documents && data.documents[0]) {
        const doc = data.documents[0];
        const aiPercentage = Math.round(doc.completely_generated_prob * 100);
        return {
          success: true,
          aiPercentage: aiPercentage,
          isAIGenerated: aiPercentage > 50,
          confidence:
            aiPercentage > 80 ? "High" : aiPercentage > 50 ? "Medium" : "Low",
          reasoning: `Free service detected ${aiPercentage}% AI probability`,
          aiIndicators:
            aiPercentage > 50
              ? ["AI-generated patterns detected"]
              : ["Human-like patterns detected"],
          source: "free-service",
        };
      }
      return {
        success: false,
        error: "Invalid response from free detection service",
      };
    } catch (error) {
      console.warn("Free detection service error:", error.message);
      // Return error but don't throw - pattern-based will be used
      return {
        success: false,
        error: error.message,
        fallbackAvailable: true,
      };
    }
  }

  // Detect using Google Gemini API via backend
  async detectWithGemini(text, customApiKey = null) {
    try {
      // Call backend API instead of directly calling Gemini
      const response = await fetch("/api/detect/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: text }),
      });

      // Handle response - don't throw for 429 or other errors
      const result = await response.json();

      if (response.ok && result.success) {
        return {
          success: true,
          aiPercentage: result.aiPercentage || 0,
          isAIGenerated: result.isAIGenerated || false,
          confidence: result.confidence || "Medium",
          reasoning: result.reasoning || "",
          aiIndicators: result.aiIndicators || [],
          source: "gemini",
        };
      }

      // Handle specific error cases gracefully
      if (response.status === 429) {
        console.warn("⚠️ Gemini API quota exceeded - using fallback detection");
        return {
          success: false,
          error: result.error || "API quota exceeded",
          fallbackAvailable: true,
        };
      }

      if (response.status === 403) {
        console.warn("⚠️ Gemini API key issue - using fallback detection");
        return {
          success: false,
          error: result.error || "API key invalid",
          fallbackAvailable: true,
        };
      }

      // For other errors, return gracefully
      return {
        success: false,
        error: result.error || `API error: ${response.status}`,
        fallbackAvailable: true,
      };
    } catch (error) {
      console.warn("Gemini API Error (using fallback):", error.message);
      // Return error but don't throw - let fallback handle it
      return {
        success: false,
        error: error.message,
        fallbackAvailable: true,
      };
    }
  }

  // Main analysis function
  async analyzeText(text, customApiKey = null) {
    const patterns = this.analyzePatterns(text);
    let aiScore = this.calculateAIScore(patterns);
    let detectionMethod = "pattern-based";
    let detailedAnalysis =
      "Pattern-based analysis completed. AI detection APIs are currently unavailable.";

    if (text.length >= 10 && text.length <= 10000) {
      // Try Gemini first via backend
      try {
        const geminiResult = await this.detectWithGemini(text, customApiKey);
        if (geminiResult.success) {
          aiScore = Math.round(geminiResult.aiPercentage);
          detectionMethod = "Google";
          detailedAnalysis = geminiResult.reasoning || detailedAnalysis;
        } else {
          // Try free detection service as fallback
          try {
            const freeResult = await this.detectWithFreeService(text);
            if (freeResult.success) {
              aiScore = Math.round(freeResult.aiPercentage);
              detectionMethod = "free-service";
              detailedAnalysis = freeResult.reasoning || detailedAnalysis;
            }
          } catch (freeError) {
            console.warn(
              "Free service failed, using pattern-based detection:",
              freeError.message
            );
          }
        }
      } catch (geminiError) {
        console.warn(
          "Gemini API failed, trying free service:",
          geminiError.message
        );
        // Try free service as fallback
        try {
          const freeResult = await this.detectWithFreeService(text);
          if (freeResult.success) {
            aiScore = Math.round(freeResult.aiPercentage);
            detectionMethod = "free-service";
            detailedAnalysis = freeResult.reasoning || detailedAnalysis;
          }
        } catch (freeError) {
          console.warn(
            "Free service also failed, using pattern-based detection"
          );
        }
      }
    }

    let aiDetected = "Low";
    let confidence = "Low";
    if (aiScore >= 70) {
      aiDetected = "High";
      confidence = "High";
    } else if (aiScore >= 40) {
      aiDetected = "Medium";
      confidence = "Medium";
    }

    const issues = [];
    if (patterns.repetitiveStructure > 0.5) {
      issues.push("Repetitive sentence structures detected");
    }
    if (patterns.unnaturalPhrasing > 0.5) {
      issues.push("Common AI phrases found");
    }
    if (patterns.lackOfPersonality > 0.5) {
      issues.push("Lack of natural contractions and personality");
    }
    if (patterns.overlyFormal > 0.5) {
      issues.push("Overly formal language");
    }
    if (patterns.genericLanguage > 0.5) {
      issues.push("Generic and vague language");
    }

    return {
      aiScore,
      aiDetected,
      confidence,
      patterns,
      issues,
      aiEnhancedAnalysis: detailedAnalysis,
      wordCount: text.split(/\s+/).length,
      detectionMethod,
      recommendation:
        aiScore > 40
          ? "Consider humanizing this content to make it more natural and engaging."
          : "Content appears relatively human-like.",
    };
  }
}

// Create global instance
const detector = new DetectorService();
