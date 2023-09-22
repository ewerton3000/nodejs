//Função sendo chamada antes dela ser declarada no código
console.log(soma(3 , 4))


// function declaração
function soma(x , y){
    return x + y
}

//function expression(expressão de função)
//Este tipo de  função não pode ser executada no código antes dela ser declarada(iniciada)

const sub = function (x , y){
    return x - y
}
console.log(sub(3 , 4))

//named function expression
//Este tipo de  função não pode ser executada no código antes dela ser declarada(iniciada)

const multi = function multi(x , y){
    return x * y
}
console.log(multi(3,4))





