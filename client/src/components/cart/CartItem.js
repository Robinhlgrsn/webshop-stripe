import React from "react";

export default function CartItem(props) {
  return (
    <div className="container mx-auto flex justify-between text-4xl items-center">
      <div className="flex  items-center ">
        <div className="h-32 w-32">
          <img
            src={props.imgUrl}
            alt=""
            className="object-cover h-full w-full"
          />
        </div>
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
