import { openai } from '@/lib/openai';

export async function POST(req: Request) {
  const { message, character } = await req.json();

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: `${character}として人狼ゲーム中に自然な発言をしてください。`,
      },
      {
        role: 'user',
        content: message,
      },
    ],
  });

  const reply = response.choices[0].message.content;
  return new Response(JSON.stringify({ reply }), {
    headers: { 'Content-Type': 'application/json' },
  });
}

// モジュールとして認識させるために追加
export {};
