let numTxt = document.querySelector('input#numTxt')
let sel = document.querySelector('select#secNum')
var div = document.querySelector('div#div2')

let vet = []

function add()
{
  
  let num = Number(numTxt.value)

  let verif = vet.indexOf(num)

  if(numTxt.value.length == 0)
  {
    window.alert(`Digite um numero`)
  }
  else if(num< 1 || num > 100)
  {
    window.alert(`Digitar apenas numeros entre 1 e 100`)
  }
  else if (verif >= 0)
  {
     window.alert(`O valor ${num} já foi adicionado por favor escolha outro valor`)
  }
  else
  {
    vet.push(num)
    
    let item = document.createElement('option')

    item.text = `O valor ${num} foi adicionado`

    item.value = `tab${num}`

    sel.appendChild(item)
  }

  div.innerHTML = ''
  numTxt.value = ''
  numTxt.focus()
}


function verificar()
{
  if (vet.length == 0)
  {
    window.alert('Adicione valores a lista antes de verificar')
  }else{  

     var tamanho = vet.length
     
     div.innerHTML = ''
     //essa função pega o maion numero de um Array
     /* 
     var maior = vet.reduce(function(a,b)
     {
       return Math.max(a,b)
     })
     */

     // a função Math.max() não funciona se colocarmos apenas o vetor la dentro 
     // temos que colocar três pontinhos ... assim: Math.max(...vet) (tanto par max como para min)
     div.innerHTML += `A sequencia possue ${tamanho} números`
     div.innerHTML += `<br></br>O maior número é ${Math.max(...vet)/*maior*/}`
     div.innerHTML += `<br></br>O menor número é ${Math.min(...vet)}`
    
     var total = 0

     function soma(item)
     {
       total += item
     }
    
     vet.forEach(soma)

     div.innerHTML += `<br></br>A soma dos números é ${total}`
     div.innerHTML += `<br></br>A média entre os números é ${total/tamanho}`
  }
}
 


