const moduloA = require('../../moduloA') //Aqui volta duas pastas no caso pastaA
console.log(moduloA.ola)

//Exemplo com um arquivo dentro da pasta node_modules/saudacao e executando o arquivo index.js
const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('./pastaC')
console.log(c.ola2)

/*const http = require('http')
http.createServer((req ,res)=>{
    res.write('Bom dia!')
    res.end()
}).listen(8080)*/