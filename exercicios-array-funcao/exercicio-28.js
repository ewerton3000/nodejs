/*
Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
consoantes, ou seja, sem as vogais.
Exemplos:
removerVogais("Cod3r") // retornará "Cd3r"
removerVogais("Fundamentos") // retornará "Fndmnts"
 */
/*function removerVogais(palavra){
 const consoantes='bcdfghjklmnopqrstvwxyzBCDFGHKLMNOPQRSTVWXYZ'
    
console.log(''.join(c  in consoantes(palavra)))
}
removerVogais('coder')
*/

function teste(palavra){
    console.log(palavra.replace(/(a|e|i|o|u)/gi, ''))
}
teste('truque')