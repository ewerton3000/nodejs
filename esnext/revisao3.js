//ES8: Object.values/Object.entries
const obj = {a:1,b:2,c:3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

//Melhorias na notação literal
const nome  ='Carla'
const pessoa = {
    nome, //mesma variavel do escopo global
    ola(){ //Função
      return 'Oi gente!' //retorno da função
    }
}
console.log(pessoa.nome , pessoa.ola())

//CLasse
class Animal{}
//Classe pai : Animal e classe filha : Cachorro
class Cachorro extends Animal{
    //função dentro da classe Cachorro
    falar(){
        return 'Au au!' //retorno da função
    }
}
//Usando a classe Cachorro sendo instanciada com a função falar() como atributo
console.log(new Cachorro().falar)