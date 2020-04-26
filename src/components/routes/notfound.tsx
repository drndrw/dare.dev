import React, { useEffect } from "react";

export default function NotFound(props: any) {

  useEffect (() => {
    document.title = '404 - DaRe';
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
        <h1 style={{textAlign: 'center'}}>404</h1>
        <p style={{textAlign: 'center'}}>Not what you were looking for, sorry</p>
    </>
  )
}
