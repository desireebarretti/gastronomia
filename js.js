let tituloHist = document.querySelector('.titulo_hist')
let tituloIngred = document.querySelector('.titulo_ingr')
let tituloPreco = document.querySelector('.titulo_preco')

let paragrafoHist = document.querySelector('.paragrafo_historia')
let paragrafoIngred = document.querySelector('.paragrafo_ingred')
let paragrafoPreco = document.querySelector('.paragrafo_preco')


function abaClicadaHistoria() {
    tituloHist.style.background = '#ffffffd8'
}

function abaClicadaIngred() {
    tituloHist.style.background = '#f7ddddd8'
    tituloIngred.style.background = '#ffffffd8'
    paragrafoIngred.style.display = 'block'
    paragrafoHist.style.display = 'none'
}

function abaClicadaPreco() {
    tituloPreco.style.background = '#ffffffd8'
    paragrafoPreco.style.display = 'block'
    paragrafoHist.style.display = 'none'
}