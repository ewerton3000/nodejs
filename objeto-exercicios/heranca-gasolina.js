const carro ={
    gasAtual:800.00,
    gasMax:500.00,
    tanque(gasolina){
    if(this.gasAtual + gasolina <=this.gasMax){
    this.gasAtual += gasolina
    
    }
    else{
        this.gasAtual = this.gasMax
    }
    
},
status(){
    return`${this.gasAtual} de gasolina de ${this.gasMax} máximo !`
      
},
calculo(total){
    return total=this.gasMax - this.gasAtual
}
}
 
const carro1 = {
   gasAtual:200.00,
   gasMax:700.00
}
const carro2 = {
    gasAtual: 900.00,
    gasMax:1300.00}
const carro3 = {
    gasAtual: 400.00,
    gasMax: 650.00,
    status(){
        return`${this.modelo} : ${super.status()}`,
        
        console.log()
    }
    }
    
Object.setPrototypeOf(carro3,carro)
Object.setPrototypeOf(carro2,carro)
Object.setPrototypeOf(carro1,carro)
console.log(carro3)
console.log(carro1)

console.log(`Faltam ${carro1.calculo()} ml para acabar a gasolina`)
console.log(`Faltam ${carro2.calculo()} ml para acabar a gasolina`)
console.log(`Faltam ${carro3.calculo()} ml para acabar a gasolina`)



