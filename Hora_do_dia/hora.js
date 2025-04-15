
function carregar(){
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `agora são ${hora} horas`
    
    if(hora >= 0 && hora < 12){
        imagem.src ='hora.img/manha.jpg'
        document.body.style.backgroundColor = '#e2cd9f'
    
    } else if(hora >= 12 && hora <18){
        imagem.src = 'hora.img/tarde.jpg'
        document.body.style.background = '#b98467'
    } else {
        imagem.src = 'hora.img/noite.jpg'
        Document.body.style.background = '#515154'
    }
}


