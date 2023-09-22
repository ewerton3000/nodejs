const elemento =  new Object
elemento.tipo = 'Fogo'
elemento['fraqueza'] = 'agua'
elemento.estado = 'solido'

console.log(elemento)

const  carta = {
 personagem: 'Mago Negro',
 habilidades: 'Magia negra',
 poder:'Cosmico',
 ataque : 2500,
 descrição : 'Um ser muito poderoso que foi criado dentro da cidade dos profetas!'

}

//Criando um atributo chamado  tier e inserindo os valores de acordo com a condição

if(carta.ataque >= 4000){
    carta.tier = "SS"
}
else if(carta.ataque >=3000 && carta.ataque <= 3999){
 console.log((carta.tier = 'S'))
}
else if(carta.ataque >=2000 && carta.ataque<=2999 ){
    carta.tier = 'A'
}
else if (carta.ataque >=1500 && carta.ataque <=1999){
    carta.tier = "B"
}
else if (carta.ataque >=1000 && carta.ataque <= 1499){
    carta.tier = "C"
}
else if(carta.ataque >=600  && carta.ataque <= 999){
    carta.tier = "D"
}
else  {
    carta.tier = "E"
}

console.log(carta)