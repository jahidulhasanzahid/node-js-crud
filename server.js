require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/productRoute')
const app = express()

const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// routes
app.get('/',(req, res) => {
    res.send('Hello Node API')
})

app.use('/api/products', productRoute)

// connect database
mongoose.set("strictQuery", false)
mongoose.connect(MONGO_URL).then(() => {
    console.log('Database is connected!')
    app.listen(3000, ()=>{
        console.log(`Node API is running ${3000}`)
    })
}).catch((error) => {
    console.log(error)
})