import * as React from "react";

import Hamburger from "./hamburger";
import Header from "./header";

export default function Menu(props: any) {
  return (
    <div className="menu" style={props.navState ? {opacity: '1', visibility: 'visible'} : {opacity: '0', visibility: 'hidden'}}>
      <div className="container flex reverse">
        <a href="/test" class="h4">Testing</a>
      </div>
      <div className="container flex reverse">
        <a href="/test" class="h4">Testing</a>
      </div>
    </div>
  )
}
