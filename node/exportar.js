console.log(module.exports)//vazio
console.log(module.exports === this) //true
console.log(module.exports === exports)//true

//atributos
this.a = 1
exports.b = 2
module.exports.c = 3

//Mesmo deixando o exports nulo ele irá negar e  puxar as variaveis 
exports = null
console.log(module.exports)

//mesmo puxando um atributo ele não o imprime e continua puxando as variaveis
exports = {
    nome:'Teste'
}

console.log(module.exports)

module.exports = {publico : true}