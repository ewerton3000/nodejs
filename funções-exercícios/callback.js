const carro = ["Mercedes Bens","Gol","Chevrolet","Honda civic","Ecosport"]

function imprimir(nome , posicao){
    console.log(`${posicao +1}.  ${nome}`)
}
carro.forEach(imprimir)

const nota = [7.8 , 6.5 , 7.9 , 8.9 , 9.7, 10]

function resul(nota , posicao){
    console.log(`${posicao+1}.  ${nota}`)
    console.log()
}
nota.forEach(resul)



