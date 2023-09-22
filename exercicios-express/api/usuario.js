//Funções com requisição e resposta
function salvar(req , res){
    res.send('Usuario > salvar')
}

function obter(req , res){
    res.send('Usuario > obter')
}

module.exports = {salvar , obter}//Puxando as funções para o module.exports