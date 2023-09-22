//- Elabore um algoritmo que leia 5 valores inteiros e apresente o maior, o menor e a media.

const array = [80,77,65,12,97]
let maior = array[0]
let menor = array[0]
for (i=0,soma=0;i<array.length;i++){
    soma= soma + array[i]
    if(array[i] > maior ){
     maior = array[i]
    }
    else if(array[i] < menor ){
    menor = array[i]
    }
}
media = soma /array.length
console.log(`maior numero ${maior}`)
console.log(`menor número ${menor}`)
console.log(`A soma foi ${soma} e a média é ${media.toFixed(2)}`)
