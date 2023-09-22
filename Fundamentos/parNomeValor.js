const saudacao = 'Opa'// contexto léxico 1

function exec() {
    const saudacao ='Falaaa' //Contexto léxico 2
    return saudacao
}

//Objetos são grupos alinhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco:{
        logradouro: 'Rua Muito Legal',
        numero:123
    }
}
console.log(saudacao)
console.log(exec())//Executando a função
console.log(cliente)//Executando o objeto