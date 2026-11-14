@echo off
setlocal
cd /d "%~dp0"
if not exist "node_modules\vite\bin\vite.js" (
  echo As dependencias do projeto nao foram encontradas.
  echo Instale as dependencias antes de abrir o projeto.
  pause
  exit /b 1
)
set "PROJECT_NODE=%ProgramFiles%\nodejs\node.exe"
if not exist "%PROJECT_NODE%" set "PROJECT_NODE=node.exe"
echo Iniciando o projeto. O navegador abrira automaticamente.
echo Mantenha esta janela minimizada enquanto usar a pagina.
echo Para encerrar o servidor, feche esta janela.
"%PROJECT_NODE%" "node_modules\vite\bin\vite.js" --host 127.0.0.1 --port 5190 --open
if errorlevel 1 pause
