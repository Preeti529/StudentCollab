"use client";

import { useState } from "react";

export default function TestAI() {
  const [skills, setSkills] = useState("React, Node.js, TypeScript");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const testGemini = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/ai/analyze-skills", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          skills: skills.split(",").map((s) => s.trim()),
        }),
      });

      const data = await response.json();
      setResult(data.recommendations || data.error);
    } catch (error) {
      setResult("Error: " + String(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Test Gemini AI</h1>

      <input
        type="text"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
        placeholder="Enter skills (comma-separated)"
        className="w-full p-3 border rounded mb-4"
      />

      <button
        onClick={testGemini}
        disabled={loading}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
      >
        {loading ? "Analyzing..." : "Test Gemini"}
      </button>

      {result && (
        <div className="mt-6 p-4 bg-gray-100 rounded">
          <h2 className="font-bold mb-2">AI Response:</h2>
          <p className="whitespace-pre-wrap">{result}</p>
        </div>
      )}
    </div>
  );
}