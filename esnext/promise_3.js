function gerarNumerosEntre(min , max){
    if(min > max){
        [max , min ] = [min , max]  //invertendo os valores max = min e min = max
    } //Função Promise
    return new Promise(resolve => {
        //Gerando o valor aleatório
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator ) +min
        resolve(aleatorio)
    }) 
}
//Procedimento then e executando a função
gerarNumerosEntre(10 , 60) //gerando o os valor aleatório entre min = 10 e max = 60
.then(num => num  * 10) // O valor aleatório gerado e passado para o parâmetro num
.then(numX10 =>`O número gerado foi ${numX10}`)// O valor do then acima passa para o parâmetro numX10
.then(console.log)