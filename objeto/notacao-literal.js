//variaveis do tipo constante
const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c} //Antes aos objetos eram criados deste jeito antes da versão ES6 
const obj2 =  {a , b , c}
console.log(obj1 ,obj2)

//Nomeando um atributo
const nomeAttr = 'nota'
const valorAttr = 7.87

//Objeto literal
const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

//Passando valores para o atributo
const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

//Definindo função dentro de um objeto literal
const obj5 = {
    funcao1: function(){
        // ....
    },
    funcao2() {
        //...
    }
}

console.log(obj5) //imprimindo as funções vazias