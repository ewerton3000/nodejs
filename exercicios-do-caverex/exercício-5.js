//Em épocas de pouco dinheiro, os comerciantes estão procurando aumentar suas
//vendas oferecendo desconto. Faça um algoritmo que possa receber um valor de
//um produto e que escreva o novo valor tendo em vista que o desconto foi de 9%.

let preco = 2549.95
console.log(`Preço = ${preco}`)
let desconto = 9

let totaldesc =  (preco * desconto) /100

console.log(`desconto = ${totaldesc.toFixed(2)}`)

preco = preco - totaldesc
console.log(`preço com desconto = ${preco.toFixed(2)}`)