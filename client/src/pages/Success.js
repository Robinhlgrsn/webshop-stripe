import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Button from "../components/UI/Button";
import { useHistory } from "react-router";
import Spinner from "../components/UI/Spinner";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Success = (props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false);
  let query = useQuery();
  query.get("session_id");

  useEffect(() => {
    const verify = async () => {
      try {
        setIsLoading(true)
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
          setIsLoading(false)
        }
        setIsLoading(false)
      } catch (err) {
        console.log(err, "errorlog");
      }
    };
    verify();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const history = useHistory();

  return (
    <div className="flex flex-col w-full rounded shadow-xl items-center py-10 mt-10">
      {isLoading ? <Spinner /> : <>
      {error ? (
          <>
          <h2 className="p-4 text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-green-50">Error!</h2>
          <h2 className="mx-5 p-4 font-semibold text-red-500">The order is already placed!</h2>
          </>
        ) : (
          <>
          <h2 className="p-4 logo">Thanks!</h2>
          <h2 className="p-4 font-semibold">Thank you for your order!</h2>
          </>
        )}
      </>}
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
