function rand({ min = 0 , max = 1000}){
    const valor = Math.random() *(max - min) + min
    return Math.floor(valor)
}
const obj = {max: 50 , min: 40}
console.log(rand(obj))
console.log(rand({ min: 955}))
console.log(rand({}))//vazio
console.log(rand())//com erro




//O Math.random pode ser usado  dentro de um mini projeto com números sorteados