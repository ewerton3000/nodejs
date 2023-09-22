
const teste =  function precos(...preco){
     for(i=0,total = 0 ; i <preco.length ;i++){
        total += preco[i]
     }
     console.log(total)
}
teste(48,79,85)


const o = function objetos(...obj){
   
   console.log([Object.entries(obj)]) 
}
o({nome:"Batata",preco:40},{nome:"tomate",preco:80})
let a = o() + teste()
console.log(a)