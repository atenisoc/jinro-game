import NpcList from '@/components/NpcList';

export default function Page() {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-4">GPT人狼 ゲーム画面</h1>
      <h2 className="text-xl font-semibold mb-2">NPC発言テスト</h2>
      <NpcList />
    </main>
  );
}
