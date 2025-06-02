import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const characterPrompt: Record<string, string> = {
  tatsumaki: "あなたはツンデレな超能力者タツマキとして話してください。少し高圧的ですが根は優しい性格です。",
  hiroyuki: "あなたは論理的で皮肉屋なひろゆきとして振る舞ってください。余計なことは言わず本質を突きます。",
  killua: "あなたは冷静で頭の切れる少年キルアとして会話してください。軽口も混ぜてください。",
  default: "あなたは親切で有能なAIアシスタントです。"
};

export async function callOpenAI(message: string, character: string = 'default'): Promise<string> {
  const prompt = characterPrompt[character] || characterPrompt.default;

  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: prompt },
      { role: 'user', content: message }
    ],
    temperature: 0.7
  });

  return completion.choices[0].message.content ?? '（応答が得られませんでした）';
}
