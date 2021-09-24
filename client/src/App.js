import { useState } from 'react'
import Products from './components/products/Products'
import Header from "./components/layout/Header";
import Layout from "./components/layout/Layout";
import productData from './data/productData'
import Cart from './components/cart/Cart'

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cart, setCart] = useState({ items: [], totalAmount: 0 });
  
  
  const addProductToCart = (item) => {
    let existingIndex = cart.items.findIndex(product => item.id === product.id)
    const updatedCart = cart.items.concat(item)

    let totalPriceItem;
    let pricesArray = [];
    updatedCart.forEach((item) => {
      totalPriceItem = item.quantity * item.price;
      pricesArray.push(totalPriceItem);
    });
    let total = pricesArray.reduce((a, b) => a + b, 0);

    if(existingIndex !== -1) {
      let products = [...cart.items]
      let product = products[existingIndex]
      product.quantity++
      setCart({...cart, items: products, totalAmount: total})
    } else {
      setCart({ ...cart, items: updatedCart, totalAmount: total});
    }
  }
  
  const toggleCart = () => setCartIsOpen(!cartIsOpen);

  console.log(cart)

  return (
    <Layout>
      <Header cartData={cart} onToggleCart={toggleCart} />
      { !cartIsOpen ? 
        <Products
          onAddProduct={addProductToCart}
          productData={productData} /> :
        <Cart toggle={toggleCart} cartData={cart} /> 
      }
    </Layout>
  );
}

export default App;
