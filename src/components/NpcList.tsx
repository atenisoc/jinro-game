import NpcCard from './NpcCard';

const npcData = [
  {
    name: 'タツマキ',
    image: '/images/tatsumaki.png',
    role: '霊能者',
    message: '私は超能力で真実を見抜くわよ。',
  },
  {
    name: '灰原哀',
    image: '/images/haibara.png',
    role: '占い師',
    message: '理論的に見て、あなたが怪しいわね。',
  },
  {
    name: 'ルルーシュ',
    image: '/images/lulu.png',
    role: '村人',
    message: '……この状況、計算通りだ。',
  },
];

export default function NpcList() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold mb-2">NPC一覧</h2>
      {npcData.map((npc) => (
<NpcCard
  key={npc.name}
  name={npc.name}
  image={npc.image}
  role={npc.role}
  message={npc.message}
/>

      ))}
    </div>
  );
}
