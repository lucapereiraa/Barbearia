

// Tipos de dados
// Texto = string
    const texto= 'Eu sou um texto'
// numerico = number
    const numero_inteiro = 30
    const numero_flutuante = 18.5
// logica = boolean
    const ligado = false
// nulo = null
    const presidente = null
// lista de dados = arry
    const frutas = ['maça', 'goiaba', 'uva']
    
// não é um numero = NaN (Not a number)   
// indefinido = undefined

// console .log(typeof(texto))
// console .log(typeof(numero_inteiro))
// console .log(typeof(numero_flutuante))
// console .log(typeof(ligado))
// console .log(typeof(presidente))
// console .log(typeof(frutas))

// let idade = parseInt(prompt('Informa a sua idade'))

// console.log(idade)
// console.log(typeof(idade))

// console.log(parseInt(idade))
// console.log(typeof(parseInt(idade)))


// let numero1 = parseInt(prompt('Primeiro numero'))
// let numero2 = parseInt(prompt('Segundo numero'))

// let soma = numero1 + numero2
// let subtracao = numero1 - numero2
// let multiplicacao = numero1 * numero2
// let divisao = numero1 / numero2


// console.log(soma)
// console.log(subtracao)
// console.log(multiplicacao)
// console.log(divisao)


// var idade = parseInt(prompt('Digite a Idade'))

// if (idade >= 150){
//     console.log('Idade Invalida')
//     alert('Idade Invalida')
// }
// else if(idade >= 18) {
//     console.log('Você é maior de idade')

// }else{
//     console.log('Menor de Idade')
// }
    

// var idade = parseInt(prompt('Qual sua Idade?'))

// if(idade >= 18){
//     console.log('Pode assistir o Filme')
// }else if(idade >= 16) {
//     var acompanhado = prompt('Está acompanhado? s / n')

//     if (acompanhado == 's'){
//         console.log('Pode Assistir')
//     }else{
//         alert('Você não pode assistir desacompanhado')
//     }
// }else{
//     alert('Você é menor de idade')
// }

// var atividade = true
// var nota_atividade = 3

// if ((atividade == true) && (nota_atividade >=5)){
//     console.log('Pode ir Embora')
// }else{
//     console.log('Não pode ir embora')
// }

// const voto =parseInt(prompt("Informe seu candidato 13 para fazer o L e 22 para fazer arminha"))


// switch(voto){
//     case 13:
//         console.log('fez o L')
//         break    
//     case 22:
//         console.log('fez arminha')
//         break
//     default:
//         console.log('voto Invalido')    

// }


// if (voto == 13){
//     console.log('você fez o L')
// }else if (voto == 22){
//     console.log('Você fez arminha')
// }else{
//     console.log('Voto Invalido')
// }


// let maior = 0

// let numero = parseInt(prompt('informe o numero 1'))

// if (numero > maior){
//     maior = numero
// }

//  numero = prompt('informe o numero 2')

// if (numero > maior){
//     maior = numero
// }

//  numero = prompt('informe o numero 3')

// if (numero > maior){
//     maior = numero
// }

//  numero = prompt('informe o numero 4')

// if (numero > maior){
//     maior = numero
// }

// console.log(' O maior numero foi ' + maior)

// let numero
// let maior = 0

// for(let contador ou i = 1; contador ou i <=4; contador ou i++){
//      numero = parseInt(prompt('informe o numero '))

//   if (numero > maior){
//     maior = numero
//   }
// }

// console.log('O mairo numero foi '+ maior)

let contador = 0;
let limite = 4
let numero
let maior = 0

while (contador < limite){
         numero = parseInt(prompt('informe o numero '))

  if (numero > maior){
    maior = numero

  }

  contador = contador + 1
//   contador ++

}

console.log('O maior numero foi '+maior)
