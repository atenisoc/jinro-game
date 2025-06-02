'use client';

import { useState } from 'react';

export default function NpcTestPage() {
  const [input, setInput] = useState('');
  const [reply, setReply] = useState('');

  const handleSend = async () => {
    const res = await fetch('/api/gpt-npc', {
      method: 'POST',
      body: JSON.stringify({ message: input }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    setReply(data.reply || 'エラー');
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">NPCテストページ</h1>
      <input
        className="border p-2 w-full"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="NPCに話しかけてください"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleSend}
      >
        送信
      </button>
      <div className="mt-4 p-4 bg-gray-100 rounded">
        <strong>NPCの応答：</strong>
        <p>{reply}</p>
      </div>
    </div>
  );
}
