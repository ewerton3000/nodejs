function Carro(velocidadeMaxima = 200  , delta = 5){
    //atributo privado
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function (){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }  
        else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function (){
        return velocidadeAtual
    }
}

const uno = new Carro //Armazenando a instacia da função Carro na variavel uno
uno.acelerar() //Usando a const Carro com a função publica acelerar
console.log(uno.getVelocidadeAtual())  //Mostrando a função Carro com a função publica getValocidadeAtual


//Instanciando a função Carro e dentro dela (350 = velocidade maxima , 20 = aumenta a velocidade de 20 em 20)
const ferrari = new Carro(350 , 20) 
ferrari.acelerar() 
ferrari.acelerar() 

console.log(ferrari.getVelocidadeAtual()) //Executando o objeto com a função publica getVelocidade