for(a=1 ,b=1;a<=20;a++,b++ ){

if(a==21){
break
}
 if( a % b ==0 ){
    console.log(`O número ${a} é primo!`)
    b=1
    
} 
 else if (a % b == 1){
    console.log(`O número ${a} não é um número primo!`)
 }
} 