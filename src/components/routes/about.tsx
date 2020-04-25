import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function About(props: any) {

  useEffect (() => {
    document.title = 'About - DaRe';
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <p>About</p>
    </>
  )
}
