function Segundos(x){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(x)
        },2000)
    })
}

async function primo(x){
    let div = 1
    let num = 1
    let cont = 0
for(i=1;i<=x;i++){
  let a  = await Segundos()
  
   if(num % div ==0){
    cont++
   }
   if(num == div && cont == 2){
    console.log(`${num} é um numero primo`)
    let cont = 0
   }
   if(num == div){
    div = 1
   }
   if(cont>2 && num == di){
    console.log(`${num} não é um numero primo`)
   }
   num++
   div++
}
}

Segundos()
primo(10).then((e)=>{

})