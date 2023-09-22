 function Aula(nome , videoID){ //Função construtora 
     this.nome = nome
     this.videoId = videoID
 }

 const aula1 = new Aula('Bem Vindo',123)
 const aula2 = new Aula('Até Breve',456)
 console.log(aula1 , aula2)

 //simulando o new             ...params = COnverte para um array
 function novo( f , ...params){
  const obj = {}
  obj.__proto__ = f.prototype //nunca use essa linha. NÂO SERVE prototype é inter do JS
  f.apply(obj, params)
  return obj
 }
 const aula3 = novo (Aula , 'Bem vindo',177)
 const aula4 = novo(Aula , 'Ate Breve',648)
 console.log(aula3, aula4)