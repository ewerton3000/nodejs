//-  Tendo como dados de entrada a altura (h) e o sexo de uma pessoa
// (M - masculino
  //  e F - feminino), construa um programa que calcule seu peso ideal,
    // utilizando as seguintes fórmulas:
    // para homens: (72.7*h)-58
    // para mulheres: (62.1*h)-44.7
    
    sexo = "m"
    h = 1.80
    if(sexo == "m"){
      total = (72.7*h)-58
      console.log(`Seu peso ideal é ${total.toFixed(2)}`)
    }
    if(sexo == "f"){
        total = (62.1*h)-44.7
        console.log(`Seu peso ideal é ${total.toFixed(2)}`)
    }