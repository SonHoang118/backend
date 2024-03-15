const User = require("../Models/userModel")
const bcrypt = require('bcrypt')

const userService = {
    createUser: (userData) => {
        return new Promise( async (resolve, reject) => {
            const { user_name, password } = userData
            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(password, salt)
            const newUser = User.create({
                user_name,
                password: hash
            })
            if (newUser){
                resolve(() => {
                    return newUser
                })
            }
            reject((err) => {
                return err
            })
        })
    }
}
module.exports = userService