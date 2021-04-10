var carta01 = {
    nome: "Squirtle",
    imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.tenor.com%2Fimages%2F2935177621c2b16ce0d06bb972329ea8%2Ftenor.gif&f=1&nofb=1",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 90
    }
}

var carta02 = {
    nome: "Bulbasauro",
    imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.tenor.com%2Fimages%2Fd905e226c631c30b3f3ebc88d0804389%2Ftenor.gif%3Fitemid%3D10231491&f=1&nofb=1",
    atributos: {
        ataque: 70,
        defesa: 65,
        magia: 85
    }
}

var carta03 = {
    nome: "Butterfree",
    imagem: "https://media1.giphy.com/media/taIN8qu0tqMw/giphy.gif",
    atributos: {
        ataque: 88,
        defesa: 62,
        magia: 90
    }
}
var carta04 = {
    nome: "Meowth",
    imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F10RYeVVvjztLO%2Fgiphy.gif&f=1&nofb=1",
    atributos: {
        ataque: 89,
        defesa: 65,
        magia: 97
    }
}

var carta05 = {
    nome: "Ninetales",
    imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbuffy.mlpforums.com%2Fmonthly_2019_07%2Fezgif-4-4595cbfb55a2.gif.cdae9818216a634a6377d9bc8fb4c390.gif&f=1&nofb=1",
    atributos: {
        ataque: 31,
        defesa: 93,
        magia: 75
    }
}

var carta06 = {
    nome: "Pikachu",
    imagem: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-ftSekuAn0ZA%2FUUAxwNYGCCI%2FAAAAAAAAHq0%2F2OwEF2-VXiU%2Fs1600%2Fpokemon%2Bpikachu.gif&f=1&nofb=1",
    atributos: {
        ataque: 88,
        defesa: 50,
        magia: 90
    }
}
var carta07 = {
    nome: "Arbok",
    imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpa1.narvii.com%2F6562%2F2002e60263821eea71882b1b053007b9d0669dbb_hq.gif&f=1&nofb=1",
    atributos: {
        ataque: 90,
        defesa: 20,
        magia: 10
    }

}
var carta08 = {
    nome: "Beedrill",
    imagem: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F68.media.tumblr.com%2F85609254c41e08a6ba6b06c462394ec5%2Ftumblr_ol4njwXJUC1vvdpj4o1_500.gif&f=1&nofb=1",
    atributos: {
        ataque: 50,
        defesa: 70,
        magia: 60
    }

}


var cartaMaquina
var cartaJogador
var cartas = [carta01, carta02, carta03, carta04, carta05, carta06, carta07, carta08] 
// 0          1           2

var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas() {
    var divQuantidadeCartas = document.getElementById('quantidade-cartas')
    var html = "Quantidade de cartas no jogo: " + cartas.length

    divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar() {
    var divPlacar = document.getElementById('placar')
    var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina"

    divPlacar.innerHTML = html
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
        pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }

    if (cartas.length == 0) {
        alert("Fim de jogo")
        if (pontosJogador > pontosMaquina) {
            htmlResultado = '<p class="resultado-final">Venceu</p>'
        } else if (pontosMaquina > pontosJogador) {
            htmlResultado = '<p class="resultado-final">Perdeu</p>'
        } else {
            htmlResultado = '<p class="resultado-final">Empatou</p>'
        }
    } else {
        document.getElementById('btnProximaRodada').disabled = false
    }

    divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled = true

    atualizaPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeDeCartas()
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        console.log(atributo)
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada() {
    var divCartas = document.getElementById('cartas')

    divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`

    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnJogar').disabled = true
    document.getElementById('btnProximaRodada').disabled = true

    var divResultado = document.getElementById('resultado')
    divResultado.innerHTML = ""
}