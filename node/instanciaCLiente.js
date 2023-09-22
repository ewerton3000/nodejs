const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

//Chamando a função inc para incrementar  o número um
contadorA.inc()
contadorA.inc()
console.log(contadorA.valor,contadorB.valor) //Executando com o atributo valor

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor,contadorD.valor)//Executando com o atributo valor