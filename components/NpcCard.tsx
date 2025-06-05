// components/NpcCard.tsx

type Props = {
  name: string;
};

export default function NpcCard({ name }: Props) {
  return (
    <div className="border rounded p-2 shadow">
      <p className="text-lg font-semibold">{name}</p>
    </div>
  );
}
