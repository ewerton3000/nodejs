function conta (n){
 n=1
let b=3
let ok = 0
let not = 0
for(i = 1 ;i < n.length ; i++ ){
if(n[i] % 3 == 0){
    ok++
}
else{
    not++
}

}
console.log(`A quantidade de números divisiveis por 3 é:${ok} e que não são é ${not}`)

}
const num=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
console.log(conta(num))