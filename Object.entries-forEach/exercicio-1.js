
const obj1={ produto:"Nuggets",preco:20,produto:"Flango",preco:15,produto:"carne",preco:40}
Object.entries(obj1).forEach(d=>{
    console.log(`${d[0]}:${d[1]}`)
})