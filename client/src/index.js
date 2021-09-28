import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./style.css";
import App from "./App";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51Jblj9CX6tkCxnbcVqNnJkUpBsGU3WolUnKW0zMM7U8RBWOLu2p2WuBbts0Q21ysVDiwb6indLpIfSz9loNsw3js00zem4AjyI"
);

ReactDOM.render(
  <Elements stripe={stripePromise}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Elements>,
  document.getElementById("root")
);
