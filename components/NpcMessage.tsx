// components/NpcMessage.tsx
import Image from 'next/image';

interface NpcMessageProps {
  character: string;
  message: string;
}

const characterMap: Record<string, { name: string; color: string; icon: string }> = {
  tatsumaki: {
    name: 'タツマキ',
    color: 'bg-yellow-100',
    icon: '/icons/tatsu-icon.png',
  },
  haibara: {
    name: '灰原哀',
    color: 'bg-pink-100',
    icon: '/icons/hai-icon.png',
  },
  hiroyuki: {
    name: 'ひろゆき',
    color: 'bg-blue-100',
    icon: '/icons/hiro-icon.png',
  },
  default: {
    name: '名無し',
    color: 'bg-gray-200',
    icon: '/default-icon.png',
  },
};

export default function NpcMessage({ character, message }: NpcMessageProps) {
  const { name, color, icon } = characterMap[character] || characterMap.default;

  return (
    <div className="flex items-start gap-2 p-2">
      <div className="w-10 h-10 flex-shrink-0 rounded-full overflow-hidden border">
        <Image src={icon} alt={`${name} icon`} width={40} height={40} className="object-cover" />
      </div>
      <div className="flex flex-col max-w-[80%]">
        <span className="text-xs font-semibold text-gray-700">{name}</span>
        <div className={`rounded-xl p-2 mt-1 text-sm ${color}`}>
          {message}
        </div>
      </div>
    </div>
  );
}
