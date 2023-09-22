
const turma = require('./objeto-turmas')

const getTurma = (letra , callback) =>{
    
    const get= (turma ,res =>{
        let resultado = ''
        res.on('data',dados=>{
            resultado += dados
        })
        res.on('end',()=>{
            callback(JSON.parse(resultado))
        })
    })

}

let nomes = []
getTurma('A',alunos =>{
     nomes = nomes.concat(alunos.map(a=> `A: ${a.nome}`))
  })
