import { NextRequest, NextResponse } from "next/server";
import { openai } from "@/lib/openai";

export async function POST(req: NextRequest) {
  const { text } = await req.json();

  if (typeof text !== "string" || !text.trim()) {
    return NextResponse.json({ error: "Missing or invalid text" }, { status: 400 });
  }

  if (text.length > 4000) {
    return NextResponse.json({ error: "Text is too long" }, { status: 413 });
  }

  try {
    const { choices } = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant that paraphrases text." },
        { role: "user", content: `Paraphrase: ${text}` },
      ],
      temperature: 0.7,
    });

    return NextResponse.json({ result: choices[0].message.content });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "OpenAI error" }, { status: 500 });
  }
}
