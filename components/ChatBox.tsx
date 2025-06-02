'use client';
import { useState } from 'react';
import NpcMessage from '@/components/NpcMessage';
import SummaryBoard from '@/components/SummaryBoard';

type MessageLog = {
  character: string;
  message: string;
  timestamp: number;
};

type VoteLog = {
  from: string;
  to: string;
};

export default function ChatBox() {
  const allPlayers = ['タツマキ', '灰原哀', 'ひろゆき', 'アーニャ', 'ネコアルク'];

  const [messages, setMessages] = useState<MessageLog[]>([]);
  const [coList, setCoList] = useState<{ name: string; role: string }[]>([]);
  const [deadList, setDeadList] = useState<{ name: string; reason: '吊' | '襲'; day: number }[]>([]);
  const [voteList, setVoteList] = useState<VoteLog[]>([]);
  const [currentDay, setCurrentDay] = useState(1);
  const [inputText, setInputText] = useState('');

  const getAlivePlayers = () => {
    const deadNames = deadList.map(d => d.name);
    return allPlayers.filter(name => !deadNames.includes(name));
  };

  const handlePlayerSpeak = () => {
    if (inputText.trim()) {
      setMessages((prev) => [
        ...prev,
        { character: 'player', message: inputText, timestamp: Date.now() },
      ]);
      setInputText('');
    }
  };

  const handleVote = (voter: string, target: string) => {
    setVoteList((prev) => [...prev, { from: voter, to: target }]);
    setMessages((prev) => [
      ...prev,
      {
        character: 'system',
        message: `${voter} が ${target} に投票しました。`,
        timestamp: Date.now(),
      },
    ]);
  };

  const handleNextDay = () => {
    setCurrentDay((prev) => prev + 1);
    setVoteList([]); // 次の日になったら投票リセット
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* 左側：チャット・入力・投票 */}
      <div className="w-2/3 p-4 space-y-2">
        {/* 操作パネル */}
        <div className="flex flex-col gap-3 mb-4">
          {/* 日付・進行 */}
          <div className="flex gap-2">
            <button
              onClick={handleNextDay}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              ➕ 次の日へ（Day{currentDay + 1}）
            </button>
          </div>

          {/* 入力欄 */}
          <div className="flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="あなたの発言を入力..."
              className="flex-1 border px-3 py-2 rounded"
            />
            <button
              onClick={handlePlayerSpeak}
              className="px-4 py-2 bg-gray-800 text-white rounded"
            >
              発言
            </button>
          </div>

          {/* 投票UI */}
          <div className="border rounded p-3 bg-gray-50">
            <h3 className="font-bold text-sm mb-2">投票</h3>
            {getAlivePlayers().map((voter) => (
              <div key={voter} className="flex gap-2 items-center mb-2">
                <span className="text-sm w-20">{voter}</span>
                <select
                  className="text-sm border px-2 py-1"
                  onChange={(e) => handleVote(voter, e.target.value)}
                  defaultValue=""
                >
                  <option value="" disabled>▼ 投票先</option>
                  {getAlivePlayers()
                    .filter(p => p !== voter)
                    .map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                </select>
              </div>
            ))}
          </div>
        </div>

        {/* 発言ログ */}
        {[...messages]
          .sort((a, b) => a.timestamp - b.timestamp)
          .map((msg, i) => (
            <div key={i}>
              {msg.character === 'player' ? (
                <div className="flex justify-end">
                  <div className="bg-blue-100 text-sm rounded-xl p-2 max-w-[70%]">{msg.message}</div>
                </div>
              ) : msg.character === 'system' ? (
                <div className="text-center text-xs text-gray-600">{msg.message}</div>
              ) : (
                <NpcMessage character={msg.character} message={msg.message} />
              )}
            </div>
          ))}
      </div>

      {/* 右側：サマリー */}
      <div className="w-1/3 p-4 bg-gray-100 border-l">
        <SummaryBoard
          co={coList}
          dead={deadList}
          alive={getAlivePlayers()}
          day={currentDay}
          votes={voteList}
        />
      </div>
    </div>
  );
}
