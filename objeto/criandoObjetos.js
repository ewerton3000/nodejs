// usando a noção literal
const obj1 = {}
console.log(obj1)

//Objeto em JS
console.log(typeof Object , typeof new Object) //ordem  tipo: função e tipo: objeto
const obj2 = new Object //Instanciando como Objeto
console.log(obj2) //executando

//funções construtoras
function Produto(nome,preco,desc){
     this.nome = nome 
     this.getPrecoComDesconto = () =>{
         return preco * ( 1 - desc)
     }
}
const p1 = new  Produto('Caneta',7.99,0.15) //instanciando uma função 
const p2 = new  Produto('Notebook',2998.99,0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//função factory
function criarFuncionario(nome , salarioBase , faltas){
    return {    // <- objeto literal
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas)
    }

    }
}

const f1 = criarFuncionario('João' , 7980 , 4)
const f2 = criarFuncionario('Maria' ,11400 , 1)
console.log(f1.getSalario() , f2.getSalario())

//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//função Json.parse :Transforma um Json em um objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}') // chaves obrigatórias para JSON = { }
console.log(fromJSON.info)