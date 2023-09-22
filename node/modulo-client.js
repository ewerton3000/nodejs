//A prova de que o this é um objeto 
console.log(this)
//Chamando os módulos com o require
const moduloA = require('./moduloA')
const moduloB = require('./moduloB')

//Executando os módulos
console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boanoite())
console.log(moduloB)