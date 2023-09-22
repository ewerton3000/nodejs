const porta = 3003 

const express = require('express')
const app = express()
const bodyParser = require('body-parser') //Armazenando o body-parser
const bancoDeDados = require('./bancoDeDados') //Importando o módulo

//Enviando os dados inseridos pelo postman no modo x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))

//Mostrando os dados dentro do servidor
app.get('/produtos',(req , res )=>{
    res.send(bancoDeDados.getProdutos())//mostrando os produtos
})

//Usando a requisição get para puxar o produto pela id 
app.get('/produtos/:id' , (req, res, next) => {
    //Usando uma resposta para o servidor quando a requisição for pedida
    res.send(bancoDeDados.getProduto(req.params.id))
})

//Usando a requisição post para inserir um novo produto
app.post('/produtos',(req, res, next) =>{
    //Usando a importação para chamar a função salvarProduto
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,  //Inserindo as informações enviadas via formulario
        preco: req.body.preco //Inserindo as informações enviadas via formulario
    })
    res.send(produto) //Retornando o objeto produto atualizado em JSON
})


//Função para atualizar uma id existente
app.put('/produtos/:id',(req, res, next) =>{
    //Usando a importação para chamar a função salvarProduto
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id, //Pegando a id selecionada para atualizar os dados
        nome: req.body.nome,  //Inserindo as informações enviadas via formulario
        preco: req.body.preco //Inserindo as informações enviadas via formulario
    })
    res.send(produto) //Retornando o objeto produto atualizado em JSON
})

app.delete('/produtos/:id', (req,  res,   next) =>{
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) //JSON
})
//Porta que escuta ou seja a porta escolhida
//função callback
app.listen(porta , ()=>{
    console.log(`Servidor executando na porta ${porta}.`)
}) 
