//Obtenha a mulher chinesa com o menor salário onde exise 500 funcionários dentro da do arquivo json 
//E filtre que todo mundo do país é china ,genero mulher e comparar os salários pra ver quem é a mulher chinesa
// com o melhor salário

const url ='http://files.cod3r.com.br/curso-js/funcionarios.json' //Pegando os dados de um json na url
const axios = require('axios') //CLient http

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func , funcAtual) =>{
    //Para trazer o menor salario
    // Se o funcsalario atual for menor que o funcAtual  então retorne o funcAtual
    return func.salario > funcAtual.salario ? func : funcAtual
}
//Usando o get com a biblioteca axios e inserindo a url dento dos parenteses do get
axios.get(url).then(response =>{
    const funcionarios = response.data //atributo data guarda todo os dados da url
    
     
    //mulher chinesa com o menor salário?
    const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)
     
    //Executando a função
    console.log(func)
})

