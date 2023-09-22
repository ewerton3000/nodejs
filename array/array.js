console.log(typeof Array, typeof new Array) //função objeto
console.log(typeof [])//objeto

//Criando um array de uma forma não tão recomendavel
let aprovados = new Array('Bia','Carlos','Ana')
console.log(aprovados)

//Forma recomendavel
aprovados = ['Bia','Carlos','Ana']
console.log(aprovados[0])  // [0] : posição zero do array
console.log(aprovados[1])  // [1] : posição um do array
console.log(aprovados[2])  // [2] : posição dois do array
console.log(aprovados[3])  // [3] : posição três do array aqui ela não existe

aprovados[3] = 'Paulo' //Inserindo o valor  na posição 3  e tambem é um metodo para sobrecrever
aprovados.push('Abia') // Inserindo o valor na posição 4 
console.log(aprovados.length) //Fazendo a contagem de quantos array ele possui

aprovados[9] = 'Rafael' //Inserindo na posição 9 do array
console.log(aprovados.length) //Mostrando o tamanho do array
console.log(aprovados)
console.log(aprovados[8] === undefined)
//console.log(aprovados[8] === null)  //false
aprovados.sort()  //Deixando os valores em ordem alfabética
console.log(aprovados) 

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

//Criando um array novo com a mesma variavel
aprovados = ['Bia','Carlos','Ana']
aprovados.splice(0 ,3 )
console.log(aprovados)
