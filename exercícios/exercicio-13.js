//- A escola “APRENDER” faz o pagamento de seus professores por hora/aula.
//Faça um algoritmo que calcule e exiba o salário de um professor.
//Sabe-se que o valor da hora/aula segue a tabela abaixo:
//Professor Nível 1 R$12,00 por hora/aula
//Professor Nível 2 R$17,00 por hora/aula
//Professor Nível 3 R$25,00 por hora/aula

let hora = 3
let nivel = 3
let salario
if(nivel == 1){
salario = hora*12
console.log(`O salario do professor é de ${salario.toFixed(2)}`)
}else if(nivel == 2) {
salario = hora*17
console.log(`O salario do professor é de ${salario.toFixed(2)}`)
}
else if(nivel == 3){
    salario = hora*25
    console.log(`O salario do professor é de ${salario.toFixed(2)}`)
}
else{
    console.log("Nível de professor inexistente")
}
