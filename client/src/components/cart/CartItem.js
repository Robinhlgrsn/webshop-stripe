import React from "react";

export default function CartItem(props) {
  return (
    <div className="container mx-auto flex justify-between text-4xl items-center">
      <div className="flex  items-center h-32">
        <img src={props.img} alt="" className="object-contain h-full w-full" />
        <div className="px-8 ">{props.name}</div>
      </div>
      <div className="flex  h-full">
        <button>-</button>
        <div className="px-4">{props.quantity}</div>
        <button>+</button>
        <div className="px-8">{props.price}</div>
      </div>
    </div>
  );
}
