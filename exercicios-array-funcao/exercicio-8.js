/*Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.
Exemplo:
multiplicar(5, 5) // retornará 25
multiplicar(0, 7) // retornará 0 
*/

function analise(n1,n2){
    let resul = 0
     if(n1>0 && n2>0){
        for(n1,i=1 ;i <= n2; i++){
            
            resul = resul + n1
        }console.log(resul)  
             }
             else{
                console.log("Por favor digite números maiores que 0")
             }
             
    
}

analise(10, 5)