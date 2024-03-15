
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    user_name: {
        type: String,
        requied: true,
        minLength: 6,
        maxLength: 20
    },
    password: {
        type: String,
        requied: true
    },
    is_admin: {
        type: String,
        default: false
    }
})

const User = new mongoose.model('User', userSchema)

module.exports = User