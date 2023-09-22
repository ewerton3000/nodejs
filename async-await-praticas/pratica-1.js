function dobrarEm5Segundos(x,tempo){
    return new Promise(function(resolve){
        setTimeout(()=>resolve(),tempo)
    })
}


addAsync().then(()=>{
    console.log()
})
async function addAsync(x){
    let A = dobrarEm5Segundos()
    let b 
    let c
    return
}
addAsync(10)