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
