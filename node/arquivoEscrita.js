const fs = require('fs') //Usando o fs=file system

//objeto
const produto = {
    nome:'Celular',
    preco: 1249.99,
    desconto: 0.15
}

//Convertendo o JSON com fs.writeFile
fs.writeFile(__dirname + '/arquivoGerado.json',JSON.stringify(produto),err =>{
    console.log(err || 'Arquivo salvo!')
})
