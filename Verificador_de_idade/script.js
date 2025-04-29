function verificar(){
    let ano = document.getElementById('txtano')
    let fem = document.getElementById('fem')
    let masc = document.getElementById('masc')
    let res = document.getElementById('res')

    var data = new Date(); //calculando a idade
    var anoAtual = data.getFullYear();
    var idade = anoAtual - Number(ano.value)

    var img = document.createElement('img'); // <<--- CRIA A IMAGEM
    img.setAttribute('id', 'foto'); // coloca um id para a imagem
   

    if(ano.value.lengh == 0 || ano.value > anoAtual){
       res.innerHTML = 'Ano invalido!!'
    } else {
      if(masc.checked){
        var genero = 'masculino'
        if(idade >= 0 && idade <= 11){
           img.setAttribute('src', 'idade.imagens/menina.jpg')
         
        } else if (idade <= 30 ){
           img.setAttribute('src', 'idade.imagens/HomenJOvem.jpg')
       
         } else if(idade <= 50){
             img.setAttribute('src', 'idade.imagens/HomenAdulto.jpg')
         } else {
             img.setAttribute('src', 'idade.imagens/senhor.jpg')
        }
     
     } else if(fem.checked){
       genero = 'feminino'
      
       if(idade >= 0 && idade <= 11){
         img.setAttribute('src', 'idade.imagens/menina.jpg')
        } else if (idade <= 30 ){
          img.setAttribute('src', 'idade.imagens/MulherJovem.jpg')
       
         } else if(idade <= 50){
             img.setAttribute('src', 'idade.imagens/MulherAdulta.jpg')
       
         } else {
          img.setAttribute('src','idade.imagens/senhora.jpg')
        }
 
        
     } 
     img.style.width = '300px';
     img.style.borderRadius = '50%'
     res.innerHTML = `Detectamos uma pessoa de gereno ${genero} de ${idade} anos`
     res.appendChild(img)
    }
  }
