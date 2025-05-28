'use client';

import { useState } from 'react';

export default function Home() {
  const [npcText, setNpcText] = useState('');  
  const [loading, setLoading] = useState(false);

  async function talkToNpc(userMessage: string) {
    setLoading(true);

    try {
      const res = await fetch('/api/gpt-npc', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userMessage }),
      });

      if (!res.ok) throw new Error('APIエラー');

      const data = await res.json();
      setNpcText(data.npc);
    } catch (e) {
      setNpcText('エラーが発生しました。');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <h1>人狼ゲームへようこそ</h1>
      <button onClick={() => talkToNpc('こんにちは')}>NPCにしゃべらせる</button>
      {loading ? <p>読み込み中...</p> : <p>{npcText}</p>}
    </main>
  );
}
