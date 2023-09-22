//não aceita repetição / não indexada
const times = new Set()
//Adicionando novos valores em um array
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco') //Não vai ser adicionado

console.log(times)
console.log(times.size)
console.log(times.has('vasco')) //Ele diferencia letras minusculas e maiusculas
console.log(times.has('Vasco'))
times.delete('Flamengo')//Deletando o valor selecionado
console.log(times.has('Flamengo'))

console.log(typeof(times)) //mostrando o times apos usar o set
const nomes = ['Raquel','Lucas','Julia','Lucas'] //Novo array
const nomesSet = new Set(nomes) //Usando o set e selecionando o array nomes
console.log(nomesSet)