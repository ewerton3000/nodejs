const _ = require('lodash')
//Utilizando o random para mostrar valores aleatórios de 2000:de dois em dois segundos
setInterval(() => console.log(_.random(5, 10)),2000) 

