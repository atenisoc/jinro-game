import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { prompt } = await req.json();

  console.log('Received prompt:', prompt);

  // ダミー応答
  const dummyReply = "NPC: 私は人狼じゃないと思います。あなたはどう思いますか？";

  return NextResponse.json({ reply: dummyReply });
}
