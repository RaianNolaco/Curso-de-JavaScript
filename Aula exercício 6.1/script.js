//outra forma de resolver o exercicios (forma de acordo com guanabara)

let numTxt = document.querySelector('input#numTxt')
let sel = document.querySelector('select#secNum')
var div = document.querySelector('div#res ')
let vet = []

function isNumero(n)
{
   if(Number(n) >= 1 && Number(n) <= 100){
     return true
   }
   else{
     return false
   }
  
}

function inLista(n,l)
{
  if(l.indexOf(Number(n)) != -1){
    return true
  }
  else{
    return false
  }
}

function add()
{
  if(isNumero(numTxt.value) && !inLista(numTxt.value, vet)){

    vet.push(Number(numTxt.value))
    let item  = document.createElement('option')
    item.text = `Valor ${numTxt.value} adicionado`
    sel.appendChild(item) 
    div.innerHTML = ''
  }
  else{
    window.alert('Valor inválido ou já encontrado na lista')
  } 
  numTxt.value = ''
  numTxt.focus()
}

function verificar()
{
  if(vet.length == 0)
  {
    window.alert('Adicione valeres antes de verifica-los')
  }
  else
  {
    let tot = vet.length
    let maior = vet[0]
    let menor = vet[0]
    let soma  = 0
    let media = 0
    
    for(let pos in vet){

      soma += vet[pos]

      if(vet[pos] > maior)
      {
        maior = vet[pos] 
      }
      if(vet[pos] < menor)
      {
        menor = vet[pos]
      }
    }

    media = soma/tot

    div.innerHTML = ''
    div.innerHTML += `<p>Ao todo existem ${tot} numeros cadastrados</p>`
    div.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
    div.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
    div.innerHTML += `<p>A soma dos valores é ${soma}</p>`
    div.innerHTML += `<p>A media entre todos os valores é ${media}</p>`
  }
}


