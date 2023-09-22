function raiz(funcao1 ,funcao2){
this.desconto = function(preco, porcentagem){
    if(preco < 5){
        return 0
    }
    else{
        let precodesconto =(preco * porcentagem) /100
        console.log(precodesconto)
    }
    
}
this.total = function (preco = desconto() ){
    let t =+ preco
    console.log(t)
}
}

uno = new raiz
soma = uno.total()
r = uno.desconto(100,10)
console.log(r)

console.log(soma)