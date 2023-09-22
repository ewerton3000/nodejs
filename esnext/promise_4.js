function gerarNumerosEntre(min , max,tempo){
    if(min > max)[max , min ] = [min , max]  //invertendo os valores max = min e min = max //Função Promise
    return new Promise(resolve => {
    setTimeout(function (){
        //Gerando o valor aleatório
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator ) +min
        resolve(aleatorio)
        
         }, tempo) 
    }) 
}

function gerarVariosNumeros(){
    return Promise.all([
        gerarNumerosEntre(1 , 60 , 4000),
        gerarNumerosEntre(1 , 60 , 1000),
        gerarNumerosEntre(1 , 60 , 500),
        gerarNumerosEntre(1 , 60 , 4000),
        gerarNumerosEntre(1 , 60 , 4000),
        gerarNumerosEntre(1 , 60 , 1500),
    ])
}

console.time('promise') //Iniciando a contagem do processo com o método
gerarVariosNumeros()
.then( console.log) //mostrando os valores da função gerVariosNumeros()
.then(() => {         
    console.timeLog('promise') //tempo de execução da promise 
    console.timeEnd('promise')//tempo final da execução da promise
})