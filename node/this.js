console.log(this === global) //false 
console.log(this === module)//false

this.nome = 'Jade' // Dentro do escopo global fica dentro do module.exports

console.log(this == module.exports)//true
console.log(this === exports)//true

function logThis(){
    console.log('Dentro de uma função')
    console.log(this === exports)//false
    console.log(this === module.exports)//false
    console.log(this === global)//true
    this.fruta= 'legume'//Dentro de uma função ... pode ser usado  dentro do escopo global 
}

logThis() //Executando a função