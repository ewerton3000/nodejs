for (let letra of "Cod3r"){
    console.log(letra)
}
const assuntoEcma = ['Map','Set','Promise']

for (let i in assuntoEcma){
    console.log(i)
}

for (let assunto of assuntoEcma){
    console.log(assunto)
}

//Usando com o Map com o operador new 
const assuntosMap = new Map([ //Usando chave e valor
    ['Map',{ abordado: true}],
    ['Set',{ abordado: true}],
    ['Promise', { abordado: false}]
])

//Usando o for of
for (let assunto of assuntosMap){
    console.log(assunto)
}

//Imprimindo apenas as chaves do array assunto
for (let chave of assuntosMap.keys()){
    console.log(chave)
}

//Imprimindo apenas os valores do array assunto
for (let valor of assuntosMap.values()){
    console.log(valor)
}

//Imprimindo a chave e o valor com for on
for (let[ch ,vl] of assuntosMap.entries()){
    console.log(ch ,vl)
}

const s = new Set(['a','b','c'])
for (let letra of s){
    console.log(letra)
}