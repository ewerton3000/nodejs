const sequencia = {
    _valor:1, //convenção : Inserindo o valor 1 no atributo privado _valor

  //Encapsulamento com o get e set

    get valor(){return this._valor++}, //Usando a método get incremetando o  atributo _valor
    set valor(valor){  //Usando a método set para selecionar o parametro da função para passar o valor para o atributo 
        if(valor > this._valor){
            this._valor = valor
        }
    }

}

console.log(sequencia.valor , sequencia.valor) //Executando o objeto com o atributo
sequencia.valor = 1000 //Inserindo o valor ao  atributo valor do objeto sequencia
console.log(sequencia.valor , sequencia.valor)//Executando o objeto com o atributo
sequencia.valor = 900 //Inserindo o valor novo mas como é menor que o anterior o valor é NEGADO.
console.log(sequencia.valor , sequencia.valor)//Executando o objeto com o atributo