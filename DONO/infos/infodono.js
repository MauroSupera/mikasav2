const infodono = (prefix, numerodn, NomeDoBot, sender, NickDono) => {

// NÃO APAGUE ESSE ${NickDono} nem 
//${numerodn} nem ${NomeDoBot} nem ${prefix} só se quiser apagar completo, não coloque nada ${dentro assim} pois isso estão puxando tanto da index quanto dá settings.js, só apague se for excluir a definição completa!

return `╭━─━───༺[🗯]༻────━─━╮
┃[☆]╭
┃[☆]  ⎙  INFORMAÇÕES DONO
┃[☆]╰
╰━─━───༺[💫]༻────━─━╯
┏━━━━━━━━ ✓
┃[☆] -➤ Proprietario: 
┃[☆] -➤ [ wa.me/${numerodn} ]
┗━━━━━━━━ ✓
┏━━━━━━━━ ✓
┃[☆] -➤ Prefixo : ${prefix}
┃[☆] -➤ ${NomeDoBot}
┗━━━━━━━━ ✓`
};

exports.infodono = infodono