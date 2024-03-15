const User = require("../Models/userModel")
const JWT = require("../Services/JWT")
const userService = require("../Services/userService")
const bcrypt = require('bcrypt')

const authController = {
    rigisterUser: async (req, res) => {
        const { user_name, password, confirm_password } = req.body
        try {
            if (!user_name || !password || !confirm_password) {
                return res.status(401).json({
                    message: 'Input is require'
                })
            } else if (password !== confirm_password) {
                return res.status(401).json({
                    message: 'password is not same'
                })
            }
            const userCheck = await User.findOne({ user_name })
            if (userCheck !== null) {
                return res.status(401).json({
                    message: 'user already exists'
                })
            }
            const createUser = await userService.createUser({ user_name, password })
            return res.status(200).json({
                result: "Register success",
                data: req.body
            })
        }
        catch (err) {
            return res.status(500).json(err)
        }
    },
    loginUser: async (req, res) => {
        try {
            const { user_name, password } = req.body
            if (!user_name || !password) {
                return res.status(401).json({
                    message: 'Input is required'
                })
            }
            const userCheck = await User.findOne({ user_name })
            if (!userCheck) {
                return res.status(401).json({
                    message: 'User not found'
                })
            }
            const passwordCheck = await bcrypt.compare(password, userCheck.password)
            if (!passwordCheck) {
                return res.status(401).json({
                    message: 'password wrong'
                })
            }
            const access_token = await JWT.generalAccessToken({ id: userCheck.id, is_admin: userCheck.is_admin })
            // res.send("Login successful")
            console.log(access_token)
            res.status(200).json({
                message: 'Login successful',
                access_token
            })
        }
        catch (err) {
            return res.status(500).json(err)
        }
    }
}


module.exports = authController