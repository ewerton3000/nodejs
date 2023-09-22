//Funções anonimas para soma ,subtração,divisão e multiplicação
const soma = function(x , y){
return x + y
}

const subtrai = function(x , y){
    return x - y
}

const multi = function( x, y ){
    return x * y
}

const divisao = function( x , y){
    return x / y
}


//Criando uma função inserir as funções anonimas operação e as de cima

const imprimirsoma = function (a , b, operacao = soma){
   console.log(soma(a,b))
}

const imprimirsubtrai = function(a, b , operacao = subtrai){
    console.log(subtrai(a,b))
}

const imprimirmulti = function(a,b , operacao = multi){
    console.log(multi(a,b))
}
const imprimirdivisao = function(a,b, operacao = divisao){
    console.log(divisao(a,b))
}


imprimirsoma(7 , 9)
imprimirsubtrai(8, 4)
imprimirmulti(5,8)
imprimirdivisao(9 , 7)