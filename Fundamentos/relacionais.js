//A resposta será true ou false 

console.log('01)','1' == 1)//operador igual ==
console.log('02)', '1' === 1)//operador identico ===
console.log('03)', 3 != 3)//operador diferente !=
console.log('04)','3'!== 3)//operador se não for igual !==
console.log('05)', 3 < 2)//operador menor <
console.log('06)', 3 > 2)//operador maior >
console.log('07)',3<= 2)//operador menor ou igual <=
console.log('08)',3 >= 2)//operador maior o u igual >=

const d1 = new Date(0) //  Date (0) = Data de referência a 1970
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())

console.log('12)', undefined == null)
console.log('13)', undefined === null)