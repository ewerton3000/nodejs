const  {preco:x,preco:y}= {preco:100,preco:50}
console.log(x,y)

console.log()
console.log()
//Teste os objetos para percorrer com forEach
     
    console.log('Com os atributos iguais')
    obj={ nome:'Thiago',nome:"Dennis",nome:"Gabriel"}
    Object.entries(obj).forEach(e=>{
        console.log(`${e[0]}:${e[1]}`)
    })
    console.log()
    console.log()
    console.log("Com os atributos diferentes")
    obj={ nome:'Thiago',idade:55,nota:10}
    Object.entries(obj).forEach(e=>{
        console.log(`${e[0]}:${e[1]}`)
    })