import { NextResponse } from 'next/server';
import { openai } from '@/lib/openai';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 入力チェック
    if (!body.message) {
      console.error('❌ body.message が未定義です');
      return NextResponse.json({ message: '（発言失敗：入力なし）', error: true });
    }

    // GPT呼び出し
    const response = await openai.chat.completions.create({
      model: 'gpt-4', // または 'gpt-3.5-turbo'
      messages: [
        { role: 'system', content: 'あなたは人狼ゲームのNPCです。簡潔に、口調をキャラっぽく話してください。' },
        { role: 'user', content: body.message },
      ],
    });

    // デバッグ用ログ
    console.log('✅ GPT full response:', JSON.stringify(response, null, 2));

    // メッセージ抽出
    const message = response.choices?.[0]?.message?.content?.trim();

    if (!message) {
      return NextResponse.json({ message: '（発言失敗：空応答）', error: true });
    }

    return NextResponse.json({ message });

  } catch (error) {
    console.error('❌ API ERROR:', error);
    return NextResponse.json({ message: '（発言失敗：APIエラー）', error: true });
  }
}
