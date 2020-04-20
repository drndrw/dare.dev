import * as React from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { toggleNav } from '../actions';

import Hamburger from "./hamburger";

export default function Header(props: any) {
  const dispatch = useDispatch();

  return (
    <nav className={props.navState ? 'open' : ''}>
      <div className="container flex">
        <div className="left">
          <Link to="/" className="h3" onClick={() => dispatch(toggleNav(false)}>DaRe</Link>
        </div>
        <div className="right">
          <Hamburger {...props} />
        </div>
      </div>
    </nav>
  )
}
