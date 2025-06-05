@echo off
echo [1/3] Modify file timestamp...
copy /b NpcList.tsx +,, > nul

echo [2/3] Git add and commit...
git add src/components/NpcList.tsx
git commit -m "Force timestamp update for NpcList.tsx"

echo [3/3] Git push...
git push

pause
