var imagem = document.getElementById("imagem")
var botoes = document.getElementById("botoes")
let corElemento = 0
let intervaloId = 0

var semaforo = (event) => {
    pararAutomatico()
    ligar[event.target.id]()
}

var proxElemento = () => {
    if (corElemento < 2) {
        corElemento++
    } else {
        corElemento = 0
    }
}

var trocaCor = () => {
    const cores = ["vermelho", "amarelo", "verde"]
    const cor = cores[corElemento]
    ligar[cor]()
    proxElemento()
}

var pararAutomatico = () => {
    clearInterval (intervaloId)
}

var ligar = {
    "vermelho": () => imagem.src = "imagens/vermelho.png",
    "amarelo": () => imagem.src = "imagens/amarelo.png",
    "verde": () => imagem.src = "imagens/verde.png",
    "automatico": () => intervaloId = setInterval(trocaCor, 1000)
}

botoes.addEventListener("click", semaforo)