
const authRouter = require('./authRouter')
const userRouter = require('./userRouter')

const routes = (app)=>{
    app.use('/v1/api/auth', authRouter)
    app.use('/v1/api/user', userRouter)
}


module.exports = routes