import NpcCard from './NpcCard';

export default function GameUI() {
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">NPC発言テスト</h2>
      <NpcCard
        name="タツマキ"
        image="/images/tatsumaki.png"
        role="霊能者"
        message="私は超能力で真実を見抜くわよ。"
      />
    </div>
  );
}
