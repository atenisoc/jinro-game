@echo off
echo --- STEP 1: 移動 ---
cd src\components

echo --- STEP 2: Gitからキャッシュ削除 ---
git rm --cached NpcCard.tsx

echo --- STEP 3: 一時ファイルにリネーム ---
rename NpcCard.tsx NpcCard_temp.tsx

echo --- STEP 4: 元の正しい名前にリネーム ---
rename NpcCard_temp.tsx NpcCard.tsx

echo --- STEP 5: Gitに追加・コミット・プッシュ ---
git add NpcCard.tsx
git commit -m "Fix: 強制的にNpcCard.tsxのケース差分を検知させる"
git push

cd ../..
