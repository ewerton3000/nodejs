/*
Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.
Exemplos:
filtrarNumeros(["Javascript", 1, "3", "Web", 20]) // retornará [1, 20]
filtrarNumeros(["a", "c"]) // retornará []
 */


function filtrarNumeros(n1,n2,n3,n4){
    let array = []
    array.push(n1,n2,n3,n4)

    
    console.log(array.filter(Number))
    
}

filtrarNumeros("Maçã","Pode","Pai","Mãe")