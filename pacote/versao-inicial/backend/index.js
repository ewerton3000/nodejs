//Dependências
const app = require('express')()
const consign = require('consign')
const db = require('./config/db')

//Rota para acessar as middlewares com as FUNÇÕES Banco de Dados
app.db =db  

//Rotas consign
consign()
.then('./config/middlewares.js')
.then('./api/validation.js')
.then('./api')
.then('./config/routes.js')
.into(app)


//Selecionando a porta 
app.listen(3000, ()=>{
    console.log('Backend executando...')
})