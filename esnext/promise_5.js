 //Usando o try catch para tratar o erro da Promise
 
 function funcionarOuNao(valor , chanceErro){
    return new Promise((resolve , reject) =>{
        try{ 
            con.log('temp') //Um console.log para acontecer o erro
            if(Math.random() < chanceErro){
                reject('Ocorreu um erro!')
            } else{
                resolve(valor)
            } //Se a condição do if no try não funcionar cai para o catch e usa o reject com resposta de erro
        } catch(e){
            reject(e)
        }
        })
 }

 funcionarOuNao('Testando...',0.1)
   .then(v => console.log(`Valor: ${v}`)) //Imprimindo a variavel valor
   .then(
    v => console.log(v), //Mostrando o valor mas se o código estiver errado pula para o erro abaixo
    err => console.log(`Erro Esp.: ${err}`)) //Mostrando o erro especpifico deste then
   .then(() => console.log('Quase Fim!'))
   .catch(err => console.log(`Erro: ${err}`)) // Ele puxa a mensagem de erro do reject
   .then(() => console.log('Fim'))