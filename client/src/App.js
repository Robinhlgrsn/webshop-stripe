import { useState } from 'react'
import Products from './components/products/Products'
import Header from "./components/layout/Header";
import Layout from "./components/layout/Layout";
import productData from './data/productData'
import Cart from './components/cart/Cart'

function updateCart(cart, product) {
  const updatedCart = cart.items.concat(product)
  console.log(updatedCart)
  return Object.assign({}, cart, { items: updatedCart})
}

function updateQuantity(match) {

}

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cart, setCart] = useState({ items: [], totalAmount: 0 });

  const addProductToCart = (id) => {
    let productToAdd = productData.find(product => product.id === id);
    let match = cart.items.find(product => productToAdd.id === product.id)

      if(match) {
        updateQuantity(productToAdd)
      } else {
        setCart(updateCart(cart, productToAdd));
      }
  }

  console.log(cart)
  const toggleCart = () => setCartIsOpen(!cartIsOpen);

  return (
    <Layout>
      <Header onToggleCart={toggleCart} />
      { !cartIsOpen ? <Products onAddProduct={addProductToCart} productData={productData} /> : <Cart/> }
    </Layout>
  );
}

export default App;
