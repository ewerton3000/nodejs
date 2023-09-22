let contador = function(n){
    par =0
    impar = 0
    for(i =1 ; i <= n; i++) {
     if(i % 2 == 0){
        par++
     }
     else{
        impar++
     }
    }
    console.log(`O números de pares é : ${par} os de impar é de : ${impar}`)
}

contador(45)