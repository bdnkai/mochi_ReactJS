import React from "react";
import Navigation from "./components/Navigation.js"

function App() {
  return (
    <div>
      <div>"HELLO FROM APP.jS"</div>
      <div className='Navigation'>{Navigation()}</div>
    </div>
  );
}

export default App;
