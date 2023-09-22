const Geral = {nome :"Edimilson" , sobrenome:"Duarte Da Silva" , telefone:28493571 ,rg:"78.963.948 27"}
console.log(Geral)
console.log(Geral.nome = "Gustavo",Geral.sobrenome ="Lima Santos", Geral.telefone = 80706951 , Geral.rg ="21.756.942 - 97")
console.log(Geral)

//Congelando
Object.freeze(Geral)

Geral.nome = "fabio"
console.log(Geral)
delete Geral.nome
console.log(Geral.nome)

//Usando o Object.freeze quando a constante é criada
const area = Object.freeze({nome:triangulo , percorrido:85 , maximo:200})
console.log(area) 