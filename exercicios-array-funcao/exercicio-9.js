/*
Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.
Exemplos:
repetir("código", 2) // retornará ["código", "código"]
repetir(7, 3) // retornará [7, 7, 7] */

function funcao(par1 , par2){
    let array = []
    for(i=1,par1; i <=par2;i++){
        array.push(par1)
       
    }
    console.log(array)
}
funcao("Nossa cara", 8)