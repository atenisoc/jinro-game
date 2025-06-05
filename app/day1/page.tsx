'use client';

import { useState } from 'react';
import NpcMessage from '../../components/NpcMessage';

const characters = [
  { name: 'タツマキ', role: '霊能者', image: '/npc/tatsumaki.png' },
  { name: '灰原哀', role: '占い師', image: '/npc/placeholder.png' },
  { name: 'ルルーシュ', role: '村人', image: '/npc/placeholder.png' },
];

export default function Day1Page() {
  const [messages, setMessages] = useState<
    { name: string; role: string; message: string; image: string }[]
  >([]);

  const handleSpeak = async (name: string) => {
    const character = characters.find((c) => c.name === name);
    const res = await fetch('/api/gpt-npc', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: `${name}（${character?.role}）として、初日のあいさつをしてください。`,
      }),
    });
    const data = await res.json();
    setMessages((prev) => [
      ...prev,
      {
        name,
        role: character?.role || '',
        image: character?.image || '',
        message: data.message || '（発言失敗）',
      },
    ]);
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Day 1 会話フェーズ</h1>
      <div className="flex gap-2 mb-4">
        {characters.map((char) => (
          <button
            key={char.name}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded px-3 py-1"
            onClick={() => handleSpeak(char.name)}
          >
            {char.name} に発言させる
          </button>
        ))}
      </div>
      <div className="space-y-2">
        {messages.map((msg, idx) => (
          <NpcMessage
            key={idx}
            character={msg.name}
            message={msg.message}
          />
        ))}
      </div>
    </main>
  );
}
