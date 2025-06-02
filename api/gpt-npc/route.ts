try {
  const response = await openai.chat.completions.create({
    model: 'gpt-4', // または 'gpt-3.5-turbo'
    messages: [
      { role: 'system', content: 'あなたは人狼ゲームのNPCです。簡潔に話してください。' },
      { role: 'user', content: body.message },
    ],
  });

  console.log('GPT response:', response);

  // ✅ 修正ポイント
  const message = response.choices?.[0]?.message?.content;

  if (!message) {
    return NextResponse.json({ message: '（発言失敗）', error: true });
  }

  return NextResponse.json({ message });
} catch (error) {
  console.error('API ERROR:', error);
  return NextResponse.json({ message: '（発言失敗）', error: true });
}
