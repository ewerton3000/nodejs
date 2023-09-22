Number.prototype.tempo = function(jovem,Maduro){
    return this >= jovem && this <= Maduro
}
const imprimir = function(idade){
    if(idade.tempo(1,3)){
        console.log('Criança pequena')
    }
    
    else if(idade.tempo(4,7)) {
        console.log('Criança Crescendo')
    }
    else if(idade.tempo(8,11)){
        console.log('Cirança ficando  esperta')
    }
    else if(idade.tempo(12,15)){
        console.log('Pré adolescente')
    }
    else if(idade.tempo(16,17)){
        console.log('Jovem Adolescente')
    }
    else if(idade.tempo(18,27)){
        console.log('Adulto Jovem')
    }
    else if(idade.tempo(28,35)){
        console.log('Jovem Maduro')
    }
        else if(idade.tempo(36,45)){
            console.log('Meia Idade')
        }
        
}

imprimir(10)