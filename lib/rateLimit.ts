const tokens = new Map<string, number[]>();

export function rateLimit(key: string, limit = 10, windowMs = 60000): boolean {
  const now = Date.now();
  const timestamps = tokens.get(key) || [];
  const recent = timestamps.filter(t => t > now - windowMs);
  recent.push(now);
  tokens.set(key, recent);
  return recent.length <= limit;
}
