@echo off
echo --- STEP 1: change directory to components ---
cd src\components

echo --- STEP 2: Remove cached file from Git ---
git rm --cached NpcCard.tsx

echo --- STEP 3: Rename NpcCard.tsx -> temp file ---
rename NpcCard.tsx NpcCard_TEMP.tsx

echo --- STEP 4: Rename temp file -> NpcCard.tsx (Git detects case change) ---
rename NpcCard_TEMP.tsx NpcCard.tsx

echo --- STEP 5: git add, commit, push ---
cd ..\..
git add src/components/NpcCard.tsx
git commit -m "Fix: force rename to resolve case sensitivity issue on NpcCard.tsx"
git push

echo --- STEP 6: Check final components folder ---
dir /B /O:N src\components

pause
