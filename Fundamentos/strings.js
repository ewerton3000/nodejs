const escola ="Cod3r";//Aqui temos uma posição de 4 posições da string tente uma maior e não retorna nada!

console.log(escola.charAt(4));
console.log(escola.charAt(5));
console.log(escola.charCodeAt(3));
console.log(escola.indexOf('3'));
console.log(escola.substring(1));
console.log('Escola '.concat(escola).concat("!"));
console.log('Escola '+(escola)+("!"));

console.log(escola.replace (3,'e'));
console.log('Ana,Maria,Pedro'.split(','));
const fruta = "banana , laranja , perâ";
 console.log(fruta.split(','));
const jornal = "O dia-extra-meia hora";
console.log(jornal.split('-'))


/* OBS:Lembre-se de como contar a posição de uma string que elas sempre começam do zero 
e use o cursor para passar de posição use exemplos: lapís:4 posições , caneta: 5 posições

.chatAlt():É uma função que mostra a letra de uma string inserindo uma posição
 como parametro da letra especícifa dela! exemplo: console.log(escola.charAt(2));
*/

/* charCodeAt() : É uma função que mostra a posição unicode da string ele mostra o código de html
da string

OBS:Para saber mais sobre posições da unicode entre em :unicode-table.com*/

/* .indexof() : É uma função que mostra o caracter específico como parametro
e ve se ele está  da  string  selecionada exemplo:
const nome = et;
 console.log(nome.indexof(t));
*/

/*substring:É uma função que conta da posição da  string de acordo com o parâmetro inserido exemplo:
const fruta = "maçã";
console.log(fruta.indexOf(1));
console.log(fruta.indexOf(0 , 3)); OBS: Aqui conta da posição 0 até a 2 mas a 
posição 3 não não será contada serve apenas como limite 
*/

/*
concat: É uma função que  contatena duas string uma  string literal("jornal") e uma string dentro de 
uma variavel rua="general ozorio" exemplo:

const eu = sou

console.log('inteligente '.concat(eu).concat("!"));

*/
/*
replace:È uma função que substitui uma letra da string exemplo: replace (antes,'depois') 
const era =n3st 
console.log(era.replace (3,'e')); 

/*
split:É uma função que transforma todas as strings em array e usa um parametro para quebra de linha
exemplo: const fruta:banana , laranja , perâ;   
//OBS: O parametro pode ser uma virgula ',' para quebra de linha para separar as posições do array
 console.log(fruta split(',')); */