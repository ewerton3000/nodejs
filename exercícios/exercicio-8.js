//As tarifas aplicadas pela Uber, empresa de transporte privado urbano, foi
//reajustada. Faça um algoritmo que receba o preço atual da tarifa e o percentual
//a ser aplicado. Exiba ao final o valor atualizado.

let preco = 8.00
let percentual = 15

let percentualatual = (preco * percentual) /100
let final = percentualatual + preco
console.log(final)
console.log(percentualatual)