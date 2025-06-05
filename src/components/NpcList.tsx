import NpcCard from './NpcCard';

const npcData = [
  {
    name: 'タチE�Eキ',
    image: '/images/tatsumaki.png',
    role: '霊�E老E,
    message: '私�E趁E�E力で真実を見抜くわよ、E,
  },
  {
    name: '灰原哀',
    image: '/images/haibara.png',
    role: '占ぁE��',
    message: '琁E��的に見て、あなたが怪しいわ�E、E,
  },
  {
    name: 'ルルーシュ',
    image: '/images/lulu.png',
    role: '村人',
    message: '……こ�E状況、計算通りだ、E,
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
