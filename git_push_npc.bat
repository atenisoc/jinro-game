@echo off
set /p msg=コミットメッセージを入力してください:

echo.
echo === Git add ===
git add .

echo.
echo === Git commit ===
git commit -m "%msg%"

echo.
echo === Git push ===
git push origin main

pause
