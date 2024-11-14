
// Atividade 1  Crie um programa que pergunte ao usuário um número de 1 a 3 e exiba o nome correspondente ao número (1: "um", 2: "dois", 3: "três").=======================================

// const numero = parseInt(prompt('Digite um número de 1 a 3'))

// switch(numero){
//     case 1:
//        console.log('Um')
//        break
//     case 2:
//         console.log('Dois')
//         break
//     case 3:
//         console.log('Três')
//         break
//     default:
//         console.log('Numero Invalido')    
        
// }


// 2. Escreva um programa que peça ao usuário para inserir um número e verifique se o número é maior que 10.===============================================================================

// var numero = parseInt(prompt('Digite um numero?'))

// if (numero >=11){
//     console.log('Esse numero e maior que 10')
// }

// else if (numero <=9){
//     console.log('Esse numero é menor que 10')
// }

// else if (numero =10){
//     console.log('Esse numero é igual a 10')
// }


// 3. Desenvolva um programa que pergunte ao usuário o dia da semana (número de 1 a 7) e exiba o nome do dia correspondente.

// let numero = parseInt(prompt('Digite um número de 1 a 7'))

// switch(numero){
//     case 1:
//        console.log('Segunda-Feira')
//        break
//     case 2:
//         console.log('Terça-Feira')
//         break
//     case 3:
//         console.log('Quarta-Feira')
//         break
//         case 4:
//         console.log('Quinta-Feira')
//         break
//     case 5:
//         console.log('Sexta-Feira')
//         break
//     case 6:
//         console.log('Sabado')
//         break                
//     case 7:
//         console.log('Domingo') 
//         break               
//     default:
//         console.log('Numero Invalido')
// }    

// 4. Crie um algoritmo que solicite ao usuário uma cor (vermelho, verde, azul) e exiba uma mensagem correspondente à cor escolhida.

// let cor = prompt("Digite uma cor (vermelho, verde ou azul):").toLowerCase();


// switch (cor) {
//     case "vermelho":
//         alert("Você escolheu a cor vermelha! A cor da paixão e energia.");
//         break;
//     case "verde":
//         alert("Você escolheu a cor verde! A cor da natureza e tranquilidade.");
//         break;
//     case "azul":
//         alert("Você escolheu a cor azul! A cor da paz e serenidade.");
//         break;
//     default:
//         alert("Cor inválida! Por favor, digite 'vermelho', 'verde' ou 'azul'.");
// }

// 5. Faça um programa que solicite ao usuário dois números e verifique se ambos são pares.

// const numero 1 = parseInt(prompt('Informe o numeor'))
// const numero 1 = parseInt(prompt('Informe o numeor'))

// if(numero % 2 == 0 && numero2 % 2 ==0){
//     console.log('Seus numeros são pares')
// }else{
//     console.log('Algum dos numeros ou ambos não são pares')
// }

// 6. Desenvolva um programa que pergunte ao usuário uma operação matemática (+, -, *, /) e dois números, e realize a operação escolhida.

// const numero1 = parseInt(prompt('Informe o Numero: '))
// const numero2 = parseInt(prompt('Informe o Numero: '))
// const operacao =prompt('digite a operação desejada + - / *')

// let resultado;

// if(operacao === '+'){
//     resultado = numero1 + numero2
// }
// if(operacao === '-'){
//     resultado = numero1 - numero2
// }
// if(operacao === '/'){
//     resultado = numero1 / numero2
// }
// if(operacao === '*'){
//     resultado = numero1 * numero2
// }else{
//     console.log('seu resultado foi: '+ resultado)
// }

// 7. Escreva um programa que peça ao usuário uma nota de 0 a 10 e classifique a nota como "Baixa", "Média" ou "Alta" usando estrutura condicional if (ate 4.9 baixa, 5 a 6.9 media).

// const nota = parseInt(prompt('Qual foi a nota?'))

// if(nota <=4.9){
//     console.log('Nota baixa seu bosta')
// }else if(nota>=5 && nota <=6.9){
//     console.log('Nota media seu mediano')
// }
// else if (nota >= 7 && nota <=10){
//     console.log('você que é foda')
// }else{
//     console.log('nota invalida')
// }

// 9. Crie um algoritmo que verifique se um número inserido pelo usuário é par ou ímpar.

// function verificaParImpar(){
//     const numero1 = parseInt(prompt('Informe o numero: '))

//     if (numero % 2 == 1){
//     console.log('seu numero é impar')
//     } else {
//     console.log('seu numero e par')
//     }
// }

// function numeroUmTres(){
//     const numero = parseInt(prompt('Digite um número de 1 a 3'))

//    switch(numero){
//     case 1:
//        console.log('Um')
//        break
//     case 2:
//         console.log('Dois')
//         break
//     case 3:
//         console.log('Três')
//         break
//     default:
//         console.log('Numero Invalido')    
        
//    }
// }

// const questao = parseInt(prompt('Informe a questão desejada '))

// if (questao === 1){
//     numeroUmTres()
// }else if (questao === 9){
//     verificaParImpar()
// }else{
//     console.log('Questão Invalida')
// }
