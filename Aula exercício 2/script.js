
function carregar()
{
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#hm')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `<h1>Agora são ${hora} horas</h1>`

    if (hora >= 5 && hora < 12)
    {
    //bom dia
        img.src = 'manha.png'
        document.body.style.background = '#038be1'
        msg.style = 'color: #038be1'
    }
    else if(hora >=12 && hora <= 18)
    {
        //boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#fa7d00'
        msg.style = 'color: #fa7d00'
        }
    else
    {
        //boa noite
        img.src = 'noite.png'
        document.body.style.background = '#112433'
        msg.style = 'color: #112433'
    }
} 