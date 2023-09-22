//Validação de dados
//Exportando as FUNÇÕES com module.exports

module.exports = app =>{
//Caso o validação  Exista ou fique vazia
function existsOrError(value, msg){
    if(!value) throw msg //Se o valor não existir passa uma mensagem
    if(Array.isArray(value) && value.length === 0) throw msg//Se o valor é um array e se o valor for vazio
    if(typeof value === 'string' && !value.trim()) throw msg//Se o valor é string e se ele está vazio
}

//Após a validação o valor não exista
function notExistsOrError(value , msg){
    try{
        existsOrError(value, msg) //pegando a mensagem com o try
    }  
    catch(msg){  //Sem erros o catch deixa passar
        return
    }
    throw msg //Envia a mensagem de erro
}
//Se o valor for igual 
function equalsOrError(valueA, valueB, msg){
    if(valueA !== valueB) throw msg //o throw lança a mensagem
}
 
 return{existsOrError ,notExistsOrError,equalsOrError}
}

