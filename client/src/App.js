import { useState, useEffect } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom';
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";
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
  let location = useLocation();

  useEffect(() => {
    if (savedCart !== null) {
      setCart(savedCart)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const addProductToCart = (item) => {
    const existingIndex = cart.items.findIndex(product => item.id === product.id);
    if(existingIndex !== -1) {
      const products = updateProductQuantity(cart, existingIndex, item.type);
      const totalAmount = calcTotalAmount(products);
      setCart({ ...cart, items: products, totalAmount });
      setLocalstorage({ ...cart, items: products, totalAmount });
    } else {
      const updatedCart = cart.items.concat(item);
      const totalAmount = calcTotalAmount(updatedCart);
      setCart({ ...cart, items: updatedCart, totalAmount});
      setLocalstorage({ ...cart, items: updatedCart, totalAmount });
    }
  }

  const clearCart = () => {
    setCart({ items: [], totalAmount: 0 })
  }

  return (
    <Layout>
      <Header cartData={cart} />
      <div className="relative">
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={300}>
              <div className="absolute inset-0">
                <Switch location={location}>
                  <Route path="/" exact>
                      <Products onAddProduct={addProductToCart} productData={productData} /> 
                  </Route>
                  <Route path="/cart">
                    <Cart cartData={cart} onUpdatedCart={addProductToCart} /> 
                  </Route>
                  <Route path="/success">
                    <Success onClearCart={clearCart} />
                  </Route>
                </Switch>
              </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </Layout>
  );
}

export default App;
