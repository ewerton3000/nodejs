// novo recurso do ES2015
const pessoa = {
    nome :'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero : 1000
    }
}
const { nome , idade} = pessoa //Retirando os atributos nome e pessoa do objeto
console.log(nome, idade)

const{nome: n, idade :i} = pessoa//Passando os atributos para as variaveis : n e i
console.log(n,i)

const{sobrenome , bemHumorada = true} = pessoa
console.log(sobrenome , bemHumorada)

const { endereco: {logradouro, numero, cep} } = pessoa
console.log(logradouro , numero, cep)

/*const {conta: {ag ,num } }=pessoa //Atributos que não estão dentro do objeto pessoa
console.log(ag , num)*/