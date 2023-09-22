// pessoa -> 123 -> {...} :Colocando um valor em um espaço da constante nome
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa -> 456 -> {...} : Tentando inserir um valor no atributo nome pelo objeto pessoa mas não da certo
//pessoa = {nome : 'Ana'}

Object.freeze(pessoa)//Object método freeze :Congela um objeto ou seja não da mais pra usar o objeto

pessoa.nome = 'Maria'
pessoa.end ='Rua ABC'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)

//Objeto constante na mesma hora que é criado
const pessoaConstante = Object.freeze({nome: 'Joao'})
console.log(pessoaConstante)