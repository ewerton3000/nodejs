function saudacao(nome) {
    return function(req, res, next){
    console.log(`Seja bem vindo ${nome}.`)
    next()
    }
}

//USando a função para ser exportada para outro modulo
module.exports = saudacao