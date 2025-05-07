let num = document.getElementById('num')
let list = document.querySelector( 'select#flist')
let res = document.getElementById('res')
let valores = []


function isNum(n){
    if(n >= 1 && n <= 100){
      return true
    } else {
      return false;
    }
}

function inlist(n, l){

  if(l.indexOf(n) != -1){
    return true;
  } else {
    return false
  }
}

function adicionar(){
  let n = Number(num.value); 
  
  if(isNum(n) && !inlist(n , valores)){
    valores.push(n);
    let item = document.createElement('option')
    item.text = `valor ${n} adicionado`
    list.appendChild(item)




  } else {
    window.alert('valor incorreto')
  }

  num.value = " "
}


function finalizar(){
  if(valores.length === 0){
    window.alert('a lista esta vazia!!!')
  } else {
    res.innerHTML = " "
    res.innerHTML += `<p>temos ao todo ${valores.length} numeros cadastrados </p>` 
    
    valores.sort()
    res.innerHTML += `<p>o menor numero cadastrado foi ${valores[0]}</p>`
    res.innerHTML += `<p>o maior numero cadastrado foi ${valores[valores.length - 1]}</p>`

    let ans = 0;

    for(let i = 0; i < valores.length; i++){
      ans += valores[i];
    }

    res.innerHTML += `<p> a soma dos valores é ${ans}</p>`
    res.innerHTML += `<p>a media dos valores é ${ans / valores.length}</p>`
  }
}