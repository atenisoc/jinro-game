// components/ChatMessage.tsx
export default function ChatMessage({ message }: { message: string }) {
  return <div className="p-2 border rounded bg-white">{message}</div>;
}
