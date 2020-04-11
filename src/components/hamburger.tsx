import React from "react";
import { useDispatch } from "react-redux";
import { toggleNav } from '../actions';

export default function Hamburger(props: any) {
  const dispatch = useDispatch();

  return (
    <div className={"hamburger" + (props.navState ? ' open' : '')} onClick={() => props.navState ? dispatch(toggleNav(false)): dispatch(toggleNav(true)}>
      <div className="hamburger-line top"></div>
      <div className="hamburger-line bottom"></div>
    </div>
  )
}
