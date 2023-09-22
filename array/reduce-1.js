const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
]

//acumulador para somar as notas e o atual
const resultado = alunos.map(a =>a.nota).reduce(function(acumulador , atual){
    console.log(acumulador , atual)
    return acumulador + atual
},  0)//Valor inicial 0

console.log(resultado)//Resultado de todos os valores acumulados
