const schedule = require('node-schedule')
 

//Aqui está marcando a execução de 5 em 5 segundos as 19 horas no mês de julho
const tarefa1 = schedule.scheduleJob('*/5 * 19 * * 6', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

//Usando o setinterval
setTimeout(function (){
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
} , 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1 , 6)]//De segunda a sabado
regra.hour = 20 //As 12 horas
regra.second = 30 //De 30 em  30 segundos


//Função para mostrar o console.log na hora desejada
const tarefa2 = schedule.scheduleJob(regra, function (){
 console.log('Executando Tarefa 2!',new Date().getSeconds())
})