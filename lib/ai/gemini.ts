import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("Gemini API key not found in .env.local");
}

const client = new GoogleGenerativeAI(apiKey);
//const model = client.getGenerativeModel({ model: "gemini-1.5-flash" });
//const model = client.getGenerativeModel({ model: "gemini 1.5" });
//const model = client.getGenerativeModel({ model: "gemini-1.5-flash" });
//const model = client.getGenerativeModel({ model: "gemini-pro" });
//const model = client.getGenerativeModel({ model: "gemini-1.5-pro" });
const model = client.getGenerativeModel({ model: "gemini-3.5-flash" });
export async function analyzeSkills(userSkills: string[]): Promise<string> {
  const prompt = `
    I have these skills: ${userSkills.join(", ")}
    Suggest 5 potential project ideas and what kind of team member would be best.
    Keep response short and actionable.
  `;

  const result = await model.generateContent(prompt);
  return result.response.text();
}

export async function generateResume(projects: string[]): Promise<string> {
  const prompt = `
    I've completed these projects: ${projects.join(", ")}
    Generate a short professional resume summary for a college student (max 150 words).
  `;

  const result = await model.generateContent(prompt);
  return result.response.text();
}

export default model;