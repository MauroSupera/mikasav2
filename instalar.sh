#!bin/bash
CYAN="\033[1;36m"
YELLOW="\033[1;33m"
PURPLE="\033[1;35m"
GREEN="\033[1;32m"
RED='\033[1;31m'
NC='\033[0m'

echo $YELLOW"[$RED ! $YELLOW] Irei instalar as dependências para iniciar o bot aceite as permissões com [s/n]"
read inp
if [ "$inp" = "s" ]; then
apt-get upgrade
apt-get update
apt upgrade -y
apt update -y
apt install nodejs -y 
apt install nodejs-lts -y 
apt install ffmpeg -y
apt install wget -y 
apt install git -y.
echo $GREEN"Ótimo deu tudo certo, só digitar sh start.sh e ser feliz com a MIKASA-BOT.."
fi
if [ "$inp" = "n" ]; then
    echo $RED"Jae então, se divirta tentando descobrir as dependências sozinho e manualmente :)"
    exit
fi

