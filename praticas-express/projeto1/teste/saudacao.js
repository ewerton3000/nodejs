function saudacao(text){
    return function(req ,res, next){
    console.log(`Bem vindo ao mundo do NODE EXPRESS ${text}`)
    }
}

module.exports = saudacao