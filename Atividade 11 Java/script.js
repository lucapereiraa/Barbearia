const titulo = document.getElementsByTagName('h1')

const paragrafo =document.getElementById('paragrafo')

const botao = document.querySelector('button')


console.log(titulo[1].innerText)


titulo[1].innerText = 'Manipulado no JS'

console.log(paragrafo)
console.log(botao)


// botao.style.padding = '5rem'
// botao.style.backgroundColor= 'red'



function trocaCor(){
    botao.classList.toggle('botao')
}

function trocaBackground(){
    const body = document.querySelector('body')

    const cor =prompt('informe a cor:')

    body.style.backgroundColor = cor

}