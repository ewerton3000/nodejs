//Vai retornar o próximo valor de id quando executar o objeto e disparar a função id()
const sequence = {
    _id : 1,
    get id() {return this._id++} //Irá mostrar os ids pelo incremento
}

//objeto
const produtos = {}



//Função para salvar
function salvarProduto(produto){
    //Se a id do produto não estiver setada
    if(!produto.id) produto.id = sequence.id 
    produtos[produto.id] = produto //A id produto será inserida dentro do objeto produto que é o parametro desta função
    return produto //retorna o produto

}

//Função para pegar o produto pela id
function getProduto(id){
    return produtos[id] || {} //Senão retornar um produto ele retorna vazio
}

//Função para pegar todos os produtos
function getProdutos(){
    //Retornando todos os valores do objeto produto
    return Object.values(produtos)

}

//Função para excluir produtos pela id
function excluirProduto(id){
    const produto = produtos[id] //Produto recebe a id do produto selecionado
    delete produtos[id] //Para deletar o produto
    return produto //Retorna os valores do produto que foi excluido
}
//Importando as funções pelo module.exports para serem executadas
module.exports ={salvarProduto , getProduto ,getProdutos , excluirProduto}