//Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
function contador(n){
    let impar = 0
    let par = 0
for(i=0 ; i< n.length; i++){
   
    if (n[i] % 2 == 0){
 par++
 }
else{
    impar++   
}
}
console.log(`Os números pares contados foram ${impar} e pares foi ${par}`)
}

num =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
contador(num)