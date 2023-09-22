const nodeSchedule = require('node-schedule') //Importando a dependência

//Selecionando a data e instanciando o Date
const data = new Date(2022 , 6 , 2 , 19 , 16)

//Criando uma função
const job = nodeSchedule.scheduleJob(data , ()=>{
    console.log('ola mundo') //Será mostrado na hora programada!
})

//nextInvocation() : Serve para mostrar quando vai ser a proxima vez  que será mostrado a função

console.log(job.nextInvocation())