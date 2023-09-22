/*
Num projeto que você está trabalhando, você foi designado a refatorar diversas funções para que façam
cópias de objetos e manipulem os dados dessas cópias, com o intuito de evitar efeitos indesejáveis em
algumas situações devido a referências a objetos. Abaixo, está a descrição de uma dessas funções.
Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o
nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a
propriedade especificada no segundo parâmetro.
Exercícios - Curso Fundamentos de Programação 3
Exemplos:
removerPropriedade({a: 1, b: 2}, "a") // retornará {b: 2}
removerPropriedade({
id: 20,
nome: "caneta",
descricao: "Não preenchido"
}, "descricao") // retornará {id: 20, nome: "caneta"}
 */


function inserir(obj ,a){ //Parametros obj = objeto a = atributo do objeto
     
    obj 
    
    delete obj[a] //Deletando o atributo do objeto utilizando paraneteses
    console.log(obj)
}

//Inserindo valores nos atributos do objeto
inserir(  {
    nome : "Salgado" , 
    descricao :"Coxinha de Bacon"
    },"descricao")