const express = require('express')
const cors = require('cors');
const stripeRouter = require('./routes/stripe.router');

const app = express()
const port = 8000

app.use(express.json());
app.use(cors());

app.use(stripeRouter)

app.listen(port, () =>{
    console.log(`App listening at http://localhost:${port}`);
});
