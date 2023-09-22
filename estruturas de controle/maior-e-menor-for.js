function resul(n){
    for(let i = 0; i<n.length;i++){
        if( i == 0){
        menor = n[i]
        maior = n[i]
        }
        if(n[i] > maior){
            maior = n[i]
        }
        if(n[i] < menor){
            menor = n[i]
        }
    }
}

vetor = [50,9,15,47,22]
resul(vetor)