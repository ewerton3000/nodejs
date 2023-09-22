//Urls que foram utilizadas neste exemplo:

//JSON de turmas nas urls abaixo:
//http://files.cod3r.com.br/curso-js/turmaA.json
//http://files.cod3r.com.br/curso-js/turmaB.json
//http://files.cod3r.com.br/curso-js/turmaC.json


//Sem promisse
  const http = require('http')

  //Usando o parametro letra para pegar as turmas A,B,C e a callback para chamar o JSON quando estiver carregado
  const getTurma =  (letra , callback) =>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json` //Recebendo o parâmetro letra
    http.get(url, res =>{ //metodo get e usando o res(responsive)
      //Retornando o JSON um por um  para gerar os dados completos
      let resultado = ''  //variavel vazia
      
      res.on('data',dados=>{ //Os dados chegando pelo parâmetro dados
         resultado += dados //Atribuindos os dados dentro de resultados
      })

      //Terminando de chegar os dados e convertendo para string
      res.on('end', ()=>{
       callback(JSON.parse(resultado))
      })

    })
  }

  let nomes = [] //Vetor(Array) para armazenar os nomes 
  //Puxando os alunos da turma A com o getTurma executando na callback abaixo:
  getTurma('A',alunos =>{
    //Concatenando os nomes com a letra da turma com concat
    //Usando o map para puxar os alunos da turma A e usando o a para puxar a letra armazenada
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`)) 

     getTurma('B',alunos =>{
        nomes = nomes.concat(alunos.map(a =>`B: ${a.nome}`))
     getTurma('C',alunos =>{
        nomes = nomes.concat(alunos.map(a=> `C: ${a.nome}`))
        console.log(nomes)
     }) 
    }) 
  })