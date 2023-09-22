//Async Await de musica 
//Artista Ozzy Osbourne musica: HERE FOR YOU
function umsegundo(a){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(a)
        },1000)
    })
}
function quatrosegundo(a){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(a)
        },4000)
    })
}

async function letra1(){
    await umsegundo(3000)
    console.log("I remeber all the goodtimes")
    await quatrosegundo()
    console.log("Sometimes I'd wonder would it last")
    await quatrosegundo()
    console.log("I used to dream about the future")
    await quatrosegundo()
    console.log("but now the fututre is the past")
    await umsegundo()
    console.log("Chorus: Q don't wanna live in yesterday")
    await umsegundo()
    console.log("Cross my heart unitl I die")
    await umsegundo()
    
    
}
letra1().then((e)=>console.log("fim"))
