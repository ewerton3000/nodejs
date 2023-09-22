//Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
//e o resto da divisão destes dois valores.
function dividir(dividendo,divisor){
console.log("Resultado da divisão:",(dividendo/divisor).toFixed(2))
console.log("Resto : ",dividendo % divisor) 
}
console.log(dividir(100,9))