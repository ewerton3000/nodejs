const imprimirResutado = function(nota){
    if(nota >= 7){
        console.log('Aprovado!!')
    }
    else{
        console.log('Reprovado')
    }
}
imprimirResutado(10)
imprimirResutado(4)
imprimirResutado('epa!!') //cuidado!!!
