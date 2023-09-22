// Cadeia de protótipos (prototype chain)
//Object.prototype.attr0 = '0' //Não use este método nesta linha (ESTE AQUI SÒ FOI USADO DE EXEMPLO)


const avo = {attr1: 'A'}   //O Avo possui o Object.prototype como protótipo
const pai = {__proto__: avo , attr2:'B',attr3: '3'} //O pai possui o avo como protótipo
const filho = {__proto__: pai, attr3: 'C'}//O filho possui o pai como protótipo
// Chamando os atributos começando pelo objeto filho depois no pai ,no avo e depois pro Object.prototype



console.log(filho.attr0 , filho.attr1, filho.attr2 , filho.attr3)
 
const carro = {
    velAtual : 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
           this.velAtual += delta
       } else {
           this.velAtual = this.velMax
       }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo:'F40',
    velMax:324 //shadowing(sombreamento)
}

const volvo = {
    modelo: 'V40',
    status() {
        return`${this.modelo}: ${super.status()}` //super chama a função status do objeto carro
    }
}

//Selecionando o objeto com o prototype com a função Object.setPrototype
Object.setPrototypeOf(ferrari,carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(300)//Inserindo valor na função do objeto volvo   OBS:Aqui a velMax chega no maximo 200
console.log(volvo.status()) //Executando a função do objeto volvo

//OBS:Aqui a velMax = 324  e  o modelo :F40 são substituidos fazendo o sombreamento desta função
ferrari.acelerarMais(300) //inserindo o valor 
console.log(ferrari.status())//Executando função do objeto ferrari