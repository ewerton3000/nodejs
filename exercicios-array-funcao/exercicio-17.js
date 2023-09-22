/*
Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
Exemplos:
somarNumeros([10, 10, 10]) // retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60 */

//Com spread(...) para juntar os elementos do array pelo conteúdo inserido na função
function somaNumeros(...array){
 const numeros = array.reduce((total , quantidade) => total + quantidade)
 console.log(numeros)
}

somaNumeros(15,15,15,80)

//Com reduce para somar arrays sem função

const numeros = [22, 67 , 82 , 79]
const soma = numeros.reduce((total , quantidade) => total + quantidade)
console.log(soma)