function esperarPor(num1,num2,tempo = 2000){
    return new  Promise(function(resolve){
        setTimeout(() => resolve() ,tempo)     
        console.log(num1+num2) 
    })
    
 }
async function executar(){
    await esperarPor(7,8,1500)
    console.log('Async/Await 1 .....')
    await esperarPor(num1++,num2++,1500)
    console.log('Async/Await 2 .....')
    await esperarPor(7,8,1500)
    console.log('Async/Await 3 ......')
 
}

executar()