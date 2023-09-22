const produto = Object.preventExtensions({
    nome: 'Qualquer', preco:1.99, tag:'promoção'
})
console.log('Extensível:',Object.isExtensible(produto))//Object.isExtensive: se o objeto é extensivel

//inserindo valores  e apagando um atributo
produto.nome ='Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal
const pessoa = {nome: 'Juliana', idade:35}
Object.seal(pessoa)
console.log('selado',Object.isSealed(pessoa))//ObjectisSealed : Se o objeto está selado 

pessoa.sobrenome ='Silva' 
delete pessoa.nome// não consegue deletar
pessoa.idade = 29
console.log(pessoa)