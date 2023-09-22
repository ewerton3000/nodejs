//Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
//primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
//Faça a troca sem utilizar uma variável auxiliar.

function resul(vetor1,vetor2){
   
   
   vetor1.push(vetor2.pop())
   vetor1.push(vetor2.pop())
   vetor1.push(vetor2.pop())
   vetor1.push(vetor2.pop())
   
   vetor2.push(vetor1.shift())
   vetor2.push(vetor1.shift())
   vetor2.push(vetor1.shift())
   vetor2.push(vetor1.shift())
   

    console.log(vetor1)
    
    console.log(vetor2)
}
vetor1 = [1,2,3,4]
vetor2 = [5,6,7,8]
resul(vetor1,vetor2)
