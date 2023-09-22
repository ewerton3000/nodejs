//Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
//primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
//retornará o valor da aplicação sob o regime de juros compostos.

function inicio(juros,capital,tempo){
  return capital + (capital * tempo * juros)
}

function fim (taxa , capital , tempo){
   return capital * (1 , taxa) ** tempo
}

console.log(inicio(4.50,10/100,4))
console.log(fim(45.00, 10/100,4))