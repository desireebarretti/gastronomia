const navs = document.querySelector('.navs')

navs.addEventListener('click', function(e){
    let artHist = document.querySelector('.art_hist')
    let artIngr = document.querySelector('.art_ingred')
    let artPreco = document.querySelector('.art_preco')

    let btnHist = document.querySelector('#historia')
    let btnIngred = document.querySelector('#ingredientes')
    let btnPreco = document.querySelector('#preco')

    if(e.target.dataset.id === 'historia'){
        artHist.style.display = 'block'
        artIngr.style.display = 'none'
        artPreco.style.display = 'none'
        btnHist.style.color = '#75191bb1'

    } else if(e.target.dataset.id === 'ingredientes'){
        artIngr.style.display = 'block'
        artHist.style.display = 'none'
        artPreco.style.display = 'none'
        btnIngred.style.color = '#75191bb1'

    } else {
        artPreco.style.display = 'block'
        artIngr.style.display = 'none'
        artHist.style.display = 'none'
        btnPreco.style.color = '#75191bb1'
    }
})