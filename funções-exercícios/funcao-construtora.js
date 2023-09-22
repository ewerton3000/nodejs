function frango(peso = 5 , quant = 10  ) { 
         
     //atributo privado
     let pesoAtual = 0
        

     pesoAtual += peso
     //Metodo publico
     this.pesando = function (){
         if(peso <= 0.9){
             
             console.log("Peso não aceito para a venda")
         }
         else{
             
           pesoAtual = pesoAtual * quant
         }
     }

     //Metodo publico
     this.getPesoAtual = function(){
         return pesoAtual
     }
}

const uno = new frango
uno.pesando()
console.log(uno.getPesoAtual())

const caminhao = new frango(15 , 30)
caminhao.pesando()

console.log("O caminhão levou",caminhao.getPesoAtual(),"KG de Frango")