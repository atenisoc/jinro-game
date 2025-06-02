import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // .env.localに定義
});

export async function callOpenAI(message: string): Promise<string> {
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo', // または 'gpt-4'
    messages: [{ role: 'user', content: message }],
    temperature: 0.7
  });

  return response.choices[0]?.message?.content?.trim() || '（応答がありませんでした）';
}
