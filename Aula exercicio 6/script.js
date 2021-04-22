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
    
    txt.innerText += `A sequencia possue ${tamanho} numeros`
    txt.innerText += ` O maior numero é ${vet.sort()}`

    div.appendChild(txt)
}
