//Dependências
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//Módulos
const resposta = require('./resposta')
const saudacao = require('./teste/saudacao')
const usuarioApi = require('./api/usuario')
require('./api/produto')(app,'com param!')

//Body-Parser middlewares
app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

//Requisições do tipo get e post
app.post('/usuario',usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

//Middlewares
app.use('/500',(resposta(789)))
app.use('/500',(saudacao('Alessandro')))

app.get('/450',(req , res) =>{
    res.send('<h1> Página</h1> <br> dos <br> LEGENDARIOS')
})
app.post('/450',(req,res) =>{
    res.send('Página do tipo POST')
})
app.post('/text',(req, res) =>{
    //res.send(req.body.nome)
    res.send(JSON.stringify(req.body))
})
app.get('/JSON',(req,res,next) =>{
    console.log('Antes ...')
    next()
})
app.get('/clientes/relatorio',(req , res) =>{
    res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
})
app.get('/clientes/:id',(req,res)=>{
    res.send(`Cliente ${req.params.id} selecionado`)
})


app.post('/corpo',(req,res) =>{
    let corpo =''
    req.on('data' , function(parte){
        corpo +=parte
    })
    req.on('end',function(){
        res.send(corpo)
    })
})

app.post('/JSON',(req ,res,next) =>{
    console.log('Durante...')
    res.json({
        data:[
        {id: 7 ,nome: "José dos Santos"},
        {id: 33 ,endereço:"Avenida São miguel bastos"},
        {id: 94 ,numero:819},
        {telefone:0214521574}
    ],
     count: 30,
     skip:0,
     limit:8,
     status:500
 })

})
app.get('/JSON',(req,res,next) =>{
    console.log('depois...')
})


app.all('/peste',(req, res) =>{
    res.send('Resposta da requisição all')
})
app.use((req, res) =>{
    res.send('<h1>Executou</h1> <b>o<b> <h2> APP.USE PADRÃO!</h2>!')
})


app.get('/funcao',(req, res) =>{
    
})



app.listen(4500 , () =>{
    console.log('Servidor Rodando')
})