@echo off
setlocal

REM ▼ 絶対パスを半角バックスラッシュで指定
set "TARGET=C:\Users\USER\jinro-game\src\components\NpcList.tsx"

(
echo export default function NpcList() {
echo   return (
echo     ^<div className="flex flex-col gap-4"^>
echo       ^<h2 className="text-xl font-bold mb-2"^>NPC一覧^</h2^>
echo       ^<p^>（ビルドテスト用）^</p^>
echo     ^</div^>
echo   );
echo }
) > "%TARGET%"

REM ▼ Git操作
cd /d C:\Users\USER\jinro-game
git add src/components/NpcList.tsx
git commit -m "Fix: regenerate NpcList.tsx via batch"
git push

echo Done.
pause
