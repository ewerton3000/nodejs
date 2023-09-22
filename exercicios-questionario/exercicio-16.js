//Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
//como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
//numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
//3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.

const calc = function(a,b,c){
    switch(a){
       case '+': console.log(b+c)
       break
       case'-':console.log(b-c)
       break
       case'*':console.log(b*c)
       break
       case'/':console.log(b/c)
       break
    default:return 'Operação inválida'
    }
}

console.log(calc('+',7,9))
console.log(calc('-',4,6))
console.log(calc('*',8,5))
console.log(calc('/',4,2))