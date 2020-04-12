import * as React from "react";

import Hamburger from "./hamburger";
import Header from "./header";

export default function Menu(props: any) {
  return (
    <div className="menu" style={props.navState ? {opacity: '1', visibility: 'visible'} : {opacity: '0', visibility: 'hidden'}}>
      <h1 style={{color: '#000'}}>hey dude</h1>
    </div>
  )
}
