/*
Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares.
💡 Lembre-se que um número é par porque é divisível por 2, ou seja, o resto da divisão da divisão dele
por 2 é zero.
Exemplos:
receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]) // retornará []
receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]) // retornará [10, 22]
 */

function receberSomenteOsParesDeIndicesPares(n1,n2,n3,n4){
    let array = []
    array.push(n1,n2,n3,n4)
    if(array[0] % 2 == 0 && array[2] % 2 == 0){
     console.log(array[0],array[2])
    }
    else if (array[0] % 2 == 0){
        console.log(array[0])
    }
    else if (array[2] % 2 ==0){
        console.log(array[2])
    }
    else{
        array.splice(0, 4)
        console.log(array)
        console.log("Não tem nenhum par dentro do array")
    }
    
}
receberSomenteOsParesDeIndicesPares(73,55,23,12)