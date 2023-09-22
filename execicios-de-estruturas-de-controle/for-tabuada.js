for(let a=1,b=1 ;b <=10;a++ ){
    
    console.log(`${a} X ${b} = ${a*b}`)
    if(a==10){
    a = 1
    b++
    console.log("Tabuada de ",b)
    console.log(`${a} X ${b} = ${a*b}`)
    
    
} 
}

//tanto while quanto for dão o mesmo resultado e só muda o jeito da variavel de ser criada

let a =1
let b = 1
while(b <=10 ){
    a++
    console.log(`${a} X ${b} = ${a*b}`)
    if(a==10){
    a = 1
    b++
    console.log("Tabuada de ",b)
    console.log(`${a} X ${b} = ${a*b}`)
    
} 
}

