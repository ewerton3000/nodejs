let entrada = require('Prompt-sync')({signint:true})
let a

a = entrada("Digite a tabuada que você quer ver :")
a = parseInt(a)
for(a,b = 1; b <=10 ;b++){
       console.log(`${a} X ${b} = ${a * b}`)
}