@echo off
cd /d C:\Users\USER\jinro-game

echo === Git add ===
git add -A

echo === Git commit ===
git commit -m "Auto commit via batch" || echo No changes to commit.

echo === Git push ===
git push

echo Done.
pause
