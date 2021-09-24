import React, { useState, useEffect } from "react";
import { formatPrice } from "../../handler/currency";
import CartItem from "./CartItem";
import Button from "../UI/Button";
import { useStripe, CardElement } from "@stripe/react-stripe-js";

export default function Cart(props) {
  const stripe = useStripe()

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      alert("Order placed! You will receive an email confirmation.");
    }
    if (query.get("canceled")) {
      alert(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  const items = props.cartData.items.map((item) => {
    return {
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }
  });


  if (props.cartData.items.length <= 0) {
    return (
    <div className="container mx-auto flex flex-col mt-10 shadow-lg p-4">
      <header className="text-center text-2xl font-bold py-4">Cart is empty!</header>
    </div>
    )
  }

  const sendReq = async() => {
    const response = await fetch('http://localhost:8000/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        lineItems: Object.values(items),
      })
    })
    const {id} = await response.json();
    stripe.redirectToCheckout({ sessionId: id })
    console.log(id)
  }

  return (
    <div className="container mx-auto flex flex-col mt-10 shadow-lg p-4">
      <header className="text-center text-2xl font-bold py-4">Cart</header>
      <CardElement/>
      {props.cartData.items.map((item) => (
        <div key={item.name}>
          <CartItem
            img={item.img}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
          />
        </div>
      ))}
      <span className="w-full divide-y-2 divide-fuchsia-300 py-2">
        <div></div>
        <div></div>
      </span>

      <div className="flex justify-between text-4xl py-4">
        <div className="">Total price</div>
        <div className="">{formatPrice(props.cartData.totalAmount)}$</div>
      </div>
      <Button onClick={sendReq}  className="self-center">
        CheckOut
      </Button>
    </div>
  );
}
