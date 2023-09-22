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

/*let nomes = [] //Vetor(Array) para armazenar os nomes 
//Puxando os alunos da turma A com o getTurma executando na callback abaixo:
getTurma('A').then(alunos =>{
  //Concatenando os nomes com a letra da turma com concat
  //Usando o map para puxar os alunos da turma A e usando o a para puxar a letra armazenada
  nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`)) 
//Usando o then para retornar o resultado da Promise
   getTurma('B').then(alunos =>{
      nomes = nomes.concat(alunos.map(a =>`B: ${a.nome}`))
   getTurma('C').then(alunos =>{
      nomes = nomes.concat(alunos.map(a=> `C: ${a.nome}`))
      console.log(nomes)
   }) 
  }) 
})
*/

//Usando o Promise.all
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
.then(turmas => [].concat(...turmas)) //Usando o spread armazenar os arrays e concatena-los
.then(alunos =>alunos.map(aluno => aluno.nome))
.then(nomes => console.log(nomes))

//Tentando puxar a turma D (só que ela não existe)
getTurma('D').catch(e => console.log(e.message))