const peso1 = 1.1;
const peso2 = Number('2.0');

console.log(peso1,peso2);
console.log(Number.isInteger(peso1));//Vendo se o número inteiro
console.log(Number.isInteger(peso2));//Vendo se o número inteiro

const avaliacao1 =9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2));//toFixed:Evita do valor fracionado tenha varios numeros
console.log(media.toString(2));//toString:Retorna o valor original da variavel e o (2) passa para  binário
console.log(typeof media);// media:Mostra o tipo de valor 
console.log(typeof Number);//Number:Mostra se é uma função ou outra coisa
