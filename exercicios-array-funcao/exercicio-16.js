/*
A fim de manter o calendário anual ajustado com o movimento de translação da Terra, criou-se os anos
bissextos, que têm 366 dias em vez dos 365 presentes nos anos normais.
Para determinar se um ano é bissexto, é necessário saber se ele é multiplo de 4. Não pode ser múltiplo de 100,
exceto se for também múltiplo de 400.
Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e retorna se ele
é bissexto ou não.
Exemplos:
Exercícios - Curso Fundamentos de Programação 4
checarAnoBissexto(2020) // retornará true
checarAnoBissexto(2100) // retornará false, pois é múltiplo de 100 e não é múltiplo de 400 */

function checarAnoBissexto(n){
    if(n % 100 == 0 || n % 400 == 0){
        console.log( false ,", pois ele é um multiplo de 100 e não é multiplo de  400 ")
         }    
         else if(n % 100 == 0 && n % 400 == 0){
        console.log( false ,", pois ele é um multiplo de 100 e é multiplo de  400 ")
              
         }
    else if( n % 4 == 0){
        console.log(true)
    }
    else if(n % 4 == 0   && n % 400 == 0){
          console.log(true)
    }
    
    else { console.log(false,"Este ano não é bissexto")}
    
}
checarAnoBissexto(2200)