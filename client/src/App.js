import { useState, useEffect } from 'react'
import Products from './components/products/Products'
import Success from './pages/Success';
import { Switch, Route } from 'react-router-dom';
import Header from "./components/layout/Header";
import Layout from "./components/layout/Layout";
import productData from './data/productData'
import Cart from './components/cart/Cart'
import { setLocalstorage, getLocalstorage } from './handlers/localstorage'

function App() {
  const [cart, setCart] = useState({ items: [], totalAmount: 0 });
  const savedCart = getLocalstorage();

  useEffect(() => {
    if (savedCart !== null) {
      setCart(savedCart)
    }
  }, [])


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
      setLocalstorage({...cart, items: products, totalAmount: total})
    } else {
      setCart({ ...cart, items: updatedCart, totalAmount: total});
      setLocalstorage({...cart, items: updatedCart, totalAmount: total})
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
          <Success onCheckout={clearCart} />
        </Route>
      </Layout>
    </Switch>
  );
}

export default App;
