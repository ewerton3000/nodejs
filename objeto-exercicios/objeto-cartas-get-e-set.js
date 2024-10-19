const elemento =  new Object
elemento.tipo = 'Fogo'
elemento['fraqueza'] = 'agua'
elemento.estado= 'solido'

console.log(elemento)

const carta = {
 _personagem: 'Mago Negro',
 habilidades: 'Magia negra',
 poder:'Cosmico',
 _ataque : 2000,
 descricao : 'Um ser muito poderoso que foi criado dentro da cidade dos profetas!',

 get ataque(){return this._ataque},
 set ataque(ataque){
     this._ataque = ataque
 },
 get personagem(){return this._personagem},
 set personagem(personagem){
     this._personagem =personagem
 }

}

const jogador1= {
    _vida: 4000 ,
    get vida(){return this._vida},
    set vida(vida){
        this._vida=vida
    }
    
}
const jogador2= {
    _vida: 4000 ,
    get vida(){return this._vida},
    set vida(vida){
        this._vida=vida
    }
}
//Criando as cartas como objeto
const carta1 = Object.create(carta)
carta1.personagem = 'Dragão Branco de olhos azuis'
carta1.habilidades = 'fogo azul'
carta1.poder = 'Ataque de fogo com três cabeças'
carta1.ataque = 1500
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
const a = carta._ataque
const b = carta1._ataque
const c = carta._personagem
const d = carta1._personagem
const vida1= jogador1._vida
const vida2= jogador2._vida

    if(a > b){
        console.log(`O poder de ${c}  ganhou a disputa !`)
        const resul = a - b
        const total = vida1 - resul
        console.log(`O jogador 1 perdeu ${vida1 -total}  pontos de vida e agora possui ${total}!`)
    }
    else if(b > a) {
    console.log(`O poder de ${d} ganhou a disputa !`)
        const resul = b - a
        const total = vida2 - resul
        console.log(` O jogador 2 perdeu ${total-vida2} pontos de vida e agora possui ${total}!` )
    }
    else if(a === b){
        console.log("Deu empate e ambos os monstros irão para o cemitério !")

    }
}
console.log(resul())
