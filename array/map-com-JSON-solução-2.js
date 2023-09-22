const carrinho = [ //Array com valores escritos em formato JSON                          
    '{"nome": "Borracha", "preco" :3.45}',
    '{"nome": "Caderno", "preco" :13.90}',
    '{"nome": "Kit de Lapis", "preco" :41.22}',
    '{"nome": "Caneta", "preco" :7.50}'

]
//Convertendo o formato string JSON para array
var array =  Object.keys(carrinho).map(i =>JSON.parse(carrinho[Number(i)]))

var carro = array.map(entrada =>{
    return{
        "preco":entrada.preco
    }
})

console.log(carro)