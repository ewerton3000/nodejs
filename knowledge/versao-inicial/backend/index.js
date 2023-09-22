//Dependências
const app = require('express')()
const consign = require('consign')
const db = require('./config/db')
const mongoose = require('mongoose')

require('./config/mongodb')

//Rota para acessar as middlewares com as FUNÇÕES Banco de Dados
app.db =db   //Postgres
app.mongoose = mongoose    //mongodb
//Rotas consign
consign()
.include('./config/passport.js')
.then('./config/middlewares.js')
.then('./api/validation.js')
.then('./api')
.then('./schedule')
.then('./config/routes.js')
.into(app)


//Selecionando a porta 
app.listen(3000, ()=>{
    console.log('Backend executando...')
})