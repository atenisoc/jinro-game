// pages/api/message.ts or app/api/message/route.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { rateLimit } from '@/lib/rateLimit';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const ip = req.headers['x-forwarded-for']?.toString() || req.socket.remoteAddress || 'unknown';

  if (!rateLimit(ip)) {
    return res.status(429).json({ error: 'Too many requests, please try again later.' });
  }

  // ✅ 通常の処理
  const { message } = req.body;

  // OpenAI連携など
  return res.status(200).json({ reply: `あなたのメッセージ: ${message}` });
}
