document.addEventListener('DOMContentLoaded', gameStart)

let kulka
let dziurka
const portraitPos = {
    alpha:0,
    beta:90,
    gamma:0
}
const pochylenie = {
    alpha:0,
    beta:0,
    gamma:0
}

const kulka = {
    htmlObject: undefined,

} 

function gameStart(){
    
    pobierzElementyGry()

    wysrodkujKulke()

    inicjujDziurke()

    window.addEventListener('deviceorientation', zmianaPochylenia)
}

function pobierzElementyGry(){
    kulka.htmlObject = document.querySelector('#kulka')
    dziurka = document.querySelector('#dziurka')
}


function inicjujDziurke() {
    const top = Math.random()* window.innerHeight - dziurka.offsetHeight
    const left = Math.random() * window.innerHeight - dziurka.offsetHeight
    dziurka.style.top = `${top}px`
    dziurka.style.left = `${left}px`
}

function wysrodkujKulke(){
    kulka.style.top = `${window.innerHeight/2}px`
    kulka.style.left = `${window.innerHeight/2}px`
}

function zmianaPochylenia(e){
pochylenie.alpha = e.alpha - portraitPos.alpha
pochylenie.beta = e.beta - portraitPos.beta
pochylenie.gamma = e.gamma - portraitPos.gamma

}