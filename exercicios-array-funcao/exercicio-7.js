/*Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se
o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
"entre" como inclusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
considerando se numero é igual a minimo ou a maximo.
Exemplos:
estaEntre(10, 100, 50) // retornará true
estaEntre(16, 100, 160) // retornará false
estaEntre(3, 150, 3) // retornará false
estaEntre(3, 150, 3, true) // retornará true */

function numeros(num,min,max,inc= false ){
    if(inc = '') {inc = false}
    
    if(num >=min && num <=max){
        console.log(`O número ${num} está entre ${min} e ${max}`)
    }
    
    if(inc === true && num == min ||inc === true && num == max){
     console.log (num > min && num < max)
    }      
}
numeros(16 , 100 , 160, true)


/*Resposta do gabarito
function estaEntre(minimo, maximo , numero , inclusivo = false){
    if(inclusivo) return numero >= minimo && numero <= maximo

    return numero > minimo && numero < maximo
}
estaEntre(10,100,50)*/