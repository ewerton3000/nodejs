// Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
// deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
// deles estão fora do intervalo, escrevendo estas informações.

const vetor = function(n){
let a = 0
let b = 0
    for(a = 10 , b = 20, i = 0 , cont=0,conti=0; i <= n ; i++ ){
        
        if(i >=a && i<=b){
            conti++
            console.log(`O valor ${i} está entre 10 e 20`)
            
        }
        else{
            cont++
         
        }
}
console.log(`A contagem de números dentro do intervalo de 10 até 20 é de ${conti}`)
console.log(`A contagem de números fora do intervalo é de  ${cont}`)
}

vetor(35)