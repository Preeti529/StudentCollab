
// import { analyzeSkills } from "@/lib/ai/gemini";

// export async function POST(request: Request) {
//   try {
//     const { skills } = await request.json();

//     if (!skills || !Array.isArray(skills)) {
//       return Response.json({ error: "Skills array required" }, { status: 400 });
//     }

//     const recommendations = await analyzeSkills(skills);

//     return Response.json({
//       success: true,
//       recommendations,
//     });
//   } catch (error) {
//     console.error("Gemini API error:", error);
//     return Response.json(
//       { error: "Failed to analyze skills" },
//       { status: 500 }
//     );
//   }
// }

export async function POST(request: Request) {
  try {
    const { skills } = await request.json();

    if (!skills || !Array.isArray(skills)) {
      return Response.json({ error: "Skills array required" }, { status: 400 });
    }

    // Mock response (fake AI response for now)
    const mockRecommendation = `
Based on your skills: ${skills.join(", ")}

Recommended Project Ideas:
1. Build a full-stack chat application using ${skills[1] || "Node.js"} and ${skills[0] || "React"}
2. Create an e-commerce platform with ${skills[0] || "React"} frontend
3. Develop an AI-powered analytics dashboard

Best Team Member: Someone with backend experience in databases
    `;

    return Response.json({
      success: true,
      recommendations: mockRecommendation,
    });
  } catch (error) {
    console.error("API error:", error);
    return Response.json(
      { error: "Failed to analyze skills" },
      { status: 500 }
    );
  }
}