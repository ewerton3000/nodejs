//Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
//inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
//elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
//o valor do elemento for maior que 5.

num = [6,9,4,5,7]

let resul = function(num,multiplicador){
let resultado = []
    num.forEach(elemento => {
        resultado.push(elemento  * multiplicador)
    })

    return resultado
}

console.log(resul(num , 4))