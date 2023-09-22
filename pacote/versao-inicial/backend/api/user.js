//Encryptando uma senha
const bcrypt = require('bcrypt-nodejs')
//Importando a middleware
module.exports = app => {
    //Puxando as FUNÇÕES do arquivo VALIDATION dentro da PASTA API
    const {existsOrError, notExistsOrError ,equalsOrError} = app.api.validation

    //encriptando a senha enviada
    const encryptPassword = password =>{ 
     const salt =  bcrypt.genSaltSync(10)
     return bcrypt.hashSync(password, salt)
    }
    //Middleware para salvar e atualizar
    const save = async(req , res) => {
        const user = {...req.body}
        if(req.params.id) user.id = req.params.id
        try{
            //Mensagens de erro para cada tipo de erro
            existsOrError(user.name,'Nome não Informado')
            existsOrError(user.email, 'E-mail não informado')
            existsOrError(user.password, 'Senha não informada')
            existsOrError(user.confirmPassword,'Confirmação de Senha inválida')
            equalsOrError(user.password, user.confirmPassword,
                'Senhas não conferem')
                //Confirmar se o usuário ja está cadastrado no Banco de dados
                 const userFromDB = await app.db('users')
                .where({ email: user.email }).first()//Pegando o primeiro registro com o filtro
                if(!user.id){ //Se o id não for informado
                notExistsOrError(userFromDB, 'Usuario já cadastrado') //Mostrando a mensagem
                }
        } catch(msg){
            //Retornando a mensagem de erro correspondente
            return res.status(400).send(msg) 
        }
        user.password = encryptPassword(user.password) //Encriptando a senha
        delete user.confirmPassword //Deletando
         
        //Se a função id.user for puxada Usa o UPDATE
        if(user.id){
             app.db('users')
                .update(user)
                .where({id: user.id})
                .then(_ => res.status(204).send("Dados inseridos com sucesso"))
                .catch(err => res.status(500).send(err))
        }
        //Senão o Insert será usado 
        else{
            app.db('users')
               .insert(user)
               .then(_ => res.status(204).send())
               .catch(err => res.status(500).send(err))          
        }

    }
    //Consulta no BD
    const get = (req ,res) =>{
        app.db('users')
           .select('id','name','email','admin') //Selecionando os campos
           .then(users => res.json(users)) //Com os dados corretos ele envia uma resposta em JSON com os dados
           .catch(err => res.status(500).send(err))//Mostrando o erro status(500)
    }
    //Consulta por id
    const getById = (req ,res) =>{
        app.db('users')
           .select('id','name','email','admin') //Selecionando os campos
           .where({id: req.params.id}) //Pegando a id digitada da URL
           .first() //Mostrando o primeiro da lista
           .then(user => res.json(user)) //Com os dados corretos ele envia uma resposta em JSON com os dados
           .catch(err => res.status(500).send(err))//Mostrando o erro status(500)
    }
    return {save ,get,getById} //Retornando os métodos 
}