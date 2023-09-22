//- Os preços dos produtos no site AliExpress.com estão em dólar. Faça um
//algoritmo que leia o preço de um produto (em dólar), a cotação do dia
// e informe o preço do produto em reais.
let nome = "Esteroíde"
let dollar = 25.00
let cotacao = 5.06
let real  = cotacao * dollar

console.log(`Nome do produto ${nome} preço em dollar U$$ ${dollar}`)
console.log(`Cotação do dia: ${cotacao} preço em reais R$${real.toFixed(2)}`)
