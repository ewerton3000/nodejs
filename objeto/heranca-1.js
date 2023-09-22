const ferrari = {
    modelo:'F40',
    velMax:324
}

const volvo = {
    modelo:'V40',
    velMax:200
}
//Inserindo o __proto__ dentro dos objetos
console.log(ferrari.prototype) // indefinido
console.log(ferrari.__proto__) //Vazio
console.log(ferrari.__proto__ === Object.prototype) //True
console.log(volvo.__proto__ === Object.prototype) //True 
//console.log(Object.prototype.__proto__) //null
console.log(Object.prototype.__proto__ === null) //True

function MeuObjeto() {}
console.log(typeof Object , typeof MeuObjeto) //Ambos possuem prototype function  function
console.log(Object.prototype, MeuObjeto.prototype)