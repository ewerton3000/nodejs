//Multiplicação com async await
function segundos(x){
    return new Promise( resolve=>{
        setTimeout(() =>{
            resolve(x)
        },2000)
    })
}

async  function addfor(mul,next){
    for(i=1;i<=10;i++){
        console.log(`${i} x ${mul} = ${i*mul} `)
       await segundos()
    }
}
addfor(5).then((e)=>console.log("acabou"))
addfor(4).then((e)=>console.log("acabou 2"))
