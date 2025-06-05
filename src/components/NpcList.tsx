import NpcCard from './NpcCard';

const npcData = [
  {
    name: '繧ｿ繝・・繧ｭ',
    image: '/images/tatsumaki.png',
    role: '髴願・閠・,
    message: '遘√・雜・・蜉帙〒逵溷ｮ溘ｒ隕区栢縺上ｏ繧医・,
  },
  {
    name: '轣ｰ蜴溷凍',
    image: '/images/haibara.png',
    role: '蜊縺・ｸｫ',
    message: '逅・ｫ也噪縺ｫ隕九※縲√≠縺ｪ縺溘′諤ｪ縺励＞繧上・縲・,
  },
  {
    name: '繝ｫ繝ｫ繝ｼ繧ｷ繝･',
    image: '/images/lulu.png',
    role: '譚台ｺｺ',
    message: '窶ｦ窶ｦ縺薙・迥ｶ豕√∬ｨ育ｮ鈴壹ｊ縺縲・,
  },
];

export default function NpcList() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold mb-2">NPC荳隕ｧ</h2>
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
