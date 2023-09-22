function Aluno(nome,matricula){
  this.nome = nome
  this.matricula = matricula
}
const aluno1 = new Aluno('Jorge',1647895)
const aluno2 = new Aluno('Jennifer',123647895)

console.log(aluno1,aluno2)

function Passo(materia,sala){
    this.materia = materia
    this.sala = sala
}
function tarefa(f,...params){
    const obj = {}
    f.apply(obj,params)
    return obj
}
const aluno3 = tarefa(Aluno,'Matheus',949449499949)
const aluno4 = tarefa(Passo, "matemática",2)


console.log(aluno3,aluno4)