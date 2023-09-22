const porta = 3003 
const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('body-parser')


app.use((req , res , next)=>{
    console.log('Middleware 1 ....')
    next()
})

app.use(bodyParser.urlencoded({extended: true}))

app.get('/registro',(req , res )=>{
    res.send(bancoDeDados.getRegistros())
})

app.get('/registro/:id',(req , res , next ) =>{
    res.send(bancoDeDados.getRegistro(req.params.id))
    })

app.post('/registro',(req , res , next) =>{
    const registro = bancoDeDados.salvarRegistro({
        nome: req.body.nome,
        sobrenome:req.body.sobrenome,
        cpf:req.body.cpf,
        endereco:req.body.endereco,
        camisa:req.body.camisa
    })
    res.send(registro)
})

app.put('/registro/:id',(req ,res, next) =>{
    const registro = bancoDeDados.salvarRegistro({
        id:req.params.id,
        nome: req.body.nome,
        sobrenome:req.body.sobrenome,
        cpf:req.body.cpf,
        endereco:req.body.endereco,
        camisa:req.body.camisa
    })
    res.send(registro)
})

app.delete('/registro/:id',(req,res, next)=>{
    const registro = bancoDeDados.excluirRegistro(req.params.id)
    res.send(registro)
})
app.listen(porta , ()=>{
    console.log(`Servidor executando com sucessso na porta : ${porta}.` )
})