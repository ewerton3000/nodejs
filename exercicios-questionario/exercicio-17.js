//Um funcionário irá receber um aumento de acordo com o seu plano de
//trabalho, de acordo com a tabela abaixo:
//Plano Aumento
//A      10%
//B      15%
//C      20%
//Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
//novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido

const plano = function (salario,plano){
    switch(plano){
        case'A'&&'a':console.log("10% de aumento para: ",salario ," resultado : ",salario + (10*salario)/100)
        break
        case'B'&&'b':console.log("15% de aumento para: ",salario ," resultado : ",salario + (15*salario)/100)
        break
        case'C'&&'c':console.log("20% de aumento para: ",salario ," resultado : ",salario + (20*salario)/100)
        break
        default:console.log('O plano é inválido')
    }


}

console.log(plano(1200,'d'))
console.log(plano(1880,'a'))
console.log(plano(1970,'b'))
console.log(plano(2500,'c'))
