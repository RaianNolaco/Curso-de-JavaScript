function contar()
{  

  var inicio = document.querySelector('input#inicio')
  var fim = document.querySelector('input#fim')
  var passo = document.querySelector('input#passo')
  var res = document.querySelector('div#res')
  
  

  if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0)
    {
        window.alert('[ERRO] Preencha todos os campos')      
    }
    else if(Number(passo.value) <= 0)
    {
        window.alert('[ERRO] O campo passo não pode ser menor que 1, passo será considerado com valor 1')
    }
    
    res.innerHTML = 'Contando: '
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    if(p >= 0)
    {
        p = 1
        passo.textContent = '1'
    }
    
    if( i > f)
    {
        //Contagem na ordem decrecente 
        while(i >= f)
        {   
           res.innerHTML += i + `\u{1F449}`     
           i = i - p
           
        }
        
    }
    else
    {
        //Contagem na ordem crescente
        while(i <= f)
        {   
           res.innerHTML += i + `\u{1F449}`     
           i = i + p
           
        }
    }
    res.innerHTML += `\u{1F6A9}`
}