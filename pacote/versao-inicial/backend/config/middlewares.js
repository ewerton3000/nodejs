//depedências
const bodyParser = require('body-parser')
const cors = require('cors')

//Exportando a variavel const app do arquivo index.js 
module.exports = app =>{
    //exportando middlewares 
    app.use(bodyParser.json()) 
    app.use(cors())
}
