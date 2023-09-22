function par(divisor,...numero){
    pares =[]
    impares =[]
   for(i=0,pares,impares;i < numero.length;i++){
    
    if(numero[i] % 2 == 0){pares = numero[i]}
     if(numero[i]% 2 == 1) {impares =[numero[i]]}
     let resul =numero[i]/divisor    
     console.log(resul.toFixed(2))
     console.log(`Pares ${pares}`)
     console.log(`Impares ${impares}`)
    }
}

par(2,8,9,14,33)