function laco(num,mul,segundos){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(num % 2 == 0){
                resolve(`${num} Número par`)
            }
         reject(`${num} numero impar`)
        },segundos * 1000)
    })
}
laco(9)
.then((num)=>console.log(num))
.catch(e => console.log(e))