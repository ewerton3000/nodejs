function resolverDepoisDe2Segundos(x){ //função de tempo
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(x)
        }, 2000)
    })
}

async function adicionar(x){
    var a = resolverDepoisDe2Segundos(20)
    var b = resolverDepoisDe2Segundos(30)
    var c = resolverDepoisDe2Segundos(40)
    return x +await a + await b +await c
}

adicionar(10).then(v =>{
    console.log(v)
})

async function adicionar2(x){
    var a = await resolverDepoisDe2Segundos(20)
    var b = await resolverDepoisDe2Segundos(30)
    return x + a + b
}

adicionar2(10).then(v=>{
    console.log(v)
})