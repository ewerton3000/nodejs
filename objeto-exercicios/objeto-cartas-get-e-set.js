//Desafio: Concluido

const elemento =  new Object
elemento.tipo = 'Fogo'
elemento['fraqueza'] = 'agua'
elemento.estado= 'solido'

console.log(elemento)

const carta = {
 personagem: 'Mago Negro',
 habilidades: 'Magia negra',
 poder:'Cosmico',
 ataque : 2500,
 descricao : 'Um ser muito poderoso que foi criado dentro da cidade dos profetas!',

 get ataque(){return this.ataque},
 set ataque(ataque){
     this.ataque = ataque
 },
 get nome(){return this.nome},
 set nome(nome){
     this.nome =nome
 }

}

//Criando um objeto sem parentese (não sei se é recomendavel)
const carta1 = Object.create(carta)
carta1.personagem = 'Dragão Branco de olhos azuis'
carta1.habilidades = 'fogo azul'
carta1.poder = 'Ataque de fogo com três cabeças'
carta1.ataque = 3500
carta1.descricao = "Um Dragão que possui três cabeças é prateado e sua pele parece ser feita de metaobjeto.l "



let tier = function(objeto){
if(objeto.ataque >= 4000){
    return objeto.tier = "SS"
}
else if(objeto.ataque >=3000 && objeto.ataque <= 3999){
 return objeto.tier = 'S'
}
else if(objeto.ataque >=2000 && objeto.ataque<=2999 ){
   return  objeto.tier = 'A'
}
else if (objeto.ataque >=1500 && objeto.ataque <=1999){
    return objeto.tier = "B"
}
else if (objeto.ataque >=1000 && objeto.ataque <= 1499){
   tier = objeto.tier = "C"
}
else if(objeto.ataque >=600  && objeto.ataque <= 999){
   tier = objeto.tier = "D"
}
else  {
   tier = objeto.tier = "E"
}
}




//Selecionando o objeto e inserindo o objeto como parâmetro na função tier

console.log(carta,tier(carta)) 
console.log(carta1,tier(carta1))
const resul = function(){
const a = carta.ataque
const b = carta1.ataque
const c = carta1.nome
const d = carta.nome
    if(a > b){
        console.log(`O poder de ${c}  ganhou a disputa !`)
    }
    else if(b > a) {
     console.log(`O pode de ${d} ganhou a disputa !`)
    }
    else if(a === b){
        console.log("Deu empate !")
    }
}
console.log(resul())




