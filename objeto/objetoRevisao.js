// coleção dinamica de pares chave/valor
const produto = new Object //Instanciando a variavel como um objeto
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)//Executando
delete produto.preco //Deletando o atributo
delete produto['marca do produto'] //deletando o valor
console.log(produto)

const carro = {
    modelo : 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade:56,
        endereco:{
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    //Objeto dentro de um Array
    condutores:[{
      nome: 'Junior',
      idade: 19
    },{
        nome:'Ana',
        idade: 42
    }],
    //Função
    calcularValorSeguro: function(){
        // ...
    }
}

carro.proprietario.endereco.numero = 1000 //Acessando os objetos dentro de objetos
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante' //Forma mais trabalhosa mas tambem é boa identificando pelas strings
console.log(carro)

//delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro) // executando 
console.log(carro.condutores)
console.log(carro.condutores.length)