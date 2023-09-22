//Função anonima soma
const soma = function (x , y ){
    return x + y
}

// operacao é a função anonima
const imprimirResultado = function(a , b , operacao = soma){
    console.log(operacao(a,b))
}
imprimirResultado(3 , 4)
imprimirResultado(3 , 4 ,soma)
imprimirResultado(3 , 4 , function( x , y ){
    return x - y
})
imprimirResultado(3 , 4, (x , y) => x * y)


//Função anonima dentro de um objeto chamado pessoa
const pessoa = {
    falar: function(){
        console.log('Opa')
    }
}

pessoa.falar()