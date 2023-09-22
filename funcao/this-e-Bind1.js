const pessoa = {
    saudacao : 'Bom dia',
    falar(){
        console.log(this.saudacao)//Chamando um atributo do objeto pessoa
    }

}

pessoa.falar()



const falar   = pessoa.falar
falar() //Conflito entre paradgimas: funcional e orientada a objeto




const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

//O bind é uma método para amarrar um determinado objeto 