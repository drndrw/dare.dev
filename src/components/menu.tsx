import * as React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleNav } from '../actions';

import Hamburger from "./hamburger";

function MenuItem(props: any) {
  const dispatch = useDispatch();

  return (
    <div className="container flex reverse">
      <Link to={props.link} className="h4" onClick={() => dispatch(toggleNav(false))}>{props.name}</Link>
    </div>
  )
}

export default function Menu(props: any) {
  return (
    <div className="menu" style={props.navState ? {opacity: '1', visibility: 'visible'} : {opacity: '0', visibility: 'hidden'}}>
      <MenuItem link="/" name="Home" />
      <MenuItem link="/about" name="About" />
      <MenuItem link="/resume" name="Resume" />
      <MenuItem link="/contact" name="Contact" />
    </div>
  )
}
