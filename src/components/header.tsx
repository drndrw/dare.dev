import * as React from "react";

import Hamburger from "./hamburger";

export default function Header(props: any) {
  return (
    <nav>
      <div className="container flex">
        <div className="left">
          <span className="h3">DaRe</span>
        </div>
        <div className="right">
          <Hamburger {...props} />
        </div>
      </div>
    </nav>
  )
}
