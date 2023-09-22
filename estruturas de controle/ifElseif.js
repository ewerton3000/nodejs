Number.prototype.entre = function(inicio,fim){
   return this >= inicio && this <= fim 
}
const imprimirResutado = function (nota){
    if(nota.entre(9,10)){
        console.log('Quadro de honra')
    }else if(nota.entre(7,8.99)){
        console.log('Aprovado')
    }else if(nota.entre(4,6.99)){
     console.log('Recuperação')
    }else if(nota.entre(0, 3.99)){
     console.log('Reprovado')
    }else{
        console.log('Nota invalida')
    }

    
}

imprimirResutado(10)
imprimirResutado(8.9)
imprimirResutado(6.55)
imprimirResutado(2.3)
imprimirResutado(-1)
imprimirResutado(11)