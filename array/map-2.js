const carrinho= [ //Array com valores escritos em formato JSON                          
    '{"nome": "Borracha", "preco" :3.45}',
    '{"nome": "Caderno", "preco" :13.90}',
    '{"nome": "Kit de Lapis", "preco" :41.22}',
    '{"nome": "Caneta", "preco" :7.50}'

]
// Retornar um array apenas com os preços
//Convertendo os valores em strng JSON para array
const paraObjeto = json =>JSON.parse(json)
const apenasPreco = produto => produto.preco

const dinheiro = produto => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`
const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)