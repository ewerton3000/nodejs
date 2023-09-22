function soBoaNoticia(nota){
    if(nota >= 7 ){
        console.log('Aprovado com '+ nota)
    }
}
soBoaNoticia(8.1)
soBoaNoticia(6.1)

//Condição true ou false
function seForVerdadeEUFalo(valor){
if(valor){
    console.log('E verdade...'+ valor)
}
}

//Resultado vazio = false
seForVerdadeEUFalo()
seForVerdadeEUFalo(null)
seForVerdadeEUFalo(undefined)
seForVerdadeEUFalo(NaN)
seForVerdadeEUFalo('')
seForVerdadeEUFalo(0)
seForVerdadeEUFalo(-1)
seForVerdadeEUFalo(4)
seForVerdadeEUFalo(' ')
seForVerdadeEUFalo('?')
seForVerdadeEUFalo([])//array vazio
seForVerdadeEUFalo([1,2])
seForVerdadeEUFalo({})//Objeto










