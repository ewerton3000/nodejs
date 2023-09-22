let num1 = 1
let num2 = 2

num1++//pós-incremento
console.log(num1)
--num1
console.log(num1)

//não é aconseçhavel usar esses codigos
console.log(++num1 === num2--) // O pós decremento ou incremento sempre será feito depois da comparação
console.log(num1 === num2)