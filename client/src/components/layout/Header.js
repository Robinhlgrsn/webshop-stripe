import React, {useState} from 'react'
import { AiOutlineShopping } from "react-icons/ai";
import { useHistory } from "react-router";
import {formatPrice} from '../../handlers/currency'
import Button from '../UI/Button';


const Header = (props) => {
  const history = useHistory();
  const sumQuantity = () => {
    let cart = props.cartData.items;
    let quantity = [0];
    cart.forEach(product => {
      quantity.push(product.quantity)
    });
    let totalQuantity = quantity.reduce((a, b) => a + b)
    return totalQuantity
  }

  return (
    <div className="w-full shadow-lg">
      <header className="flex items-center container mx-auto py-4">        
        <div onClick={() => { history.push('/')} } className={`flex-auto cursor-pointer text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-green-50`}>
          StripeShop
        </div>
        <div>
          <Button onClick={() => { history.push('/cart') }}>
              <AiOutlineShopping className="mx-1 text-2xl" />
              <div className="mx-1">{formatPrice(props.cartData.totalAmount)}</div>
              <div className="px-2 mx-1 text-center rounded-full bg-gray-50 text-gray-900">{sumQuantity()}</div>
          </Button>
        </div>
      </header>
    </div>
  )
}
export default Header;

