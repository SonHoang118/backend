const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config()

const JWT = {
    generalAccessToken: async (payload)=>{
        var access_token = await jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '3m'})
        return access_token
    },
    generalRefreshToken: async (payload)=>{
        var refresh_token = await jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '365d'})
        return refresh_token
    }
}

module.exports = JWT