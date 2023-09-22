//-  - A escola “APRENDER” faz o pagamento de seus professores por hora/aula.
//Faça um algoritmo que calcule e exiba o salário de um professor.
//Sabe-se que o valor da hora/aula segue a tabela abaixo:

//Professor Nível 1 R$12,00 por hora/aula
//Professor Nível 2 R$17,00 por hora/aula
//Professor Nível 3 R$25,00 por hora/aula

hora = 5

aula = 4

dinheiro = hora * aula
if(dinheiro >= 12.00 && dinheiro <= 16.99){
   console.log(`Professor nível 1 R$ ${dinheiro.toFixed(2)}`)
}
else if(dinheiro >= 17.00 && dinheiro <=24.99){
    console.log(`Professor nível 2 R$ ${dinheiro.toFixed(2)}`)
}
else if(dinheiro >=25.00){
console.log(`Professor nível 3 R$ ${dinheiro.toFixed(2)}`)
}
else{
    console.log(`R$ ${dinheiro.toFixed(2)} abaixo da classificação !`)
}