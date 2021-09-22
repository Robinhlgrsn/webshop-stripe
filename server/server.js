const express = require('express')
const app = express()
const port = 8000
const env = require('dotenv');
env.config('.env')

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY
console.log(STRIPE_SECRET_KEY)

const cors = require('cors')
app.use(cors())

app.get('/', (req,res) =>{
    res.send('Hallo halllo')
})
app.listen(port, () =>{
    console.log(`App listening at http://localhost:${port}`)
})