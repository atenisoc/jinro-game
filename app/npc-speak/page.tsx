import { useState } from 'react';
import { NpcMessage } from '@/components/NpcMessage';
import Image from 'next/image';

const characters = [
  { name: 'タツマキ', role: '霊能者', image: '/npc/tatsumaki.png', co: '霊能CO' },
  { name: '灰原哀', role: '占い師', image: '/npc/placeholder.png', co: '占いCO' },
  { name: 'ルルーシュ', role: '村人', image: '/npc/placeholder.png', co: '非CO' },
  { name: '爆豪勝己', role: '非CO', image: '/npc/placeholder.png', co: '非CO' },
  { name: 'ジェイド', role: '非CO', image: '/npc/placeholder.png', co: '村人CO' },
];

export default function NpcDay1() {
  const [messages, setMessages] = useState<any[]>([]);
  const [reinoResult, setReinoResult] = useState<string>('レム → 黒：？？');
  const [吊り候補, set吊り候補] = useState<string>('未選定');

  const handleSpeak = async (name: string) => {
    const res = await fetch('/api/gpt-npc', {
      method: 'POST',
      body: JSON.stringify({ name }),
    });
    const data = await res.json();
    const character = characters.find((c) => c.name === name);
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
    <main className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">Day 1 会話フェーズ</h1>

      {/* サマリーボード */}
      <section className="bg-gray-100 rounded p-4 shadow">
        <h2 className="font-semibold mb-2">🧾 CO状況まとめ</h2>
        <ul className="grid grid-cols-2 gap-2">
          {characters.map((char) => (
            <li key={char.name} className="flex justify-between border-b">
              <span>{char.name}</span>
              <span className="text-sm font-medium text-blue-600">{char.co}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 霊能結果表示 */}
      <section className="bg-yellow-100 rounded p-4 shadow">
        <h2 className="font-semibold mb-2">🧠 霊能結果</h2>
        <p className="text-lg">{reinoResult}</p>
      </section>

      {/* 吊り候補 */}
      <section className="bg-red-100 rounded p-4 shadow">
        <h2 className="font-semibold mb-2">⚖️ 吊り候補（神様選定）</h2>
        <p className="text-lg font-bold">{吊り候補}</p>
        <button
          className="mt-2 bg-red-500 hover:bg-red-600 text-white rounded px-3 py-1"
          onClick={() => set吊り候補('爆豪勝己')}
        >
          神様が吊り候補を決める
        </button>
      </section>

      {/* NPC発言ボタン */}
      <div className="flex gap-2 flex-wrap">
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

      {/* 発言ログ */}
      <div className="space-y-2">
        {messages.map((msg, idx) => (
          <NpcMessage
            key={idx}
            name={msg.name}
            role={msg.role}
            message={msg.message}
            image={msg.image}
          />
        ))}
      </div>
    </main>
  );
}
