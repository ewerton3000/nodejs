//Faca um programa onde o lojista possa entrar com o preco do produto e
//receba as seguintes informacoes:
//O valor com 10% de desconto para pagamento a vista.
//O valor da prestacao em 5x O valor da prestacao para parcelamento sem juros,
//com 20% de acrescimo no valor do produto com juros, em 10x, .
let preco = 600.00
let vista =  preco - (preco*10) /100
let prestacao = preco/5
let acrescimo = (preco*20)/100 + preco

console.log(`Preço do produto ${preco}`)
console.log(`Preço a vista : ${vista}`)
console.log(`A prestação 5x sem juros  é de : ${prestacao}`)
console.log(`O acrescimo de 20 % em 10x é de : ${acrescimo} `)