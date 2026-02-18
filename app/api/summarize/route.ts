import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(request: NextRequest) {
  try {
    const { text, difficulty = "medium" } = await request.json();

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "Gemini API key not configured." },
        { status: 500 }
      );
    }

    if (!text) {
      return NextResponse.json(
        { error: "Text is required." },
        { status: 400 }
      );
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `
You are an AI study assistant.

Summarize the following study material.
Difficulty level: ${difficulty}

Provide only a clear and concise summary.
Do not return markdown.
Do not return JSON inside backticks.

Return strictly valid JSON in this format:

{
  "summary": "..."
}

Study Material:
${text}
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const rawText = response.text();

    if (!rawText) {
      throw new Error("Empty response from Gemini.");
    }

    const cleaned = rawText
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    let parsed;

    try {
      parsed = JSON.parse(cleaned);
    } catch {
      parsed = {
        summary: cleaned,
      };
    }

    return NextResponse.json(parsed);

  } catch (error: any) {
    console.error("Error calling Gemini API:", error);
    return NextResponse.json(
      { error: "Failed to generate summary.", details: error.message },
      { status: 500 }
    );
  }
}
