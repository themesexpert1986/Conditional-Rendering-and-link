import React from "react";
import Login from "./Login";

var isLoggedIn = false;
const currentTime = new Date().getHours();

console.log(currentTime);

// function renderConditionally() {
//   if (isLoggedIn) {
//     return <h1>Hello</h1>;
//   } else {
//     return <Login />;
//   }
// }

function App() {
  return (
    <div className="container">
      {currentTime > 16 ? (
        <h1> Why are you still working</h1>
      ) : (
        <React.Fragment>
          <h1>Login</h1>
          <Login />
        </React.Fragment>
      )}
      {/* {isLoggedIn ? <h1>Hello</h1> : <Login />} */}
      {currentTime > 12 && <h1>Hello world</h1>}
    </div>
  );
}

export default App;
