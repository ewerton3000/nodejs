Array.prototype.reduce2 =function(callback , valorInicial){
    const indiceInicial = valorInicial ? 0 : 1 //Se o valorInicial não tiver valor será 0 ou 1
    let acumulador = this[0]
    for (let i = indiceInicial; i< this.length; i++){
        acumulador = callback(acumulador, this[i] , i ,this)
    }
    return acumulador
}

const soma = (total , valor )=> total + valor //Somando o total(acumulador) e o valor(valoratual)
const nums = [1 , 2 , 3 , 4 , 5 , 6] 
console.log(nums.reduce(soma,21))//Somando todos os arrays o segundo é um valor para inserir na função