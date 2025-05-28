import { NextResponse } from "next/server";

const useDummyData = true;  // ここを true/false で切り替え可能

export async function POST(req: Request) {
  const { prompt } = await req.json();

  if (useDummyData) {
    // ダミーデータ返し
    return NextResponse.json({
      npc: "私は人狼じゃないと思います。あなたはどう思いますか？",
    });
  }

  // ここから下はOpenAI API呼び出し処理の例（既存の処理を入れてください）
  // ...
}
