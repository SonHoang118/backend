const express = require('express')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const routes = require('./Routes')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT
app.use(bodyParser.json())
routes(app)



mongoose.connect(process.env.MONGO_DB)
    .then(()=>{
        console.log('connect database successful')
    })
    .catch((err)=>{
        console.log('ERROR: ',err)
    })



app.listen(port, ()=>{
    console.log('server is running on port: ',port)
})