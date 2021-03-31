
function carregar()
{
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#hm')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 22
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 5 && hora < 12)
    {
    //bom dia
        img.src = 'manha.png'
        document.body.style.background = '#038be1'
    }
    else if(hora >=12 && hora <= 18)
    {
        //boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#fa7d00'
    }
    else
    {
        //boa noite
        img.src = 'noite.png'
        document.body.style.background = '#112433'
    }
} 