
import { analyzeSkills } from "@/lib/ai/gemini";

export async function POST(request: Request) {
  try {
    const { skills } = await request.json();

    if (!skills || !Array.isArray(skills)) {
      return Response.json({ error: "Skills array required" }, { status: 400 });
    }

    const recommendations = await analyzeSkills(skills);

    return Response.json({
      success: true,
      recommendations,
    });
  } catch (error) {
    console.error("Gemini API error:", error);
    return Response.json(
      { error: "Failed to analyze skills" },
      { status: 500 }
    );
  }
}