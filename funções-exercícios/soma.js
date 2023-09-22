const teste  = function  (a,b){
    this.resul = a +b
    console.log( this.resul)
}

const teste1 = function ( ){
    this.soma =function(c,d){
     c + d
    console.log(this.soma)
    }
}

teste(5,5)
teste1(10,20)
const a = new teste
const b = new teste1
a = this.resul
b = this.soma
console.log(a+b)