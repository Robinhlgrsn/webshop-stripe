/* Stripe */
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51Jblj9CX6tkCxnbcVqNnJkUpBsGU3WolUnKW0zMM7U8RBWOLu2p2WuBbts0Q21ysVDiwb6indLpIfSz9loNsw3js00zem4AjyI');

/* MakeRequest */

/* async function makeRequest(url, method, body) {
  try {
    const response = await fetch(url, {
      headers: { "Content-type": "application/json" },
      method,
      body: JSON.stringify(body),
    });
    const result = await response.json();
    return result;

  } catch (err) {
    console.error("err");
  }
} */
/* const test = async () =>{
  const response = await makeRequest(`http://localhost:8000`)
  console.log(response)
} */

function App() {
 
  return (
    <div className="text-6xl">
      <h1>Hello</h1>
     
     
    </div>
  );
}

export default App;
