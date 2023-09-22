/*
Criar uma função que receba um array de números e retorne o menor número desse array.
Exemplos:
menorNumero([10, 5, 35, 65]) // retornará 5
menorNumero([5, -15, 50, 3]) // retornará -15
 */

function menorNumero(...array){
for(array,menor=undefined, i=0; i < array.length ; i++){
    if(menor == undefined){
    menor = array[i]
    }
    if( array[i] < menor){
        menor = array[i]
      }
}
console.log(`O menor número é ${menor}`)
}
menorNumero(7000, 1000 , 500 , 9000, 250)