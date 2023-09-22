//Para se comunicar com o terminal mostrando o valor booleano
const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo)

//Se o parâmetro estiver certo 
if(anonimo){
    process.stdout.write('Fala Anônimo\n')
    process.exit()//Finalizando o processo
}

//Se o parâmetro estiver incorreto
else{
    process.stdout.write('Informe o seu valor') //Descrevendo o que vai dizer pro usuario
    process.stdin.on('data' , data =>{ //Quando o valor for digitado 
        const nome  = data.toString().replace('\n' , '') //Substituindo \n por espaço vazio

        process.stdout.write(`Fala ${nome}\n `) //Imprimindo 
        process.exit()//Finalizar o processo
   })
}
