import React, { useEffect } from 'react'
import { useLocation } from 'react-router'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Success = (props) => {
  let query = useQuery()
  query.get('session_id')

  useEffect(() => {
    const verify = async () => {
      const response = await fetch('http://localhost:8000/create-checkout-session/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sessionId: query.get('session_id')}),
      });

      const data = await response.json();
      console.log(data);
      localStorage.clear()
      props.onClearCart()
    }
    verify();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>TACK FÖR DITT KÖP</h1>
    </div>
  )
}

export default Success
