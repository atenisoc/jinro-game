// NpcCard.tsx
type Props = {
  name: string;
  image: string;
  role: string;
  message: string;
};

export default function NpcCard({ name, image, role, message }: Props) {
  return (
    <div className="border p-4 rounded shadow bg-white flex items-start gap-4">
      <img src={image} alt={name} className="w-16 h-16 rounded-full" />
      <div>
        <div className="font-bold">{name}（{role}）</div>
        <div>{message}</div>
      </div>
    </div>
  );
}
