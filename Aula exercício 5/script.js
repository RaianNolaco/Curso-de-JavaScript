
function calcular()
{
    // colhendo informaçoes doo formulario HTML
    var num = document.querySelector('input#num')
    var res = document.querySelector('div#res')
    var sel = document.querySelector('select#selTab')

    if(num.value.length == 0)
    {
      // tratamento de erro 1
      window.alert('Digite um numero')
    }else
    {
      sel.innerHTML = ''
      for(var i = 0; i <= 10; i++)
      {
        //converção do valor que veio do HTML  
        var numero = Number(num.value)
        
        //criação de uma variavel que ira criar uma tag <option> dinamicamente
        let item = document.createElement('option')
        
        var calc = numero * i   
        
        //adiciona os valores ao option 
        item.text = `${i}  x  ${numero} = ${calc}`
        
        item.value = `tab${i}`
        
        //joga os valores para o formulario HTML
        sel.appendChild(item)  
  
      }
    }


}

