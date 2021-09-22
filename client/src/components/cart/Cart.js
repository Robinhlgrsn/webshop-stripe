import React, { useState } from "react";
import CartItem from "./CartItem";
const testData = [
  {
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Shoe",
    quantity: "2",
    price: "500",
  },
  {
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Hat",
    quantity: "1",
    price: "500",
  },
  {
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    name: "Cap",
    quantity: "2",
    price: "500",
  },
];
export default function Cart() {
  const [totalAmount, setTotalAmount] = useState(0);

  const calcTotalPrice = () => {
    let price;
    let quantity;
    let totalPriceItem;

    let array = [];
    testData.forEach((item) => {
      price = item.price;
      quantity = item.quantity;
      totalPriceItem = quantity * price;
      array.push(totalPriceItem);
    });
    let total = array.reduce((a, b) => a + b);
    setTotalAmount(total);
    console.log(total);
  };
  return (
    <div className="container mx-auto bg-green-600 flex flex-col">
      {testData.map((item) => (
        <div key={item.name}>
          <CartItem
            img={item.img}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
          />
        </div>
      ))}

      <div className=" bg-green-600 flex justify-between text-4xl">
        <div className=" bg-green-600">Total price</div>
        <div className=" bg-red-600 px-8">{totalAmount}:-</div>
      </div>
      <button onClick={calcTotalPrice} className="self-center">
        CheckOut
      </button>
    </div>
  );
}
