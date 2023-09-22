//Tente somar os atributos do array se der certo mostre todos os salarios descontados juntos

const salario = [{numero:1 , salario:2500 , descontos:-400, inss:-150 , },
                 {numero:2 , salario:3800 , descontos:-700, inss:-300 , },
                 {numero:3 , salario:5700 , descontos:-900, inss:-450 , },
    ]
    
    var teste = salario.map(entrada=>{
        return{
            salario:entrada.salario
        }
    })
    
    console.log(teste)
    /*const resultado = salario.map(s=>s.salario).reduce(function(acumulador , atual){
      console.log(acumulador , atual)       
      return acumulador + atual
    })
console.log(resultado)*/
