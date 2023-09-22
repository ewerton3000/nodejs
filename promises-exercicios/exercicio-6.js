function resolverDepoisDe2Segundos(a){
    return new Promise(resolve =>{
        setTimeout(() =>{
            resolve(a)
        },2000)
    })
}

async function adicionar(a){
    var b = await resolverDepoisDe2Segundos(10)
    var c = await resolverDepoisDe2Segundos(10)
    return a +b +c
}

adicionar(10).then(d=>{
    console.log(d)
})
adicionar(20).then(e=> console.log(e))
async function teste(l){
    let a = await resolverDepoisDe2Segundos(50)
    let b = await resolverDepoisDe2Segundos(50)
    return l + a + b
} teste(10).then(b=> console.log(b))