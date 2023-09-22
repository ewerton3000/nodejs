//Closure é o escopo criado quando uma função é declarada
//Esse escopo permite a função acessar e manipulada variaveis externas à função

//Contexto léxico em ação

const x = `Global`

function fora(){
    const x = 'Local'
    function dentro(){
   return x
    }
    return dentro
}

const minhafuncao =  fora()
console.log(minhafuncao())