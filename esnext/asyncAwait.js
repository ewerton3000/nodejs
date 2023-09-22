//Urls que foram utilizadas neste exemplo:

//JSON de turmas nas urls abaixo:
//http://files.cod3r.com.br/curso-js/turmaA.json
//http://files.cod3r.com.br/curso-js/turmaB.json
//http://files.cod3r.com.br/curso-js/turmaC.json


//Com promisse
const http = require('http')

//Usando o parametro letra para pegar a função
const getTurma =  letra  => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json` //Recebendo o parâmetro letra
  return new Promise((resolve, reject) =>{ //Usando a promise para a resposta do get
    http.get(url, res =>{ //metodo get e usando o res(responsive)
        //Retornando o JSON um por um  para gerar os dados completos
        let resultado = ''  //variavel vazia
        
        res.on('data',dados=>{ //Os dados chegando pelo parâmetro dados
           resultado += dados //Atribuindos os dados dentro de resultados
        })
  
        //Terminando de chegar os dados e convertendo para string
        res.on('end', ()=>{
         try{    //Usando o try se o resolve for ativado
            resolve(JSON.parse(resultado))
         } catch(e){//Usando o  catch caso o reject seja ativado
            reject(e)
         }
        })
  
      })
  })
}

//Recurso do ES8
//Objetivo de simplificar o uso de promises...

let obterAlunos = async () =>{
    //Armazenando as funções com await dentro dos arrays
    const ta = await getTurma('A') 
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta,tb,tc) //Concatenando os três arrays
}
// retorna um objeto AsyncFunction abaixo:
obterAlunos()
.then(alunos => alunos.map(a =>a.nome))
.then(nomes =>console.log(nomes))