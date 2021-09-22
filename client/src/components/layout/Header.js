import React from 'react'
import Button from '../UI/Button';
import { AiOutlineShopping } from "react-icons/ai";

const Header = () => {
  return (
    <div className="w-full shadow-lg">
      <header className="flex items-center container mx-auto py-4">        
        <div className="flex-auto text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-green-50">
          StripeShop
        </div>
        <div>
          <Button>
              <AiOutlineShopping className="mx-1 text-2xl" />
              <div className="mx-1">1050:-</div>
              <div className="px-2 mx-1 text-center rounded-full bg-gray-50 text-gray-900">3</div>
          </Button>
        </div>
      </header>
    </div>
  )
}
export default Header;

