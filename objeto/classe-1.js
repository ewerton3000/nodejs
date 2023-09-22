class Lancamento{
    constructor(nome = 'Genéricos' , valor = 0){ //Função construrora
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes , ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = [] //Array
    }
     //função
    addLancamentos(...lancamentos) {//Operador Spread: ...
    lancamentos.forEach(l => this.lancamentos.push(l)) //puxando os valores pro array
    }
     
    //função
    sumario() {
    let valorConsolidado = 0    //Passando o valor 0 para receber adições com os valores inseridos
    this.lancamentos.forEach(l => { //Percorrendo o array com ForEach
      valorConsolidado += l.valor //Atribui os valores e os soma tirando do array l (parâmetro)
    })
    return valorConsolidado
  }
}

//Inserindo valores nos parametros da função Lancamento com operador new
const salario = new Lancamento('Salario',45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6 ,2018)
contas.addLancamentos(salario, contaDeLuz) //Inseridos dentro do array lancamentos
console.log(contas.sumario())//executando