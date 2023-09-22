//let p = new Promise()


//console.log(typeof Promise) 


function primeiroElemento(array){
    return array[0]
}

const primeiroElemento  = (string) => string[0]
const primeiraLetra  = (string) => string[0]


const letraMinuscula =letra => letra.toLowerCase()


let p = new Promise(function(resolve){
    resolve([ 'Ana','Bia','Carlos','Daniel']) 
})
.then(primeiroElemento)
.then(primeiraLetra) // pegando a posição 0
.then(letraMinuscula) //Deixando a letra da string minuscula
.then(letraMinuscula => console.log(letraMinuscula))