//Tendo como dados de entrada a altura (h) e o sexo de uma pessoa
// (M - masculino
//e F - feminino), construa um programa que calcule seu peso ideal,
// utilizando as seguintes fórmulas:
// para homens: (72.7*h)-58
// para mulheres: (62.1*h)-44.7

let h = 1.80 
let sexo = "m"


if (sexo == "m"){
    console.log("Sexo : Masculino")
    h = (72.7*h) - 58
    console.log(h.toFixed(2))
}
else if (sexo == "f"){
    console.log("Sexo : Feminino")
    h = (62.1*h) - 44.7
    console.log(h.toFixed(2))
}

else{
    console.log("Não é valido")
}