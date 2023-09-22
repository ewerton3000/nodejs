const express = require('express')  //Puxando o módulo express
const app = express() //para atender requisições 
const bodyParser = require('body-parser')//Puxando o módulo body-parser
const saudacao = require('./saudacaoMid') //Exportando a função do módulo saudacaoMid.js
const usuarioApi = require('./api/usuario')//Exportando o módulo usuario.js da pasta API
//Exportando o módulo produto e o parâmetro app
const produtoApi = require('./api/produto')
produtoApi(app, 'com param!')

//Executando o módulo usuario.js

//Requisições do tipo get e post 
app.post('/usuario',usuarioApi.salvar)
//Puxando a função obter do módulo usuario 
app.get('/usuario', usuarioApi.obter)



//Executando o módulo saudacao
app.use(bodyParser.text()) //Puxando o couteudo do corpo(body)
app.use(bodyParser.json())//BodyParser aceitando o formato JSON
app.use(bodyParser.urlencoded({ extended: true}))//Puxando os parâmetros  da URL
app.use(saudacao('Guilherme'))

app.use((req , res , next,)=>{
    console.log('Antes...')
    next() //Executado para passar pra proxima função com a mesma url
})

app.get('/clientes/relatorio',(req , res) =>{
    res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res)=> {
    //Resposta com send e requisição com o body
    //do app.use do bodyParser
    res.send(req.body)
})

app.get('/clientes/:id',(req,res)=>{
    res.send(`Cliente ${req.params.id} selecionado`)
})


//Função para requisição do tipo GET
app.get('/opa',(req , res,next) =>{
    console.log('Durante...')
    res.json({
        data: [
            {id: 7 ,name: 'Ana',position: 1},
            {id: 34, name:'Bia', position: 2},
            {id: 73, name:'Carlos', position: 3},
        ],
        count: 30,
        skip:0,
        limit:3,
        status:200
    })
    next() //Executado para passar pra proxima função com a mesma url
})

app.use((req , res )=>{
    console.log('Depois...')
})

//Função para requisições do tipo POST
app.post('/opa',(req , res) =>{
    res.send('Respota do tipo POST!') //res(Resposta) da requisição
})

//Função para requisições de todos os tipos
app.all('/opa',(req , res) =>{
    res.send('Respota do tipo POST!') //res(Resposta) da requisição
})




//Número da porta do express
app.listen(6000, () =>{
    console.log('Backend executando...')
})  
