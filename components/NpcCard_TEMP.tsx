// components/NpcCard.tsx
import React from 'react';

type Props = {
  name: string;
};

const NpcCard: React.FC<Props> = ({ name }) => {
  return (
    <div className="border rounded p-2 shadow">
      <p className="text-lg font-semibold">{name}</p>
    </div>
  );
};

export default NpcCard;
