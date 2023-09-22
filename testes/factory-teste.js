function criarProduto(nome,preco,desconto){
    let produto = {
        nome,
        preco,
        desconto,
        
    }

 produto.nome =nome 
 produto.preco = preco
 produto.desconto = (preco *desconto)/100
 produto.resul = preco - desconto

    return produto
}

console.log(criarProduto("tv",1000 , 10))