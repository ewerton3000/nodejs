const notas = [
    {nome:"Sergio" , turma:1500 , nota:7.5},
    {nome: "Maria",  turma:1700 , nota:8.0},
    {nome: "Andre",  turma:1700 , nota:3.0},
    {nome: "Marcos",  turma:1500 , nota:9.0},
    {nome: "Thais",  turma:1500 , nota:5.0},
    {nome: "Mario",  turma:1900 , nota:6.5},
    {nome: "João",  turma:1900 , nota:9.5},
    {nome: "Marcio",  turma:1900 , nota:7.0},
    {nome: "Neide",  turma:1500 , nota:2.5},
    {nome: "Pereira",  turma:1900 , nota:1.5},
    {nome: "Dennis",  turma:1700 , nota:8.5},
    {nome: "Alex",  turma:1900 , nota:4.5},
    {nome: "Alexandre",  turma:1900 , nota:7.5},
    {nome: "Bores",  turma:1900 , nota:6.0},
    {nome: "Alessandra",  turma:1700 , nota:3.0},
    {nome: "Ewerton",  turma:1700 , nota:0.5},
    {nome: "Rodrigo",  turma:1500 , nota:7.5},
    {nome: "Silva",  turma:1700 , nota:2.5},
   
]

console.log(notas.filter(function(n){
    return false
}))


const nota7 = nota => nota.nota >= 7
const nota6 = nota => nota.nota >= 6
const nota5 = nota => nota.nota >=5
const nota4 = nota => nota.nota >=4
const nota3 = nota => nota.nota >=3

const turma1 = turma => turma.turma ==1700
const turma2 = turma =>turma.turma == 1800
const turma3 = turma =>turma.turma == 1900


//Para buscar apenas os nomes
const nomes = nome => nome.nome

//Usando o filtro para conseguir puxar nomes com letra Inicial
//Aqueles que começam com letra maíuscula  exemplo A = Adão
const letra = notas.filter(function(valoratual)  {
    return valoratual.nome.includes('J',0) //primeira letra  = posição 0
})

const letra1 = notas.filter(function(valoratual)  {
    return valoratual.nome.includes('E',0) //primeira letra  = posição 0
})

const letra2 = notas.filter(function(valoratual)  {
    return valoratual.nome.includes('M',0) //primeira letra  = posição 0
})

console.log(notas.map(nota7))
