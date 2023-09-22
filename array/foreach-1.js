const aprovados = ['Agatha' , 'Aldo','Daniel','Raquel']

aprovados.forEach(function(nome , indice, array){
    console.log(`${indice + 1}) ${nome}`)  // indice + 1 para adicionar na posicão mostrada 0+1 = 1
    console.log(array)
})
console.log() //para pular linha

aprovados.forEach(nome => console.log(nome))
console.log()
//Função por  parâmetro no forEach
const exibirAprovados = aprovado =>console.log(aprovado)
aprovados.forEach(exibirAprovados)