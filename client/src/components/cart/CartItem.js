import React from "react";
import Button from '../UI/Button';

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
        <div className="flex flex-1 justify-end mx-4 items-center">
        <Button onClick={() => {props.onUpdatedCart({ id:props.id, type: 'subtract' })}}>
        <p className="w-6 flex justify-center">-</p>
        </Button>
          <div className="mx-4">{props.quantity}</div>
          <Button onClick={() => {props.onUpdatedCart({ id:props.id, type: 'add' })}}>
          <p className="w-6 flex justify-center">+</p>
          </Button>
        </div>
        <div className="flex flex-1 justify-end items-center">
          <div>{props.price}$</div>
        </div>
      </div>
    </div>
  );
}
