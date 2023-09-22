const livros = {titulo:"CHuchuluh" , descricao: "A lenda dos mares" ,volume:"volume", edicao:1}

//Imprimindo um atributo com o valor correspondente
console.log(JSON.stringify(livros))

//Puxando apenas o valor do atributo escolhido

console.log(JSON.stringify(livros.titulo))
console.log(JSON.stringify(livros.descricao))
console.log(JSON.stringify(livros.volume))
console.log(JSON.stringify(livros.edicao))

//Usando todos de uma vez sem os atributos
console.log(JSON.stringify(livros.titulo),JSON.stringify(livros.descricao),JSON.stringify(livros.volume),
JSON.stringify(livros.edicao))
