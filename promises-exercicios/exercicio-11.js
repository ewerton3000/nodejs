function Segundos(x){
    return new Promise( resolve=>{
        setTimeout(()=>{
            resolve(x)
        }, 2000)
    })
}
async function  divisao(){
    const div = 2
    let num = 1
   
for(i = 1; i<=20; i++){
    let a  = await Segundos()
  if(num % div  == 0){

  console.log(`${num} , é divisivel por ${div}`)
  }
  else{
    
    console.log(`${num} não é divisivel por ${div}`)
  }
  num++
  
  
}
}
divisao().then((e)=>{
})