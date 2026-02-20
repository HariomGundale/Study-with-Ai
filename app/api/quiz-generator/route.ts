import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.QUIZ_API_KEY || "");

export async function POST(request: Request) {
  try {
    const { topic, difficulty = "medium", standard } = await request.json();

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "Gemini API key not configured." },
        { status: 500 }
      );
    }

    if (!topic) {
      return NextResponse.json(
        { error: "Topic is required." },
        { status: 400 }
      );
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `
You are an AI quiz generator for Indian CBSE students.

Generate 5 multiple choice questions.

Topic: "${topic}"
Class Standard: ${standard}
Difficulty: ${difficulty}

Follow CBSE syllabus strictly for that class.
Each question must:
- Have exactly 4 options
- Have only one correct answer
- Be concept-based
- Match CBSE exam style

Return STRICT JSON only.
No markdown.
No explanation.
No extra text.

Format:

[
  {
    "question": "Question text",
    "options": ["A", "B", "C", "D"],
    "answer": "Correct Option"
  }
]
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const rawText = response.text();

    // Clean potential formatting issues
    const cleaned = rawText
      ?.replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    let quiz;

    try {
      quiz = JSON.parse(cleaned || "[]");
    } catch (parseError) {
      console.error("JSON Parse Error:", cleaned);
      return NextResponse.json(
        { error: "Invalid JSON returned from AI." },
        { status: 500 }
      );
    }

    return NextResponse.json({ quiz });

  } catch (error: any) {
    console.error("Gemini Quiz Error:", error);
    return NextResponse.json(
      { error: "Failed to generate quiz.", details: error.message },
      { status: 500 }
    );
  }
}