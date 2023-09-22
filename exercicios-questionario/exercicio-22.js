//Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
//parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
//anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
//compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.

const calcular = function (mes,valor){
    if(mes >=1 && mes <=12){
        mes = 5 * mes
     valor = (valor+(valor*mes)/100)
     console.log("Mensalidade com o valor de ",valor)
    }
    else{
        console.log("Mês inválido")
    }
    
}
calcular(1,100)