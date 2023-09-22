//DESAFIO: TENTE SOMAR TODOS OS PREÇOS DIGITADOS

function desconto(preco,porcentagem){
    if(preco < 5){
        return 0 

    } else{
        return (preco * porcentagem) /100
    }
}
function total(...preco ){
    let t =+ preco
    console.log(t)
}



function criarProduto(nome,porcentagem,preco){
    return{
        nome : nome ,
        preco : preco,
        porcentagem : porcentagem,
        desconto: preco - desconto(preco,porcentagem),
    }
}

const resul = total(criarProduto())

console.log(criarProduto("batata",100,76))
console.log(criarProduto("inseticida",4,80))

console.log(resul)
