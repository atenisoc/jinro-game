// app/api/npc-speak/route.ts
import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { openai } from '@/lib/openai';

export async function POST(req: Request) {
  const { prompt } = await req.json();
  try {
    const chat = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'あなたは人狼ゲームのNPCです。口調やキャラを保って発言してください。' },
        { role: 'user', content: prompt },
      ],
    });
    return NextResponse.json({ message: chat.choices[0].message.content });
  } catch (e: any) {
    console.error(e);
    return NextResponse.json({ error: 'APIエラー' }, { status: 500 });
  }
}
