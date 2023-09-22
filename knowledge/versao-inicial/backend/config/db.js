//Dependência
const config = require('../knexfile.js') //configuração da conexão DB
const knex = require('knex')(config) //Instânciando o KNEX(dependência) e passando o config

//Criando as MIGRATIONS junto com o SERVIDOR
knex.migrate.latest([config])

//Exportando a Instancia do KNEX
module.exports = knex