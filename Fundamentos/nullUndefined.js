/*Atribuição exemplo
var a = 3
var  b = a
//b++
console.log(a, b)*/

let valor //não inicializada
console.log(valor)

valor = null //null =Ausência de valor 
console.log(valor)
//console.log(valor.toString())//Erro!

const produto = {}//Objeto
console.log(produto.preco)
console.log(produto)

produto.preco= 3.50
console.log(produto)
produto.preco = undefined // evite atribuir undefined
//console.log(!!produto.preço)//false !!
//delete produto.preco//Deletando o valor do preco
 console.log(produto)
 console.log(!!produto.preco)
console.log(produto) 

 produto.preco = null // sem preco