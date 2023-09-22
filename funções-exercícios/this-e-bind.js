//This
const Tempo = {
    Hora : 10 ,
    minuto :52,
    segundo: 45 ,
    diga(){
        console.log(this.Hora,":",this.minuto,":",this.segundo)
    }
}
Tempo.diga()


let um ={
        dia : "Quarta feira",
        bob(){

        console.log(this.dia)
    }
}
um.bob()

let carta = function(){
         num : 1,
         cartada() {
             console.log(this.num)
         }
}
carta.cartada()