/* O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
*/

const itens = function(cod,quant){
    
      let valor
     switch(cod){
        case cod = 100 :console.log('Pedido:cachorro quente quant:',quant,'R$ valor:',valor=3.00,'total: R$',(valor=valor*quant).toFixed(2))
        break
        case cod = 200:console.log('Pedido:Hámburguer quente quant:',quant,'R$ valor:',valor=4.00,'total: R$',(valor=valor*quant).toFixed(2))
        break
        case cod = 300:console.log('Pedido:Chesseburguer quant:',quant,' valor : R$',(valor=5.50).toFixed(2),'total: R$',(valor=valor*quant).toFixed(2))
        break
        case cod = 400:console.log('Pedido:Bauru quant:',quant,' valor : R$',(valor = 7.50).toFixed(2),'total: R$',(valor=valor*quant).toFixed(2))
        break
        case cod = 500:console.log('Refrigerante quant:',quant,' valor : R$',(valor=3.50).toFixed(2),'total: R$',(valor=valor*quant).toFixed(2))
        break
        case cod = 600:console.log('Pedido:Chesseburguer quant:',quant,' valor : R$',(valor=2.80).toFixed(2),('total: R$',valor=valor*quant).toFixed(2))
         default: console.log('Código inválido')

     }
}

console.log(itens(400,5))