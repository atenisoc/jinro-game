import Image from 'next/image';

interface NpcCardProps {
  name: string;
  image: string;
  message: string;
  role?: string;
}

export default function NpcCard({ name, image, message, role }: NpcCardProps) {
  return (
    <div className="flex gap-3 bg-white p-3 rounded-2xl shadow items-start">
      <Image
        src={image}
        alt={name}
        width={48}
        height={48}
        className="rounded-full border border-gray-300"
      />
      <div>
        <div className="flex items-center gap-2">
          <span className="font-bold text-gray-800">{name}</span>
          {role && (
            <span className="text-xs bg-blue-200 text-blue-800 px-2 py-0.5 rounded-xl">
              {role}
            </span>
          )}
        </div>
        <div className="text-gray-700 mt-1 text-sm">{message}</div>
      </div>
    </div>
  );
}
