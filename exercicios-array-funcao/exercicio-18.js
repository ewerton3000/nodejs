/*
Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você
está desenvolvendo no momento é a de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas.
Exemplos:
despesasTotais([
{nome: "Jornal online", categoria: "Informação", preco: 89.99},
{nome: "Cinema", categoria: "Entretenimento", preco: 150}
]) // retornará 239.99
despesasTotais([
{nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
{nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
]) // retornará 34599.89 
*/



function despesasTotais(...produtos){
const soma =((total, quantidade) => total + quantidade)
console.log(produtos.map(a => a.preco).reduce(soma))
}

despesasTotais({nome:"Televisão 4K",categoria:"tv",preco:4599.99},
{nome:"Motorola 10G" , categoria:"Celular", preco:2500.00},
{nome:"Armario",categoria:"Moveis",preco:550.00})