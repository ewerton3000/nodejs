//Testando função IIFE com objeto

(function livro(nome,descricao,edicao,editora){
   let  objeto ={
        nome:nome,
        descricao:descricao,
        edicao: edicao,
        editora: editora
    }
    console.log(`o nome do livro é ${nome}`)
    console.log(`Descrição: ${descricao}`)
    console.log(`Edição : ${edicao} °`)
    console.log(`Editora : ${editora}`)
})("O mar negro","Historias assustadores no mar negro",1,"SHUESHIA")
