//- Escrever um algoritmo que leia um conjunto de 50 informações contendo,
//cada uma delas, a altura e o sexo de uma pessoa (código=1, masculino
  //  código=2, feminino),
   // calcule e mostre o seguinte:
   // a) a maior e a menor altura da turma 
   // b) a média da altura das mulheres   
   // c) a média da altura da turma.
  

   
   
   for( i=0,f=0,media =0 , mediaf = 0 , maior = 0, menor = 0; i >50  ; i++ ){
    const entrada = require('Prompt-sync')
   const prompt = entrada()
   let altura(i) = prompt("Qual é a sua altura ? ")
   let sexo(i) = prompt("Digite o número do seu sexo 1 = masculino  2 = feminino?")
   sexo(i) = parseInt(sexo(i))

       if(sexo(i) = 1){
           console.log("Masculino")
          
       }
       else if(sexo(i) = 2){
           console.log("Feminino")
          let  mediaf = altura(i)+mediaf
           f++          
       }
       
       let media =  altura(i)+ media
       maior = altura(i)
       menor = altura(i)

       if(altura(i) > maior ){
           maior = altura(i) 
           
       }

       if( altura(i) < menor ){
           menor = altura(i)
       }
       
       console.log(media)

       

   }
    total = media/50
    mediaf = mediaf/f
    console.log("A maior altura é : ",maior)
    console.log("A menor altura é : ",menor) 
    console.log("A media do sexo feminino é :",mediaf.toFixed(2))
    console.log("A media de altura é ",total.toFixed(2))