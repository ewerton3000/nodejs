/*
Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.
Exemplos:
segundoMaior([12, 16, 1, 5]) // retornará 12
segundoMaior([8, 4, 5, 6]) // retornará 6
 */

function segundoMaior(array){
    let maior1
    let maior2
    maior1=array[0]
    maior2=array[0]
    for(i=0;i<array.length;i++){
        if(array[i] > maior1){
            maior1=array[i]
        }
        if(array[i] >maior2 &&array[i] < maior1){
            maior2=array[i]
        }
    }
    console.log(`O segundo é ${maior2}`)
}
segundoMaior([8,7,11,6,5,4,70,51])