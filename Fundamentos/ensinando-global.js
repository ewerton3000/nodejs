let a = 3
global.b = 123
this.c = 456
this.d = false
this.e ='teste'

console.log(this.a)
//console.log(global.a)
console.log(global.b)
console.log(this.c) //Imprimindo um this
console.log(module.exports.c)//module.exports é igual ao this.
console.log(module.exports === this)
console.log(module.exports)//Imprima aqui e vc irá entender

//criando uma variável maluca : sem var e let
abc = 3 // não faça isso dentro do NODEJS
console.log(global.abc)
dce = 5
const dce = 4
console.log(dce)
console.log(global.dce)

