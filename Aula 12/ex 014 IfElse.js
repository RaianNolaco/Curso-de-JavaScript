var agr  = new Date()
var hora = agr.getHours()
var min  = agr.getMinutes()

console.log(`Agora são ${hora}:${min} hrs`)

if(hora < 12 )
{
    console.log('Bom dia!')
}
else if( hora <= 18)
{
    console.log('Boa tarde!')
}
else
{
    console.log('Boa noite!')
}