import { OpenAI } from 'openai';

export const runtime = 'edge'; // Vercel Edge Functions を使う場合（任意）

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const userMessage = body.message;

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // または 'gpt-4'
      messages: [
        {
          role: 'system',
          content: 'あなたは人狼ゲームのNPCです。キャラクターになりきって、簡潔に発言してください。',
        },
        {
          role: 'user',
          content: userMessage,
        },
      ],
      temperature: 0.8,
    });

    const message = response.choices[0].message.content;
    return new Response(JSON.stringify({ message }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('[GPT-API Error]', error);
    return new Response(JSON.stringify({ message: 'エラーが発生しました。' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// ← これがないと Vercel で "await" エラーになる！
export {};
