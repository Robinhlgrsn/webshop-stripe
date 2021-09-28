import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Button from "../components/UI/Button";
import { useHistory } from "react-router";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Success = (props) => {
  const [error, setError] = useState(false);
  let query = useQuery();
  query.get("session_id");

  useEffect(() => {
    const verify = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/create-checkout-session/verify",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ sessionId: query.get("session_id") }),
          }
        );
        const data = await response.json();
        localStorage.clear();
        props.onClearCart();
        if (!response.ok) {
          setError(true);
        }
      } catch (err) {
        console.log(err, "errorlog");
      }
    };
    verify();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const history = useHistory();

  return (
    <div className="flex flex-col w-full rounded shadow-xl items-center ">
      {error ? (
        <h2 className="m-5">The order is already placed!</h2>
      ) : (
        <h2 className="m-5">Thanks for your order!</h2>
      )}

      <div className="w-1/5">
        <Button
          onClick={() => {
            history.push("/");
          }}
        >
          Back to home page!
        </Button>
      </div>
    </div>
  );
};

export default Success;
