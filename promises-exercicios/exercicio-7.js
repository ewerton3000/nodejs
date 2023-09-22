function dobrarEm5Segundos(x){
    return new Promise( resolve=>{
        setTimeout(() =>{
            resolve(x)
        }, 5000)
    })
}
async function addAsync(x){
    let a = await dobrarEm5Segundos(10)
    n1=a*x
    console.log(n1)
    let b =await dobrarEm5Segundos(20)
    n2=b*x
    console.log(n2)
    let c = await dobrarEm5Segundos(30)
    n3=c*x
    console.log(n3)
}
addAsync(4).then((e)=>{
    console.log(e)
})