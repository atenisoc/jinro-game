type Props = {
  message: string;
  character: string;
};

export default function NpcMessage({ message, character }: Props) {
  return (
    <div className="mb-2 flex items-start gap-2">
      <img
        src={`/icons/${character}-icon.png`}
        alt="icon"
        className="w-8 h-8 rounded-full"
      />
      <div>
        <div className="text-xs text-gray-600">{character}</div>
        <div className="px-2 py-1 rounded bg-pink-100 inline-block">
          {message}
        </div>
      </div>
    </div>
  );
}
