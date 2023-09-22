const padaria = [
    '{"nome":"pão", "preco":1.00 }',
    '{"nome":"café", "preco":8.00}',
    '{"nome":"farinha de trigo","preco":4.00}',
    '{"nome":"fermento" , "preco":2.50}',
    '{"nome":"ovos", "preco":5.00 }',
    '{"nome":"farofa" ,"preco":6.00}'
]
const converter = json =>JSON.parse(json)
const preco = preco => preco.preco
const nome = nome =>nome.nome
const dinheiro =  e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`
const nomes = padaria.map(converter).map(nome)
const mostra = padaria.map(converter).map(preco).map(dinheiro)
console.log(nomes,mostra)