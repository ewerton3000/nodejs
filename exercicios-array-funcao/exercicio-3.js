/*Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string 
"Salário igual a R$ X", em que X é o quanto o funcionário ganhou no mês.
Exemplos:
calcularSalario(150, 40.5) // retornará "Salário igual a R$ 6075"
 */
function  calc(salario,hora){
    let resul
    resul = salario * hora
    console.log(`Sálario = ${salario} hora = ${hora} `)
    console.log(`${salario} X ${hora} =  Total = ${resul}`)

}

calc(200 , 30)