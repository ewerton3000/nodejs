//Construir um algoritmo que calcule a média 
// aritmética dos valores de um vetor de inteiros.

function calcular(n){
let media = 0
let cont = 0
for(i = 0 ; i  < n.length ; i++){

    media +=n[i] 
    cont++
 
}
media = media/cont
console.log(`A média dos números foi: ${media.toFixed(2)}`)

}

vetor = [87,49,66,185]
calcular(vetor)