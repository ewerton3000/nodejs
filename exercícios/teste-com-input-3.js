const entrada = require('prompt-sync') 
const prompt = entrada()
let nome = prompt("Qual é o seu nome ? ") 




const resultado = function (nome){
if(nome !="sergio"){
    while (nome != "sergio"){
    console.log("Voce não é meu filho")
    break
    }
   
}
else{
    console.log("Voce é meu filho !")
}
}
console.log(resultado(nome))

/*const ps = require("prompt-sync")
const prompt = ps()

let name = prompt("Entre com o seu nome : ")
console.log(`Hello ${name}`)*/