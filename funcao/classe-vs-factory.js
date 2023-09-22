//Este código funciona no navegador  também se quiser copie e cole lá e aperte enter

class Pessoa{
    constructor(nome){   //Parecido com função construtora
      this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1  = new Pessoa('João') // João vai ser o parametro nome de constructor 
p1.falar()

//Função Arrow
//Aqui não precisa usar o atributo this porque ele já puxa o atributo
const criarPessoa = nome =>{
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Matheus')
p2.falar()