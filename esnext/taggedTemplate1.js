//tagged templates - processa o template dentro de uma função
function tag (partes,...valores){
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
const nome = 'Lucas'
console.log(tag`${aluno} está ${situacao} ${nome}`)