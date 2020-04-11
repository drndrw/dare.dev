import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function Hamburger(props: any) {

  const dispatch = useDispatch();
  const [open, setOpen] = useState<string | undefined>(undefined);
  console.log(props.navState);
  return (
    <div className={"hamburger" + (open ? ' ' + open : '')} onClick={() => open ? setOpen(undefined) : setOpen('open')}>
      <div className="hamburger-line top"></div>
      <div className="hamburger-line bottom"></div>
    </div>
  )
}
