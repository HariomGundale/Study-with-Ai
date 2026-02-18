import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(request: Request) {
  try {
    const { text, difficulty = "medium", type = "summary" } =
      await request.json();

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

    let instruction = "";

    switch (type) {
      case "summary":
        instruction = "Provide a clear and concise summary.";
        break;
      case "keypoints":
        instruction =
          "Extract 5-8 important key points in bullet format.";
        break;
      case "simplify":
        instruction =
          "Simplify the content so a 12-year-old student can understand it.";
        break;
      default:
        instruction = "Provide a clear and concise summary.";
    }

    const prompt = `
You are an AI study assistant.
Difficulty level: ${difficulty}

${instruction}

Return only plain text. Do not return JSON. Do not use markdown.

Study Material:
${text}
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const output = response.text();

    return NextResponse.json({
      result: output?.trim(),
    });

  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { error: "Failed to generate output.", details: error.message },
      { status: 500 }
    );
  }
}
