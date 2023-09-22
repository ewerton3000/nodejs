//Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor


   function numero(vetor){
   let maior 
   let menor 
 
     for(let i=0 ; i < vetor.length; i++){
     
        if(maior === undefined && menor === undefined ){
        menor = vetor[i]
        maior = vetor[i]
        }
        else{
     if(vetor[i] > maior){
        maior = vetor[i]
     }
     if(vetor[i] < menor){
      menor = vetor[i]
     }
        }
     
     }    

     console.log(`O maior número é de ${maior}`)
     console.log(`O menor número é de ${menor}`)
    
    
}

vetor = [10,9,15,47,1,22]

numero(vetor)