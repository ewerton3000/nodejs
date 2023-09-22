const{ authSecret } = require('../.env') // Puxando o arquivo EN
//Dependências
const passport = require('passport')
const passportJwt = require('passport-jwt')
const {Strategy, ExtractJwt } = passportJwt

module.exports = app => {
   const params = {
     secretOrKey: authSecret, //SecretOrKey recebendo o TOKEN SECRETO
     jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()//Puxando o TOKEN de HEADERS(No POSTMAN do lado do BODY)
   }
   const strategy = new Strategy(params, (payload, done) => {
    app.db('users')
       .where({ id: payload.id })
       .first()
       .then(user => done(null, user ? { ...payload } : false))
       .catch(err => done(err, false))
   })

   passport.use(strategy)

   return {
    authenticate: () => passport.authenticate('jwt', { session: false })
   }

}