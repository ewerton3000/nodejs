//Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
//aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
//aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
//"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
const notas = function(codaluno,nota1,nota2,nota3){
   
       let maior = nota1
       let meio = nota1
       let menor = nota1
        
       if(nota1  > maior){
        maior = nota1
       }
        if(nota1 < menor){
        menor= nota1
       }
       if(nota2  > maior){
        maior = nota2
       }
        if (nota2 < menor ){
        menor = nota2
       }
       if(nota3 > maior){
        maior = nota3
       }
       
       if(nota3 < menor){
        menor= nota3
       }
       
       if(nota1 < maior && nota1 > menor){
        meio = nota1
       }
       if(nota2 < maior && nota2 > menor){
        meio = nota2
       }
        if(nota3 < maior && nota3 > menor){
        meio = nota3
       }

       const soma = maior+meio+menor 
       const media = soma/3
       if( media >=5){
           console.log(`O código do aluno é ${codaluno} ,
           suas notas foram: ${maior},${meio},${menor}  e sua media foi ${media.toFixed(2)}` )
          console.log("ARPOVADO")
          }
          else{
            console.log(`O código do aluno é ${codaluno} ,
            suas notas foram: ${maior},${meio},${menor}  e sua media foi ${media.toFixed(2)}` )
          console.log("Reprovado")
          }
 
    
}


notas(02,8,9,1)