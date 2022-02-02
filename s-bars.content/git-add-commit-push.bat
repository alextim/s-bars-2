@ECHO OFF
SETLOCAL ENABLEEXTENSIONS
CHCP 65001

CLS

ECHO Этот командный файл сохранит ваши правки в локальный репозиторий,
ECHO синхронизацирует локальный репозиторий с удаленным репозиторием на GitHub,
ECHO запустит генерацию обновленного сайта и опубликует его на Netlify.
ECHO.
ECHO Пожалуйста введите сообщение о сделанных вами правках и нажмите [93mEnter[0m.
ECHO Это сообщение используется в commit-е.
ECHO Если вы оставите ввод пустым, то будет взято значение по умолчанию [32mcontent update[0m в качестве сообщения.
ECHO.
ECHO Чтобы отменить нажмите [93mCtrl+C[0m и затем [93mY[0m.
ECHO.

SET commit_message=
SET /p commit_message=Введите ваше сообщение:

IF NOT DEFINED commit_message (
  SET commit_message=content update
)

git status
git add .
git status
git commit -m "%commit_message%"
git push
