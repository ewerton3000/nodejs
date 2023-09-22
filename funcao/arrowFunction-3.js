//Quando usar o console.log com função o node responde se ele é global ou não

let comparaComThis = function( param){
    console.log(this === param)
}
comparaComThis(global)

const obj = {} //objeto
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) //Pergutando sé e global 
comparaComThis(obj) //Perguntando se é um objeto

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)// perguntando se é global 
comparaComThisArrow(module.exports) //

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // É objeto?
comparaComThisArrow(module.exports)