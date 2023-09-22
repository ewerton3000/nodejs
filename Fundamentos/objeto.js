//Anotação literal de objetos
//Usando uma variavel dinamica
const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal']= 0.40 //Usando um caracter OBS: Evite atributos com espaço

/*Repare que na impressão do objeto prod1 ele imprimiu os valores acima  
pelo nomes depois do ponto como .nome .preco que estão associados a variavel prod1
exemplo: numero.primeiro = 7,*/
console.log(prod1)

//Usando variavel dinamica de outra maneira 
const prod2 = {
nome: 'Camisa Polo',
preco:  79.90,
/*obj:{
    blabla: 1,
    obj:{
        blabla:2
    }

}*/
}

'{"nome": "Camisa neutra","preco":80.90}' //Transformando em JSON que é um formato TEXTUAL de um objeto
console.log(prod2)

/*Repare acima que temos dois objetos um dentro do outro o prod2 e o obj eles são mostrados na tela
ele são mostrados juntos e com seus conteudos separados  */