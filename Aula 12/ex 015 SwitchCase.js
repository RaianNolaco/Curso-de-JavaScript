var agr = new Date()
var diaSem = agr.getDay()
var hora = agr.getHours()
var min  = agr.getMinutes()

/*
  Domingo = 0
  Segunda = 1
  Terça   = 2
  Quarta  = 3
  Quinta  = 4
  Sexta   = 5
  Sabado  = 6
  */

switch(diaSem)
{
  case 0:
       console.log(`Agora são ${hora}:${min} de um domingo`)
       break
  
  case 1:
       console.log(`Agora são ${hora}:${min} de uma segunda-feira`)
       break

  case 2:
       console.log(`Agora são ${hora}:${min} de uma terça-feira`)
       break

  case 3:
       console.log(`Agora são ${hora}:${min} de uma quarta-feira`)
       break

  case 4:
       console.log(`Agora são ${hora}:${min} de uma quinta-feira`)
       break

  case 5:
       console.log(`Agora são ${hora}:${min} de uma sexta-feira`)
       break

  case 6:
       console.log(`Agora são ${hora}:${min} de um sabado`)
       break

  default:
       console.log('ERRO')
       break 
}

