let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!true)         //A exclamação é uma negação para inverter o resultado de true ou false

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ') //Se as aspas ficarem sem espaço  elas dão false não sei porque
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true)) //Quando usamos variaveis e a definimos usamos mais um parentese!

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)// Nan = not a number
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar....')
console.log(('' || null || 0 || ' epa' || '123'))

let nome = ''   //Variavel false por não conter uma informação
console.log(nome || 'Desconhecido')

let nomes = 'Lucas' //Variavel true por conter uma informação
console.log(nomes || 'Desconhecido')