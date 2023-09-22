function real(partes, ...valores){
    const resultado = [] //Array
    valores.forEach((valor , indice) =>{ //usando o parâmetro(rest) com spread para percorrer o array com o forEach
        valor = isNaN(valor) ? valor : `R$ ${valor.toFixed(2)}`
        resultado.push(partes [indice], valor ) //Jogando o valor e a posição(indice)
    })
    return resultado.join('')//Retorna o valor em string
}
const preco = 29.99
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela} .`)