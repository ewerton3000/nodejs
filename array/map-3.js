//Criando um array com a mesma quantidade de posições com o prototype
//utilizando o map do arquivo map2 

Array.prototype.map2 = function(callback){
    const newArray = []
    for (let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i , this))
    }
    return newArray
}

const carrinho= [ //Array com valores escritos em formato JSON                          
    '{"nome": "Borracha", "preco" :3.45}',
    '{"nome": "Caderno", "preco" :13.90}',
    '{"nome": "Kit de Lapis", "preco" :41.22}',
    '{"nome": "Caneta", "preco" :7.50}'

]

const teste = new Array.prototype.map2("feijao",7.80)
// Retornar um array apenas com os preços
//Convertendo os valores em strng JSON para array
const paraObjeto = json =>JSON.parse(json)
const apenasPreco = produto => produto.preco

const dinheiro = produto => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`
const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)

