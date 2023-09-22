//Faça um código com uma escola onde os alunos possuem notas em cada materia!
const portugues = [
    {nome:"Jeferson",nota:5.0},
    {nome:"Thiago",nota:8.0},
    {nome:"Ewerton",nota:6.0},
    {nome:"Fabiano",nota:5.0},
    {nome:"Andre",nota:8.5},
    {nome:"Maria",nota:6.0},
    {nome:"Thuane",nota:7.0},
    {nome:"Beatriz",nota:7.5},
    {nome:"Carol",nota:9.0},
    {nome:"Nelo",nota:10.0},
    {nome:"Juliano",nota:3.0},
    {nome:"Daniel",nota:1.0},
    {nome:"Orion",nota:4.0},
    {nome:"Gabriel",nota:2.5},
    {nome:"wanderlei",nota:1.0},
    {nome:"xuxa",nota:0.5},

]

const ciencias = [
    {nome:"Jeferson",nota:9.0},
    {nome:"Thiago",nota:1.0},
    {nome:"Ewerton",nota:2.0},
    {nome:"Fabiano",nota:6.0},
    {nome:"Andre",nota:4.5},
    {nome:"Maria",nota:5.0},
    {nome:"Thuane",nota:9.0},
    {nome:"Beatriz",nota:1.5},
    {nome:"Carol",nota:7.0},
    {nome:"Nelo",nota:5.0},
    {nome:"Juliano",nota:9.0},
    {nome:"Daniel",nota:7.0},
    {nome:"Orion",nota:5.0},
    {nome:"Gabriel",nota:9.5},
    {nome:"wanderlei",nota:10.0},
    {nome:"xuxa",nota:8.5},
]

const matematica = [
    {nome:"Jeferson",nota:7.0},
    {nome:"Thiago",nota:6.0},
    {nome:"Ewerton",nota:8.0},
    {nome:"Fabiano",nota:6.0},
    {nome:"Andre",nota:4.5},
    {nome:"Maria",nota:9.0},
    {nome:"Thuane",nota:8.0},
    {nome:"Beatriz",nota:9.5},
    {nome:"Carol",nota:7.0},
    {nome:"Nelo",nota:6.0},
    {nome:"Juliano",nota:6.0},
    {nome:"Daniel",nota:7.0},
    {nome:"Orion",nota:7.0},
    {nome:"Gabriel",nota:5.5},
    {nome:"wanderlei",nota:8.0},
    {nome:"xuxa",nota:7.5},
]

const geografia = [
    {nome:"Jeferson",nota:8.0},
    {nome:"Thiago",nota:7.0},
    {nome:"Ewerton",nota:4.0},
    {nome:"Fabiano",nota:6.0},
    {nome:"Andre",nota:7.5},
    {nome:"Maria",nota:6.0},
    {nome:"Thuane",nota:5.0},
    {nome:"Beatriz",nota:1.5},
    {nome:"Carol",nota:0.0},
    {nome:"Nelo",nota:5.0},
    {nome:"Juliano",nota:7.0},
    {nome:"Daniel",nota:5.0},
    {nome:"Orion",nota:8.0},
    {nome:"Gabriel",nota:7.5},
    {nome:"wanderlei",nota:7.0},
    {nome:"xuxa",nota:7.5},
]

const  alunos  = [
    {nome:"Jeferson"},
    {nome:"Thiago"},
    {nome:"Ewerton"},
    {nome:"Fabiano"},
    {nome:"Andre"},
    {nome:"Maria"},
    {nome:"Thuane"},
    {nome:"Beatriz"},
    {nome:"Carol"},
    {nome:"Nelo"},
    {nome:"Juliano"},
    {nome:"Daniel"},
    {nome:"Orion"},
    {nome:"Gabriel"},
    {nome:"wanderlei"},
    {nome:"xuxa"},
]

//


const nomes = (alunos.filter(function(a){
    return a.nome 
}))
const letra = portugues.filter(function(valoratual)  {
    return valoratual.nome.includes('J',0) //primeira letra  = posição 0
})

const notasmatematica = (matematica.filter(function(m){
    return m.nome,m.nota
}))

const notasportugues = (portugues.filter(function(p){
    return nomes ,p.nota
}))
const notasciencias = (ciencias.filter(function(m){
    return false
}))
const notasestudossociais = (geografia.filter(function(g){
    return false
}))

const geral = ((notasportugues).filter,(notasmatematica).filter(function(d,e,f,h){
return d = notasportugues 

}))
const a = (matematica.map(function(z){
    return z.nome.includes('E',0) && z.nota >=7
}))

fim = a.map()

console.log(notasmatematica)
