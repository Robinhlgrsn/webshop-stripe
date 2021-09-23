import React from "react";

export default function CartItem(props) {
  return (
    <div className="container mx-auto flex text-4xl items-center py-2">
      <div className="flex flex-1 items-center ">
          <div className="h-32 w-32">
            <img src={props.img} alt={props.name} className="object-cover h-full w-full" />
          </div>
        <div className="px-8 ">{props.name}</div>
      </div>
      <div className="flex flex-1 justify-end h-full">
        <div className="flex flex-1 justify-end">
          <button>-</button>
          <div className="px-4">{props.quantity}</div>
          <button>+</button>
        </div>
        <div className="flex flex-1 justify-end">
          <div>{props.price}$</div>
        </div>
      </div>
    </div>
  );
}
