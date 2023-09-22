/*
Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
têm a quantidade de dígitos indicada pelo segundo parâmetro.
Exemplos:
filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2) // retornará [38, 10, 11]
filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1) // retornará [5, 9, 1]
 */
function filtrarPorQuantidadeDeDigitos(array,digito){
for(i= 0;i<array.length;i++){
    if(digito == 1 && array[i] < 10){
 console.log(array[i])
}

if(digito == 2 && array[i]>=10){
console.log(array[i])
}

if(digito == 3 && array[i]>=100 ){
    console.log(array[i])
}

if(digito == 4 && array[i]>=1000){
    console.log(array[i])
}

}
}

filtrarPorQuantidadeDeDigitos([20,1,111,4242,9, 7,5],1)