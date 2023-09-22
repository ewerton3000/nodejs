console.log('Objetos com atributos iguais')
//Objeto com atributos iguais
const obj1= {nome:"carne moida",preco:50,nome:"queijo",preco:25,nome:"bife",preco:80}

for ( a in obj1 ){
    console.log(a ,obj1[a])
}
console.log('Imprime apenas o ultimo valor dos atributos')
console.log()
console.log()
console.log('Objetos com nomes diferentes')
//Objeto com atributos diferentes
const obj2 = {nome1:"carne moida",preco1:50,nome2:"queijo",preco2:25,nome:"bife",preco:80}
for(b in obj2){
    console.log(b , obj2[b])
}