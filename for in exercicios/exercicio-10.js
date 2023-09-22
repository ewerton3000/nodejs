//Usando o for in com objetos
var obj = {a:1,b:2,c:3}

for(var prop in obj){
    console.log("obj"+ prop+"="+obj[prop])
}
console.log() //pular linha
console.log()
console.log("Objeto com nomes diferentes")
const obj1 = {nome:"Zacarias",idade:50,nota:10}

for(const b in obj1){
    console.log(`${b} = ${obj1[b]} `)
}
console.log() //pular linha
console.log()
console.log("Objeto com o mesmo atributo")
const obj2 = {nome:"Dexter",nome:"Gontier",nome:"Zeth"}
for(c in obj2){
    console.log(`${c} = ${obj2[c]}`)
}
console.log() //pular linha
console.log()
const arraydeobjeto = [{nome:"Judas",nota:10},{nome:"Dennis",nota:7},{nome:"Elbert",nota:5}]
for(d in arraydeobjeto){
    console.log(`${d} = ${arraydeobjeto[d]}`)
}