// app/api/message/route.ts
import { OpenAI } from 'openai';
import { rateLimit } from '@/lib/rateLimit'; // 任意のレート制限ロジック
const openai = new OpenAI();

const prompts: Record<string, string> = {
  tatsumaki: 'あなたはタツマキです。短くきつめの口調で返答してください。',
  haibara: 'あなたは灰原哀です。落ち着いた冷静な口調で話してください。',
  hiroyuki: 'あなたはひろゆきです。皮肉を交えて語ってください。',
};

export async function POST(req: Request) {
  const { character, message } = await req.json();

  if (!prompts[character]) {
    return new Response(JSON.stringify({ error: 'Unknown character' }), { status: 400 });
  }

  const gptResponse = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo', // gpt-4 もOK
    messages: [
      { role: 'system', content: prompts[character] },
      { role: 'user', content: message },
    ],
  });

  const reply = gptResponse.choices[0].message.content;

  return new Response(JSON.stringify({
    character,
    message: reply,
  }));
}
