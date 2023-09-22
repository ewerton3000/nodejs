async function funcao1(n1){
    console.log(n1)
    console.log(resul= await(n1+n1))
    console.log(r= await(resul+n1))
    console.log(re= await(r+n1))
}

console.log(funcao1(10))
/*async function saudacaoAsync(){
  return "Oi"
}

console.log(saudacaoAsync())

saudacaoAsync().then(console.log)

async function saudacaoAsync(){
    return saudacao = await Promise.resolve("oi!")
}

saudacaoAsync().then(console.log)

*/