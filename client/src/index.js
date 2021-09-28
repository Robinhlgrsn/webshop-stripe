import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import './style.css';
import App from './App'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51Jc3YTL7WEpn3e73oCXBMlM0vm3JlZAxzafuAXjnk2lmp8EvXL7ee8k6iucQlBeLE2CyUzdokmc0vvKOGWXZgAy600AxOre3VM');

ReactDOM.render(
    <Elements stripe={stripePromise}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Elements>,
  document.getElementById('root')
);

