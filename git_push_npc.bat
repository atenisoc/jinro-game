@echo off
cd /d C:\Users\USER\jinro-game
echo === Git add ===
git add src/components/NpcList.tsx

echo === Git commit ===
git commit -m "Auto update NpcList.tsx"

echo === Git push ===
git push

echo Done.
pause
