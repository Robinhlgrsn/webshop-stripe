import { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom';
import Products from './components/products/Products'
import Header from "./components/layout/Header";
import Layout from "./components/layout/Layout";
import productData from './data/productData'
import Success from './pages/Success';
import Cart from './components/cart/Cart'
import { setLocalstorage, getLocalstorage } from './handlers/localstorage';
import { calcTotalAmount, updateProductQuantity } from './handlers/cart';

function App() {
  const [cart, setCart] = useState({ items: [], totalAmount: 0 });
  const savedCart = getLocalstorage();

  useEffect(() => {
    if (savedCart !== null) {
      setCart(savedCart)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const addProductToCart = (item) => {
    const existingIndex = cart.items.findIndex(product => item.id === product.id);
    const updatedCart = cart.items.concat(item);
    const totalAmount = calcTotalAmount(updatedCart);
    
    if(existingIndex !== -1) {
      const products = updateProductQuantity(cart, existingIndex);
      setCart({ ...cart, items: products, totalAmount });
      setLocalstorage({ ...cart, items: products, totalAmount });
    } else {
      setCart({ ...cart, items: updatedCart, totalAmount});
      setLocalstorage({ ...cart, items: updatedCart, totalAmount });
    }
  }

  const clearCart = () => {
    setCart({ items: [], totalAmount: 0 })
  }

  return (
    <Switch>
      <Layout>
        <Header cartData={cart} />
        <Route path="/" exact>
          <Products onAddProduct={addProductToCart} productData={productData} /> 
        </Route>
        <Route path="/cart">
          <Cart cartData={cart} /> 
        </Route>
        <Route path="/success">
          <Success onClearCart={clearCart} />
        </Route>
      </Layout>
    </Switch>
  );
}

export default App;
