let vet = []  

function add()
{
  let numTxt = document.querySelector('input#numTxt')
  let sel = document.querySelector('select#secNum')

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
}

function verificar()
{
  
    var div = document.querySelector('div#div2')

    var txt = document.createElement("P")
    var tamanho = vet.length
    
    //essa função pega o maion numero de um Array
  /* 
   var maior = vet.reduce(function(a,b)
    {
      return Math.max(a,b)
    })
    */

    // a função Math.max() não funciona se colocarmos apenas o vetor la dentro 
    // temos que colocar três pontinhos ... assim: Math.max(...vet) (tanto par max como para min)
    txt.innerText += `\nA sequencia possue ${tamanho} numeros`
    txt.innerText += `\n O maior numero é ${Math.max(...vet)/*maior*/}`
    txt.innerText += `\n O menor numero é ${Math.min(...vet)}`

    div.appendChild(txt)
}
