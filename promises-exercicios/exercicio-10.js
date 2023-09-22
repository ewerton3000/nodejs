//Aqui realemnte é dobrarem5Segundos rs

function dobrarEm5Segundos(x){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(x)
        },5000)
    })
}

async function addAsync(){
    let  a = await dobrarEm5Segundos(10)
    n1 = a
    console.log(n1)
    let b = await dobrarEm5Segundos(n1)
    n2=n1+a
    console.log(n2)
    let c = await dobrarEm5Segundos(b)
    n3 = n2*2
    console.log(n3)
}

addAsync().then((e)=>{
    
})