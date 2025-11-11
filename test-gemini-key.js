// Quick test script to verify Gemini API key
import dotenv from 'dotenv';
dotenv.config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.error('❌ GEMINI_API_KEY not found in .env file');
  process.exit(1);
}

console.log('🔑 Testing Gemini API Key...');
console.log(`Key: ${GEMINI_API_KEY.substring(0, 15)}...`);

try {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: 'Say hello'
          }]
        }]
      })
    }
  );

  const data = await response.json();

  if (response.ok) {
    console.log('✅ API Key is VALID and working!');
    console.log('Response:', JSON.stringify(data, null, 2).substring(0, 200));
  } else {
    console.error('❌ API Key Error:', response.status);
    console.error('Error Details:', JSON.stringify(data, null, 2));
    
    if (data.error?.message?.includes('leaked')) {
      console.error('\n⚠️  This key has been reported as LEAKED by Google.');
      console.error('   You need to create a NEW API key from:');
      console.error('   https://aistudio.google.com/app/apikey\n');
    }
  }
} catch (error) {
  console.error('❌ Network Error:', error.message);
}

