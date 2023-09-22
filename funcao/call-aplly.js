// call e aplly
function getPreco(imposto = 0 , moeda = 'R$'){
    return `${moeda} ${this.preco * (1 -  this.desc) * (1 + imposto)}`
}

const produto = {
    nome : 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco //Usando a função getPreco
}
global.preco = 20 //Acessando a global(this.preco) e inserindo o valor
global.desc = 0.1//Acessando a global(this.desc) e inserindo o valor
console.log(getPreco())
console.log(produto.getPreco()) //Usando o objeto: produto com os seus atributos  e a função : getPreco 

//Criando um objeto carro
const carro = {preco :49990, desc:0.20}

console.log(getPreco.call(carro)) //Usando  o call com o objeto carro
console.log(getPreco.apply(carro)) //Usando  o  apply com o objeto carro

console.log(getPreco.call(carro,0.17,'$'))  //Usando o call com o oejto carro e inserindo valores nos atributos
console.log(getPreco.apply(carro,[0.17,'$'][0.8,'$']))//Usando o apply com o objeto e inserindo valores
console.log(getPreco.apply(global,[0.17,'$']))//Usando o apply com o global que pega os valores padrões do