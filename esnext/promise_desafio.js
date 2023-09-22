//Lendo um arquivo com a Promise
const fs = require('fs') //Usando o File System
const path = require('path') //Usando o Path


    function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho , function(_ , conteudo){ //função callback Parâmetros _= erro e conteudo =conteudo do arquivo 
         resolve(conteudo.toString()) //Convertendo o conteúdo do arquivo para uma string
         console.log('Depois de ler') //Aviso de que a Promise foi exeutada
        })
    })
}
const caminho = path.join(__dirname , 'dados.txt')
lerArquivo(caminho)
.then(conteudo => conteudo.split('\n')) //
.then(linhas => linhas.join(','))//Armazenando a linha pulada dentro da posição 1
.then(conteudo =>`O valor final é ${conteudo}`)
.then(console.log)


