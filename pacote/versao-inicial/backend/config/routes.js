//Exportando 
module.exports = app =>{
    app.route('/users') //Rotas das URL
    .post(app.api.user.save) //INSERT ou UPDATE
    .get(app.api.user.get) //GET
     
    //Rotas por id 
    app.route('/users/:id')
       .put(app.api.user.save) //INSERT ou UPDATE
       .get(app.api.user.getById)//GETById

    //rotas de categorias(category)
    app.route('/categories')
    .get(app.api.category.get) //Consulta
    .post(app.api.category.save)//INSERT e UPDATE
     
    //Rotas de categorias por id
    app.route('/categories/:id')
    .get(app.api.category.getById)//Consulta por id
    .put(app.api.category.save)//Atualiza 
    .delete(app.api.category.remove)//Delete
}