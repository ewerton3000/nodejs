require('./global') //Puxando o módulo global.js

//executando a função dentro de global.js

console.log(MinhaApp.saudacao())

//Sobreescrevendo o valor de MinhaApp
MinhaApp.nome = 'Eita!'
console.log(MinhaApp.nome)
MinhaApp.saudacao = 'Putz'
console.log(MinhaApp.saudacao)