/* //Função setTimeout()
 setTimeout(function(){
    console.log('Executando callback...') //executando
    setTimeout(function (){ //Outra função settimeout()
        console.log('Executando callback...')

        setTimeout(function(){//Outra função settimeout()
    console.log('Executando callback...')

        },2000) //tempo de 2 segundos para a execução da função
        
    },2000)//tempo de 2 segundos para a execução da função
 }, 2000)//tempo de 2 segundos para a execução da função

 */
   //Settimeout com a Promise
 function esperarPor(tempo = 2000){
    return new  Promise(function(resolve){
        setTimeout(function(){
            console.log('Executando promise...')
            resolve()
            
        }, tempo)
    })
 }

 //Sequencia feita pelo then para executar a função esperarPor
 esperarPor()
 .then(()  => esperarPor())
 .then(esperarPor)