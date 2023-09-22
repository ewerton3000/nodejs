//Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números 
//negativos há nesse vetor e imprime a quantidade no console.

function numero(n){
    let quant=0 
    let neg = []
    for(i=0 ;i <n.length ; i++ ){
        if(n[i] < 0){
            quant++
            neg.push(n[i])
        }
    }
    console.log(`A quantidades de números negativos foi de ${quant}`)
    console.log(`OS números negativos são ${neg}`)
}
vetor = [8 , 0 -8, -9 ,5 ,-4 , -2 ,0 ,-55 ,65,-88]

numero(vetor)