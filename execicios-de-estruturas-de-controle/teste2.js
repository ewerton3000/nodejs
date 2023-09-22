const teste = function(n1,n2,n3){
    maior = n1
    menor = n1
    meio = n1

    if(n2 > maior ){
        maior = n2
        menor = n1
    }
    if( n2 < menor){
        menor = n2
    }
    
    if(n1 > maior ){
        maior = n1
        menor = n1
    }
    if( n1 < menor){
        menor = n1
    }
    
    if(n3 > maior ){
        maior = n3
    }
    if( n3 < menor){
        menor = n3
    }
    if(n2 < maior && n2 > menor){
      meio = n2
    }
    if(n3 < maior && n3 > menor){
        meio = n3
      }
      if(n1 < maior && n1 > menor){
        meio = n1
      }

      console.log(`o maior é ${maior} o do meio é ${meio} e o menor é ${menor}`)
}
teste(8,7,9)