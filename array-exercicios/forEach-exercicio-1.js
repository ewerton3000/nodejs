const roupas = ["lacoste","lavanda","ousado","surf","suncoast","addidas",]

roupas.forEach(function(nome ,indice){
    console.log(`${indice +1} ) ${nome}`)
})

console.log()//Pula a linha

roupas.forEach(nome => console.log(nome))

console.log()

const loja = roupa => console.log(roupa)
roupas.forEach(loja)