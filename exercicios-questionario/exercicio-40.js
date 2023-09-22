//Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
//modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
//conceito B e de 9,0 a 10,0 o conceito A

function notas(nota){
    
    for(i=0 ; i < nota.length;i++){
    if(nota[i] >=0.0 && nota[i] <=4.9){
        
    console.log((nota[i].toFixed(2).replace(".",',')),"R$ cateoria : D")
    }
    if(nota[i] >=5.0 && nota[i] <=6.9){
        console.log((nota[i].toFixed(2).replace(".",',')),"R$ cateoria : C")
    }
    if(nota[i] >=7.0 && nota[i] <=8.9){
        console.log((nota[i].toFixed(2).replace(".",',')),"R$ cateoria : B")
    }
    if(nota[i] >=9.0 && nota[i] <=10.0){
        console.log((nota[i].toFixed(2).replace(".",',')),"R$ cateoria : A")
    }
    
    else if(nota[i]> 10.00){
        console.log("Valor invalido por favor dgite de 0.0 até 10.00")
    }
}
}

vetor = [0.9,5.3,7.8,9.5,8.3,4.1,6.4,11.00,5.1,2.5]
notas(vetor)