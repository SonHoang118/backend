const User = require("../Models/userModel")

const userController = {
    getAllUser: async (req, res)=>{
        try{
            users = await User.find()
            res.status(200).json(users)
        }
        catch(e){
            res.status(500).json(e)
        }
    },
    deleteUser: async (req, res)=>{
        try{
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json({
                mes: 'delete user successful'
            })
        }
        catch(err){
            res.status(500).json(e)
        }
    }
}

module.exports= userController