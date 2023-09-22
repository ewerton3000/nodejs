Number.prototype.total = function (preco1,preco2){
    return this >= preco1 && this <= preco2 
}

const valor = function(preco){
    if(preco.total(1,3)){
        console.log('Preço barato')
    }
    
    else if(preco.total(4,6)){
        console.log('Preço bom')
    }
    else if(preco.total(7,9)){
        console.log('Preço razoavel')
    }
    else if(preco.total(10,13)){
        console.log('Preço bem Razoavel')
    }
    else if(preco.total(14,17)){
        console.log('Preço Caro')
    }
    else{
        console.log('De graça')
    }
}
valor(5)
valor(0)
valor(7)
valor(16)