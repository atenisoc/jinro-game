'use client';

import NpcMessage from '@/components/NpcMessage';
import SummaryBoard from '@/components/SummaryBoard';

export default function Page() {
  const messages = [
    { character: 'tatsumaki', message: '誰が怪しいのか、はっきりさせなさい' },
    { character: 'haibara', message: 'あまり話していない人も気になりますね' },
    { character: 'hiroyuki', message: 'それってあなたの感想ですよね？？？' },
  ];

  return (
    <div className="flex min-h-screen bg-white">
      {/* チャットログ：左 2/3 */}
      <div className="w-2/3 p-4 space-y-2">
        {messages.map((msg, i) => (
          <NpcMessage key={i} character={msg.character} message={msg.message} />
        ))}
      </div>

      {/* サマリー：右 1/3 */}
      <div className="w-1/3 p-4 bg-gray-100 border-l">
        <SummaryBoard />
      </div>
    </div>
  );
}
