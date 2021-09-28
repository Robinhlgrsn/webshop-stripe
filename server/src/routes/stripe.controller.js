const fs = require("fs");
require("dotenv").config(".env");

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const stripe = require("stripe")(STRIPE_SECRET_KEY);
require("dotenv").config(".env");

async function createCheckoutSession(req, res) {
  const session = await stripe.checkout.sessions.create({
    line_items: req.body.lineItems,
    payment_method_types: ["card"],
    mode: "payment",
    success_url: `http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `http://localhost:3000/`,
  });
  res.status(201).json({ id: session.id });
}

async function verifyPurchase(req, res) {
  const sessionId = req.body.sessionId;
  const session = await stripe.checkout.sessions.retrieve(sessionId);
  //här sparar vi i JSON fil
  if (session.payment_status === "paid") {
    let data = getJsonData();
    const orderNumber = session.payment_intent;
    const exists = data.find((order) => order.orderNumber === orderNumber);
    if (!exists) {
      addDataToJson(data, {
        orderNumber: session.payment_intent,
        customer: session.customer_details,
        totalPrice: session.amount_total / 100,
        currency: session.currency,
      });
      return res.status(200).json({ paid: true });
    } else {
      return res.status(400).json({ paid: false });
    }
  }
}

function getJsonData() {
  let rawdata = fs.readFileSync("./src/data/orderData.json");
  return JSON.parse(rawdata);
}

function addDataToJson(jsonData, objectToAdd) {
  jsonData.push(objectToAdd);
  fs.writeFileSync("./src/data/orderData.json", JSON.stringify(jsonData));
}

module.exports = {
  createCheckoutSession,
  verifyPurchase,
};
