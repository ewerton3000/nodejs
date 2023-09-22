const pessoa = {
    nome:"Jonas",
    sobrenome:"Kiques",
    idade:98,
    peso: 70
}

for( atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
