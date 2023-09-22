class Carrinho{
    constructor(produto,preco){
        this.produto = produto
        this.preco = preco
    }
}

class Total{
    constructor(nome){
        this.nome = nome
        this.coleta = []
    }
    
    calcular(...coleta){
        coleta.forEach( t =>this.coleta.push(t))
    }

    resumo(){
        let sacola = 0
        this.coleta.forEach(t =>{
            sacola += t.receber
        })
        return sacola
    }
}

const prod1 = new Carrinho("Trakinas",3)
const prod2 = new Carrinho("Caixa de bombom",8)
const prod3 = new Carrinho("Shampoo",5)
const prod4 = new Carrinho("Tampa de vaso",9)

const a = new Total("Sergio")
a.calcular(prod1,prod2,prod3,prod4)
console.log(a.resumo())