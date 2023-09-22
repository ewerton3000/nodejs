const nums = [1, 2 , 3 , 4, 5] //Array

//For com propósito
let resultado = nums.map(function(e){
    return e * 2   //todos os números serão multiplicados por 2
})

console.log(resultado)

const soma10 = e => e +10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}` 
//Parsefloat: convertendo o valor em número flutuante
//tofixed(2) Para deixar o valores depois da virgula com apenas números
//replace Substituir o ponto (.) por virgula (,)


//todos os maps convertendo o array nums e retire um deles para ver o resultado
resultado = nums.map(soma10).map(triplo).map(paraDinheiro) 
console.log(resultado)