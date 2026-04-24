var altura = 0
var largura = 0
var vidas = 1
var tempo = 10 + 1
var criamosquitotempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')
if(nivel === 'normal'){
    criamosquitotempo = 1500
}else if(nivel === 'dificil'){
    criamosquitotempo = 1000
}else if(nivel === 'chuk'){
    criamosquitotempo = 750
}

var cronometro = setInterval(function(){
    tempo -= 1
    if(tempo < 0){
        clearInterval(cronometro)
        window.location.href = ('vitoria.html')
    }else{
        document.getElementById('spanc').innerHTML = tempo
    }
}, tempo*1000)

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

function posicaoRandomica(){
    if(document.getElementById('mosquito') = true){
        document.getElementById('mosquito').remove()

        if(vidas > 3){
            window.location.href = 'fim_de_jogo.html'
        }else{
            document.getElementById('v' + vidas).src = 'imagens/coracao_cheio.png'
        }
    }

    var posicaox = Math.floor(Math.random() * largura) - 90
    var posicaoy = Math.floor(Math.random() * altura) - 90

    if(posicaox < 0){
        posicaox = 0
    }
    if(posicaoy < 0){
        posicaoy = 0
    }
    var mosquito = document.createElement('img')
    mosquito.src('imagens/mosca.png')
    mosquito.className = tamanhoaleatorio() + ' ' + ladoaleatorio()
    mosquito.style.position = 'absolute'
    mosquito.style.left= posicaox + 'px'
    mosquito.style.top = posicaoy + 'px'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosquito)
}
setInterval(function(){
    posicaoRandomica()
}, criamosquitotempo)