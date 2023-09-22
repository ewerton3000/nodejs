//Importando o arquivo admin.js 
const admin = require('./admin')

//Exportando 
module.exports = app =>{
//Rotas das URLS
//Rota de autenticação
    app.post('/signup',app.api.user.save)
    app.post('/signin',app.api.auth.signin)
    //app.post('/validateToken', app.api.auth.validateToken)

    app.route('/users') //Rotas da TABELA USERS
    .all(app.config.passport.authenticate()) //Validação do TOKEN do USUÁRIO
    .post(admin(app.api.user.save)) //INSERT ou UPDATE
    .get(admin(app.api.user.get)) //GET 
     
    //Rotas por id 
    app.route('/users/:id')
    .all(app.config.passport.authenticate()) //Validação do TOKEN do USUÁRIO
    .put(admin(app.api.user.save)) //INSERT ou UPDATE
    .get(admin(app.api.user.getById))//GETById
    .delete(admin(app.api.user.remove))// REMOVE OU DELETE

    //rotas de categorias(category)
    app.route('/categories')
    .all(app.config.passport.authenticate()) //Validação do TOKEN do USUÁRIO
    .get(admin(app.api.category.get)) //Consulta
    .post(admin(app.api.category.save))//INSERT e UPDATE
     
//Cuidado com a ordem! Tem que vir antes de ('categories/:id')
   app.route('/categories/tree')
   .all(app.config.passport.authenticate()) //Validação do TOKEN do USUÁRIO
   .get(admin(app.api.category.getTree)) //Mostrando a lista de  categorias

    //Rotas de categorias por id
   
    app.route('/categories/:id')
    .all(app.config.passport.authenticate()) //Validação do TOKEN do USUÁRIO
    .get(app.api.category.getById)//Consulta por id
    .put(app.api.category.save)//Atualiza 
    .delete(app.api.category.remove)//Delete  
     
    //Rotas de articles
    app.route('/articles')
       .all(app.config.passport.authenticate()) //Validação do TOKEN do USUÁRIO
       .get(admin(app.api.article.get))//CONSULTA
       .post(admin(app.api.article.save))//INSERT e UPDATE

       //Rotas para articles por id
       app.route('/articles/:id')
          .all(app.config.passport.authenticate()) //Validação do TOKEN do USUÁRIO
          .get(app.api.article.getById) //CONSULTA  POR ID
          .put(admin(app.api.article.save))//UPDATE
          .delete(admin(app.api.article.remove)) //DELETE
           
          //Rota para buscar o artigos da categoria
          app.route('/categories/:id/articles')
          .all(app.config.passport.authenticate()) //Validação do TOKEN do USUÁRIO
          .get(app.api.article.getByCategory)

        //Rota para atulaizar as ESTATISTICAS PELO MONGODB
        app.route('/stats')
        .all(app.config.passport.authenticate()) //Validação do TOKEN do USUÁRIO
           .get(app.api.stat.get)  
}