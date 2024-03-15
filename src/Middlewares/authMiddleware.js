const jwt = require('jsonwebtoken')
const authMiddleware = {
    deleteUser : async (req, res, next)=>{
        // const token = req.header.token
        const token = req.headers.token
        try{
            if (token){
                const access_token = token.split(" ")[1]
                jwt.verify(access_token, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
                    if (err){
                        return res.status(403).json({
                            err,
                            message: "Token is not valid"
                        })
                    }
                    if (user.id !== req.params.id && !user.isAdmin){
                        return res.status(403).json({
                            err,
                            message: "You alowd delete user"
                        })
                    }
                    next()
                })
            }
            else{
                console.log(req.headers.token)
                return res.status(401).json("You're not authenticated")
            }
        }
        catch(err){
            return err
        }
    }
}

module.exports = authMiddleware