//Variavel Constante com array
const pilotos = ['Vettel','Alonso','Raiokkonen','Massa']
pilotos.pop()  //Elimina o Massa
console.log(pilotos)

pilotos.push('Verstappen')//Inserindo o valor dentro do array
console.log(pilotos)

pilotos.shift() // remove o primeiro array(posição 0)
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(0 , 2)
console.log("splice")
console.log(pilotos)

//remover
pilotos.splice( 3,1) //massa quebrou então removido
console.log(pilotos)

//slice
const algunsPilotos1 = pilotos.slice(2) //Pegando os elementos a partir da posição 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1 , 4)
console.log(algunsPilotos2)