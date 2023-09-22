//Exemplo com closure usando numeros,soma,subtração,multiplicação,divisão

const num1 = 5
const num2 = 7
function mostrar(){
    const num1 = 9
    const num2 = 3
    function sub(){
        return `${num1} , ${num2}`
    }
    return sub
}

const resul =  mostrar()
console.log(resul())


function soma(){
    const num1 = 8
    const num2 = 4
    function resultado(){
        return num1 + num2
    }
    return resultado
}

const resultado = soma()
console.log(resultado())

function subtracao(){
    const num1 = 9
    const num2 = 14
    function subtrair(){
        return num1 - num2
    }
    return subtrair
}
const subtrair = subtracao()
console.log(subtrair())

function multiplicacao(){
    const num1 = 10
    const num2 = 8
    function multi(){
        return num1 * num2
    }
    return multi
}

const multi = multiplicacao()
console.log(multi()) 

function divisao (){
    const num1 = 199
    const num2 = 4
    function divi(){
        return num1 / num2
    }
    return divi
}
const divi = divisao()
console.log(divi().toFixed(2))