//Teste de como usar o prompt no node.js

//Instalar a biblioteca do node para o prompt: npm install prompt-sync

//Para executar o código use o terminal,abra a pasta do arquivo e execute com node arquivo.js

const entrada = require('prompt-sync')({sigint: true});
let nota1;
let nota2;

nota1 = entrada("Digite um número:");
nota2 = entrada("Digite um número:");
nota1 = parseInt(nota1);
nota2 = parseInt(nota2);

let nota3 = nota1 + nota2;

console.log('primeiro digitado  :',`nota1 = ${nota1}`);
console.log('Segundo número digitado : ',`nota2 = ${nota2}`)
console.log(nota3)