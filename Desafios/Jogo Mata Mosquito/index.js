var altura = 0
var largura = 0
var posicaox = Math.floor(Math.random() * largura) - 90
var posicaoy =Math.floor(Math.random() * altura) - 90

if(posicaox < 0){
    posicaox = 0
}
if(posicaoy < 0){
    posicaoy = 0
}

function ajustapalcojogo(){
    var altura = window.innerHeight
    var largura = window.innerWidth
 }
 function tamanhoaleatorio(){
    var classe = Math.floor(classe = Math.random() * 3)

    if(classe == 0){
        return 'mosquito1'
    }else if(classe == 1){
        return 'mosquito2'
    }else if(classe == 2){
        return 'mosquito3'
    }
 }
 function ladoaleatorio(){
    var classe = Math.floor(classe = Math.random() * 2)

    if(classe == 0){
        return 'ladoA'
    }else if(classe == 1){
        return 'ladoB'
    }
}

var mosquito = document.createElement('img')
mosquito.src('imagens/mosca.png')
mosquito.className = tamanhoaleatorio() + ' ' + ladoaleatorio()
mosquito.style.position = 'absolute'
mosquito.style.left= posicaox + 'px'
mosquito.style.top = posicaoy + 'px'

document.body.appendChild(mosquito)