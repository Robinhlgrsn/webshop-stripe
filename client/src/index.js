import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51Jc3YTL7WEpn3e73oCXBMlM0vm3JlZAxzafuAXjnk2lmp8EvXL7ee8k6iucQlBeLE2CyUzdokmc0vvKOGWXZgAy600AxOre3VM');

ReactDOM.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <App/>
    </Elements>
  </React.StrictMode>,
  document.getElementById('root')
);

