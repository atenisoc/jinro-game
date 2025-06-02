import React from 'react';
import clsx from 'clsx';

type ChatMessageProps = {
  name: string;
  message: string;
  color: string;
  roleHint?: string;
  iconSrc?: string; // ← 追加
};

export default function ChatMessage({ name, message, color, roleHint, iconSrc }: ChatMessageProps) {
  return (
    <div className="flex items-start space-x-2 p-2 rounded-md shadow-sm bg-white">
      {/* アイコン */}
      {iconSrc && (
        <img
          src={iconSrc}
          alt={`${name}のアイコン`}
          className="w-10 h-10 rounded-full object-cover"
        />
      )}

      <div>
        <div className="flex items-center space-x-2">
          <span className={clsx('font-bold', `text-${color}-600`)}>{name}</span>
          {roleHint && (
            <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded">
              {roleHint}
            </span>
          )}
        </div>
        <div className="text-sm mt-1">{message}</div>
      </div>
    </div>
  );
}
