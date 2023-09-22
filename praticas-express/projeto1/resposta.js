function resposta(n){
    return function(req,res,next){
    console.log(`Este número é ${n}!`)
    next()
    }
}

module.exports = resposta