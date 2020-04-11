import * as React from "react";

import Hamburger from "./hamburger";

export default function Header() {
  return (
    <nav>
      <div className="container flex">
        <div className="left">
          <span className="h3">DaRe</span>
        </div>
        <div className="right">
          <Hamburger />
        </div>
      </div>
    </nav>
  )
}
