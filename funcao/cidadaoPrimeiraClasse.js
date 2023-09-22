//criar de forma literal
function fun1(){}

//Armazenar em uma variavel
const fun2 = function() {}

//Armazenar em um array
const array = [function (a , b) {return a + b },fun1 , fun2]

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function (){return 'Opa'}
console.log(obj.falar())

//Passar função como param
function run(fun){ //Usando a função fun como parâmetro dentro da função run
    fun() //Executando a função  fun
}
run(function (){console.log('Executando...')}) //Executando o  conteúdo da função run

//Uma função pode retornar/conter uma função
function soma( a , b){ //Criando uma função soma 
    return function (c) { //Retornando uma nova função sendo criada mas sem nome
        console.log(a + b + c) //Somando os parametros de ambas as funções
    }
}
// Inserindo valores nos atributos soma (a, b)  função sem nome(c)
soma(2 , 3 ) ( 4 ) 
const cincoMais = soma(2 , 3) //parâmetros a e b
cincoMais(4)//parâmetro c