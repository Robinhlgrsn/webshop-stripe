const express = require('express')
const fs = require('fs');
const stripe = require("stripe")("sk_test_51Jc3YTL7WEpn3e735SB2CjkcWEm2Ae7KbYJTWi1hJwonwZb2hFJzOSt5PJZ9t8LgHS9oY8kqGHVYC7nogTuO7P2B00huvKr1GW")
const app = express()
const port = 8000
const env = require('dotenv');
env.config('.env')



const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY
console.log(STRIPE_SECRET_KEY)

const cors = require('cors');

app.use(express.json());
app.use(cors());


app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({  
      line_items: req.body.lineItems,
      payment_method_types: [
        'card',
      ],
      mode: 'payment',
      success_url: `http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `http://localhost:3000/`,
    });
    res.status(201).json({ id: session.id });
  });

app.post('/create-checkout-session/verify', async (req, res) => {
  const sessionId = req.body.sessionId
  const session = await stripe.checkout.sessions.retrieve(sessionId);
  //här sparar vi i JSON fil
  if (session.payment_status === 'paid') {
    let rawdata = fs.readFileSync('orderData.json');
    let history = JSON.parse(rawdata);
    const orderNumber = session.payment_intent
    const exists = history.find(order => order.orderNumber === orderNumber);
      if (!exists) {
        history.push({orderNumber: session.payment_intent, customer: session.customer_details})
        fs.writeFileSync('orderData.json', JSON.stringify(history));
        return res.status(200).json({ paid: true })
      } 
  } else {
    return res.status(400).json({ paid: false })
  }
});
  

app.listen(port, () =>{
    console.log(`App listening at http://localhost:${port}`)
})