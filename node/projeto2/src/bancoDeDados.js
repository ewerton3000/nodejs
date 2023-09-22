const sequence = {
    _id: 1,
    get id() {return this._id++}
}

const registros = {}

function salvarRegistro(registro){
    if(!registro.id) registro.id = sequence.id
    registros[registro.id] = registro

    return registro
}

function getRegistro(id){
    return registros[id] || {}
}

function getRegistros(){
    return Object.values(registros)
}

function excluirRegistro(id){
    const registro = registros[id]
    delete registros[id]
    return registro
}
module.exports = {salvarRegistro , getRegistro , getRegistros , excluirRegistro}
