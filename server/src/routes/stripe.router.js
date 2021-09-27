const express = require('express');
const { createCheckoutSession, verifyPurchase } = require('./stripe.controller')
const stripeRouter = express.Router();

stripeRouter.post('/create-checkout-session', createCheckoutSession);
stripeRouter.post('/create-checkout-session/verify', verifyPurchase);

module.exports = stripeRouter;