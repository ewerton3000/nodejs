//DESAFIO SOME OS ATRIBUTOS PREÇO

function getProduto(moeda = `R$`){
    
    return`${moeda} ${(this.nome)} ${(this.preco)}`
    
    
}
const compra = {
    nome: 'Açucar',
    preco: 4.50,
    getProduto
}

global.nome = "feijão"
global.preco = 7.80
const total = {
    getTotal
}



   


console.log(getProduto())
console.log(compra.getProduto())
console.log(total.getTotal())