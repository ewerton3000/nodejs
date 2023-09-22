/*
Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.
Exemplos:
simboloMais(2) // retornará "++"
simboloMais(4) // retornará "++++" */

function numeros(n,s="+"){
    let resul = s
    for(i=1,n; i <n; i++){
        
     resul += ``.concat(`${s}`)
          
    }
    console.log(resul)
}
numeros(10)