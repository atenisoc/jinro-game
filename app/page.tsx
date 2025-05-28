'use client';

import { useState } from 'react';

export default function Home() {
  const [npcLog, setNpcLog] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchNpcResponse = async (prompt: string) => {
    setLoading(true);
    const res = await fetch('/api/gpt-npc', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setNpcLog((prev) => [...prev, `NPC: ${data.reply}`]);
    setLoading(false);
  };

  return (
    <main style={{ padding: '2rem', fontSize: '1.2rem' }}>
      <h1>人狼ゲームへようこそ</h1>
      <button
        onClick={() =>
          fetchNpcResponse('2日目。NPC1が占い師CO、NPC2が霊能CO。あなたはNPC4です。発言してください。')
        }
        disabled={loading}
      >
        {loading ? '思考中...' : 'NPCにしゃべらせる'}
      </button>
      <div style={{ marginTop: '2rem' }}>
        {npcLog.map((msg, i) => (
          <div key={i}>{msg}</div>
        ))}
      </div>
    </main>
  );
}
