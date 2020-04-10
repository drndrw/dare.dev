import * as React from "react";
import * as ReactDOM from "react-dom";

import "./styles/style.scss";

function App() {
  return (
    <div>
      <h1 className="h3">Hello</h1>
      <p>Lorem ipsum dolor sit <a href="/">amet</a>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("app"))
