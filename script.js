var setaDireita = window.document.getElementById("seta-direita")
var Luan = window.document.getElementById("Luan")
var Thiago = window.document.getElementById("Thiago")
var Edilson = window.document.getElementById("Edilson")
var setaEsquerda = window.document.getElementById("seta-esquerda")


function RolarParaDireita() {
    Luan.style ="display:none"
    Edilson.style ="display:flex"
    setaDireita.style = "display: none"
    setaEsquerda.style = "display:flex; margin-top:55px"
}

function RolarParaEsquerda() {
    Luan.style ="display:flex"
    Edilson.style ="display:none"
    setaDireita.style = "display: flex; margin-top:55px"
    setaEsquerda.style = "display:none"
}