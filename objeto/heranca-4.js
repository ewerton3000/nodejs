function MeuObjeto() {} //função construtora 
console.log(MeuObjeto.prototype) //É um objeto( {} )

//Instanciando o objeto MeuObjeto nos objetos obj1 e obj2 
const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
//Se ambos forem iguais eles acessam o __proto__(que é oculto) dará true quer dizer que eles aponta pra um prototype
//ou seja 

console.log(obj1.__proto__ === obj2.__proto__)//true
console.log(MeuObjeto.prototype === obj1.__proto__)//true

MeuObjeto.prototype.nome = 'Anônimo' //Inserindo o valor no atributo nome
MeuObjeto.prototype.falar = function(){
    //Puxando o atributo da zona global com this
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}
obj1.falar() //executando o objeto prototipo(prototype)
obj2.nome = 'Rafael' //Inserindo valor no atributo no no objeto obj2
obj2.falar()

//Criando um obj3 e inserindo o prototype nele
const obj3 = {}
obj3.__proto__= MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()


//Resumo da loucura...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)//true
console.log(MeuObjeto.__proto__ === Function.prototype)//true
console.log(Function.prototype.__proto__ === Object.prototype)//true
console.log(Object.prototype.__proto__ === undefined) //É nulo
console.log(Object.prototype.__proto__ === undefined) //É false Ou seja não existe Objeto depois do Object.prototype