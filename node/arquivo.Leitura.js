const fs = require('fs') //fs = file system padrão do node

const caminho = __dirname +'/arquivo.json' //Representa o diretório atual

//síncrono...
const conteudo = fs.readFileSync(caminho,'utf-8')
console.log(conteudo)

//assíncrono
fs.readFile(caminho,'utf-8',(err,conteudo)=>{
    const config = JSON.parse(conteudo) //Se o config for objeto ele funciona
    console.log(`${config.db.host}:${config.db.port}`)
})

//Puxando o arquivo.json para pegar as insformações 
//Se for para identificar o usuario ,senha ,database e tabela do banco de dados talvez use isso
const config = require('./arquivo.json') 
console.log(config.db)

fs.readdir(__dirname,(err,arquivos)=>{
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})