//Variaveis

let preco = 19.90;
let desconto = 0.4;

console.log(19.90 *0.6);
console.log();
console.log(preco * (1 - desconto)); 
/*OBS:Repare que neste codigo tem 4 conchetes() o 1 - desconto e
 preco * o conchete(parentese) dentro será o primeiro a ser executado e depois faz a outra operação*/

let precoComDesconto = preco *(1 - desconto);
console.log(precoComDesconto);

let nome = "Caderno"; //String (texto) -> sequencia de símbolos  usando aspas "" virá uma string
let categoria = "Papelaria";

console.log( " Produto : " + nome 
+ " , Categoria:" + categoria
+ ",  Preço : " + preco
+ ", Desconto : " + desconto);
//Mostrando duas variaveis dentro do console com o sinal + para concatenar as variaveis

