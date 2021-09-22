import React, { useState } from "react";
import CartItem from "./CartItem";
import products from "../../data/products";
import Button from "../UI/Button";
export default function Cart() {
  const [totalPriceInCart, settotalPriceInCart] = useState(0);
  /* Function som räknar det totala priset för produkterna i varukorgen */
  const calcTotalPrice = () => {
    let price;
    let quantity;
    let totalPriceItem;

    let array = [];
    products.forEach((item) => {
      price = item.price;
      quantity = item.quantity;
      totalPriceItem = quantity * price;
      array.push(totalPriceItem);
    });
    let total = array.reduce((a, b) => a + b);
    settotalPriceInCart(total);
    console.log(total);
  };
  return (
    <div className="container mx-auto flex flex-col">
      {products.map((item) => (
        <div key={item.name}>
          <CartItem
            imgUrl={item.imgUrl}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
          />
        </div>
      ))}

      <div className=" flex justify-between text-4xl">
        <div>Total price</div>
        <div className="px-8">{totalPriceInCart}:-</div>
      </div>
      <Button>CheckOut</Button>
    </div>
  );
}
