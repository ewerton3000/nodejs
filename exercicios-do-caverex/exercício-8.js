//As tarifas aplicadas pela Uber, empresa de transporte privado urbano, foi
//reajustada. Faça um algoritmo que receba o preço atual da tarifa e o percentual
//a ser aplicado. Exiba ao final o valor atualizado.
 let precoatual = 32
  console.log(`preço atual ${precoatual}`)
 let percentual = 4
 console.log(`percentual = ${percentual}`)
 percentual = (precoatual*percentual)/100
let total = precoatual + percentual
console.log(`total = ${total.toFixed(2)}`)
