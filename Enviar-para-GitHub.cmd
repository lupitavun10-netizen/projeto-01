@echo off
setlocal
cd /d "%~dp0"
set "PATH=C:\Program Files\WindowsApps\OpenAI.CodexPrimaryRuntime.v26-1112-737-0_26.1112.737.0_x64__3k8sg7r9htsxt\dependencies\native\git\cmd;%PATH%"
where git >nul 2>nul
if errorlevel 1 (
  echo Git nao encontrado. Instale o Git para Windows e tente novamente.
  pause
  exit /b 1
)
git add .
if errorlevel 1 goto :erro
git -c user.name="Larissa Pereira Ramos" -c user.email="356486523+lupitavun10-netizen@users.noreply.github.com" commit -m "Adiciona Projeto 01 e configura Cloudflare Pages"
git rev-parse --verify HEAD >nul 2>nul
if errorlevel 1 goto :erro
git push -u origin main
if errorlevel 1 goto :erro
echo Projeto enviado com sucesso ao GitHub.
start "" "https://github.com/lupitavun10-netizen/projeto-01"
pause
exit /b 0
:erro
echo Nao foi possivel concluir. Confira a mensagem acima.
pause
exit /b 1
