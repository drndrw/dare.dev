import React, { useState } from "react";

export default function Hamburger() {

  const [open, setOpen] = useState<string | undefined>(undefined);

  return (
    <div className={"hamburger" + (open ? ' ' + open : '')} onClick={() => open ? setOpen(undefined) : setOpen('open')}>
      <div className="hamburger-line top"></div>
      <div className="hamburger-line bottom"></div>
    </div>
  )
}
