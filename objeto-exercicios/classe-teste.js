class Salario{
     constructor (porcentagem,desconto,recebido,inss){
         this.desconto =   (desconto - porcentagem )
         this.porcentagem  = (porcentagem * recebido) /100
         this.recebido = recebido
         this.inss =  inss
        this.total =   (this.recebido - this.porcentagem) - this.inss
               
     }

     
}

class Funcionario{
    constructor(nome , id){
        this.nome = nome 
        this.id = id
        this.contracheque = []
    }
    
     receber(...contracheque){
         contracheque.forEach(r =>this.contracheque.push(r))
     }

     resumo(){
         let valores = 0
         this.contracheque.forEach( r =>{
             valores += r.recebido
         })
         return valores
     }
    
}

const salario1 = new Salario(15,8,1500,150)
const salario2 = new Salario(30,0,1800,190)


const ajudante = new Funcionario("Jorge",14)

console.log(ajudante.receber(salario1,salario2))
console.log(salario1)
console.log(ajudante.resumo())