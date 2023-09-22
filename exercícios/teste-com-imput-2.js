const entrada = require('prompt-sync')({sigint: true});

idade = entrada("Digite um número : ")
idade = parseInt(idade)

 const resultado = function (idade){
if(idade <=1){
    console.log("Bebe de até 11 meses")
}
else if(idade  = 1) {
    console.log("Bebe já tem um ano")
}
else if(idade = 2){
console.log("Virando garotinho")
}
}
console.log( resultado(idade))