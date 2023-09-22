//estrategia para gerar valor padrão
function soma1(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b+ c
}
console.log(soma1(), soma1(3 ), soma1(1 , 2 , 3), soma1(0,0,0))

//Estrategia 2 , 3 e 4 para gerar valor padrão
function soma2(a ,b ,c){
    a = a !== undefined ? a : 1 //Se a for diferente de undefined ele passa o valor inserido senão o a recebe 1
   b = 1 in arguments ? b : 1 //Dentro de arguments existe o valor 1 senão pegar o valor 1 para b
   c = isNaN(c) ? 1 : c //Se a variavel c é not a number(NaN) e caso ela seja um número retone o valor de c = 1
   return a + b + c
}
console.log(soma2(),soma2(3),soma2(1,2,3),soma2(0))

//valor padrão do es2015
function soma3(a = 1, b = 1 , c = 1){
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1,2,3) , soma3(0,0,0 ))