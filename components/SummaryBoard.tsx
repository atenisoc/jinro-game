interface COInfo {
  name: string;
  role: string;
}

interface DeathInfo {
  name: string;
  reason: '吊' | '襲';
  day: number;
}

interface VoteLog {
  from: string;
  to: string;
}

export default function SummaryBoard({
  co = [],
  dead = [],
  alive = [],
  day = 1,
  votes = [],
}: {
  co?: COInfo[];
  dead?: DeathInfo[];
  alive?: string[];
  day?: number;
  votes?: VoteLog[];
}) {
  return (
    <div>
      <h2 className="text-lg font-bold mb-2">状況サマリー</h2>

      <p className="text-sm text-gray-700 mb-2">📅 Day{day}</p>

      <div className="mb-4">
        <h3 className="font-semibold text-sm">生存者</h3>
        <ul className="text-sm list-disc list-inside text-green-700">
          {alive.map((name, i) => (
            <li key={i}>{name}</li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold text-sm">CO一覧</h3>
        <ul className="text-sm list-disc list-inside">
          {co.map((item, i) => (
            <li key={i}>
              {item.name}：{item.role}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold text-sm">死亡者</h3>
        <ul className="text-sm list-disc list-inside text-red-600">
          {dead.map((d, i) => (
            <li key={i}>
              Day{d.day} {d.reason}：{d.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold text-sm">投票結果</h3>
        <ul className="text-sm list-disc list-inside text-blue-800">
          {votes.map((v, i) => (
            <li key={i}>{v.from} → {v.to}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
