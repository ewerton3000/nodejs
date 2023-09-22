//Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
//dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

const semana = function (dia)  {
switch(dia){
    
    
    case 2: console.log('Dias uteis')
            console.log('Segunda-feira') 
    case 3:console.log('Terça-feira')
    case 4 :console.log('Quarta-feira')
    case 5 :console.log('Quinta-feira')
   
    case 6 :console.log('Sexta-feira')
    break
    
    case 7:console.log('Fim de semana')
    console.log('Sabado')
    case 1: console.log('Domingo')
    break
    default:return 'Dia invalido por favor digite um número de 1 ao 7'
}
}

console.log(semana(10))