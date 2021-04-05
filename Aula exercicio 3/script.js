function verificar()
{
    var data = new Date()
    var ano  = data.getFullYear()
    var fAno = window.document.querySelector('input#txtano')
    var res  = window.document.querySelector('div#res')

    if(fAno.value.length == 0 || fAno.value > ano || fAno.value < 1900)
    {
      window.alert('[ERRO] Algo deu errado verifique seus dados novamente')
    }
    else
    {
        var fsex  = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var sex = ''
        
        //cria dinamicamente uma Tag img 
        var img = document.createElement('img')
        //Da um atributo para tag criada no caso aqui a tag recebe um ID
        img.setAttribute('id','foto')

        if(fsex[0].checked)
        {
            sex = 'Homen'
            
            if(idade >= 0 && idade <10)
            {
                img.setAttribute('src','fotos/foto-bebe-m.png')   
            }  
            else if(idade <= 20)
            {
                img.setAttribute('src','Fotos/foto-adolecente-m.png')    
            }
            else if(idade <= 30)
            {
                img.setAttribute('src','Fotos/foto-jovem-m.png')
            }
            else if(idade <= 50)
            {
                img.setAttribute('src','Fotos/foto-adulto-m.png')    
            }
            else
            {
                img.setAttribute('src', 'Fotos/foto-idoso-m.png')    
            } 


        }else
        {
            sex = 'Mulher'

            if(idade >= 0 && idade <10)
            {
                img.setAttribute('src','fotos/foto-bebe-f.png')   
            }  
            else if(idade <= 20)
            {
                img.setAttribute('src','Fotos/foto-adolecente-f.png')    
            }
            else if(idade <= 30)
            {
                img.setAttribute('src','Fotos/foto-jovem-f.png')
            }
            else if(idade <= 50)
            {
                img.setAttribute('src','Fotos/foto-adulto-f.png')    
            }
            else
            {
                img.setAttribute('src', 'Fotos/foto-idoso-f.png')    
            } 
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${sex} com ${idade} anos de idade` 
        //adiciona uma imagem apos o utimo innerHTML
        res.appendChild(img)
    }
    
}