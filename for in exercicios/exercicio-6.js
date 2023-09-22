//NÃO USE ISSO COM FREQUÊNCIA FOI USADO APENAS COMO EXEMPLO 
const nums = [1,2,3,4,5,6,7]
externo: for (a in nums){
    for(b in nums){
        if(a== 2 && b ==5 )
            break externo
            console.log(`Par = ${a},${b}`)
        
    }
}
console.log('fim!')