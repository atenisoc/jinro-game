import NpcCard from './NpcCard';

const npcData = [
  { name: 'タツマキ' },
  { name: '灰原哀' },
  { name: 'ルルーシュ' },
  { name: '爆豪勝己' },
  { name: 'ジェイド' },
];

export default function NpcList() {
  return (
    <div className="space-y-2">
      <h2 className="text-xl font-bold mb-2">NPC一覧</h2>
      {npcData.map((npc) => (
        <NpcCard key={npc.name} name={npc.name} />
      ))}
    </div>
  );
}
