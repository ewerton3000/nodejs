

//Função construtora

//Meu exemplo 
function pessoa(nomes){
    this.nomes = nomes //Usando this para deixa-la no escopo global
        
        console.log(`Meu Nome é ${nomes}`) //Um retorno da função caso ela execute
    
}
const nome = new pessoa('Matheus')  //criando  uma variave para armazenar a instancia da classe
console.log(nome) //Executando a função


//Exemplo do professor
function Pessoa(nome){
    this.nome = nome  //Parametro Global para usa-la fora da função
    this.falar = function(){
        console.log(`Meu nome é ${nome}`) //Aqui  não é necessário o this.nome
    }
}
const resul = new Pessoa('Jorge') //Instanciando a função com operador new e inserindo valor em nome
resul.falar()
console.log(resul.nome) //Aqui só roda se utilizar o this.nome na segunda linha da função Pessoa
