//Elabore um algoritmo que leia 5 valores inteiros e apresente o maior, o menor e a media.
let n1 = 7
maior = n1
menor = n1  
let n2 = 8
let n3 = 5
let n4 = 6 
let n5 = 1

media = (n1+n2+n3+n4+n5)/5
if(n2> maior){
    maior = n2
}if(n2 < menor){
    menor =n2
}
if(n3 > maior ){ 
    maior =n3
}if(n3 < menor){
    menor = n3
}
if(n4> maior){
    maior = n4
}if(n4 <
     menor){
    menor = n4
}
if(n5> maior){
    maior = n5
}if(n5 < menor){
    menor = n5
}

console.log(`Sua média é ${media.toFixed(2)}`)
console.log(`O maior número é ${maior}`)
console.log(`O menor número é ${menor}`)

