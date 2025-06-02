export async function GET() {
  const apiKey = process.env.OPENAI_API_KEY ?? "Not Set";
  return new Response(JSON.stringify({ apiKey }), {
    headers: { "Content-Type": "application/json" },
  });
}
