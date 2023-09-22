module.exports = app =>{
    const{existsOrError , notExistsOrError} = app.api.validation
     //Método para o INSERT E UPDATE

    const save = (req , res)=> {
        const category = {... req.body} //Pegando os dados do BODY(corpo)
        if(req.params.id) category.id = req.params.id 
    
    try{
        existsOrError(category.name, 'Nome não informado')
    }catch(msg) {
        return res.status(400).send(msg)
    } 
    //Update
    if(category.id){
        app.db('categories')//Selecionando(select) a tabela categories
        .update(category) //Update na tabela categories
        .where({id: category.id}) //Onde  a ID informada é igual a category.id
        .then(_ => res.status(204).send())//Mensagem de confirmação com status 204
        .catch(err => res.status(500).send(err))//mensagem de erro
    }
    //Insert
    else{
        app.db('categories')//Selecionando(select) a tabela categories
        .insert(category)//comando para o INSERT
        .then(_ => res.status(204).send()) //Mensagem de confirmação com status 204
        .catch(err => res.status(500).send(err))//mensagem de erro
    }
    
}
      //Método DELETE
   const remove = async(req , res) =>{
    try{
        existsOrError(req.params.id , 'Código da Categoria não informado')//Mensegem de erro

        const subcategory = await app.db('categories') //Consulta na TABELA categories
         .where({parentId: req.params.id}) //Comparando ONDE o Id da URL com do DB
         notExistsOrError(subcategory, 'Categoria possui subcategorias.') //Mensagem de erro

         const articles = await app.db('articles')//Consulta na TABELA articles
         .where({categoryId: req.params.id})//Onde(where) category.id = req.params.id
         notExistsOrError(articles , 'Categoria possui artigos.') // Mensagem de erro

         const rowsDeleted = await app.db('categories')//Consulta na TABELA categories
         .where({id: req.params.id}).del()//ONDE(where) id recebe id da URL(req.params.id)
         existsOrError(rowsDeleted, 'Categoria não foi encontrada')//Mensagem de erro
         
         res.status(204).send() //Mensagem de confirmação com status 204
    }catch(msg){
      res.status(400).send(msg)//mensagem de erro
    }
   }
   //Criando  o caminho da Categoria 
   const withPath = categories =>{
    const getParent = (categories , parentId)=>{
        const parent = categories.filter(parent => parent.id === parentId)
        return parent.length ? parent[0] : null
    }
    //Mostrando o caminho da categoria
    const categoriesWithPath = categories.map(category =>{
        let path = category.name
        let parent = getParent(categories, category.parentId)
        
        //Enquanto o parent existir
        while(parent){
            path =`${parent.name} > ${path}`
            parent = getParent(categories , parent.parentId)
        }

        return{...category , path}
    })
    //Ordenando as categorias em ORDEM ALFABÉTICA
    categoriesWithPath.sort((a,b) =>{
        if(a.path < b.path) return -1
        if(a.path > b.path) return 1
        return 0
    })
    return categoriesWithPath 
   }
    //Para retornar as categorias
   const get = (req , res)=>{
     app.db('categories')
     .then(categories => res.json(withPath(categories)))
     .catch(err => res.status(500).send(err))
   }
   //Puxando pela ID
   const getById = (req ,res) =>{
      app.db('categories')
         .where({id: req.params.id})
         .first()
         .then(category => res.json(category))
         .catch(err => res.status(500).send(err))
   }
   return{save,remove,get,getById}
}