const pilotos = ['Vettel','Alonso','Raiokkonen','Massa']
//pilotos.pop()  //Elimina o Massa
//pilotos.push('Verstappen')//Inserindo o valor dentro do array
//pilotos.shift() // remove o primeiro array(posição 0)
//pilotos.unshift('Hamilton')
pilotos.splice(2 , 0, 'Bottas', 'Massa')
console.log(pilotos)