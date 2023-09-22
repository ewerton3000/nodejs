const produtos = [
    {nome : 'Notebook',preco:2499, fragil:true},
    {nome : 'iPad Pro',preco:4199, fragil:true},
    {nome : 'Copo de Vidro',preco:12.49, fragil:true},
    {nome : 'Copo de Plastico',preco:18.99, fragil:false},
]
/*console.log(produtos.filter(function(p){
    return p.preco > 2400 //condição para retornar a posição de array
}))*/
const relacao = (produtos.filter(function(c){
    return c.fragil == true
}))
const relacao1 = console.log(produtos.filter(function(t){
    return t.preco >=500
}))
console.log(relacao)