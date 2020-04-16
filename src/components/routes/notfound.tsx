import React, { useEffect } from "react";

export default function NotFound(props: any) {

  useEffect (() => {
    document.title = '404 - DaRe';
  }, [])

  return (
    <>
        <h1>404</h1>
        <p>Not what you were looking for, sorry</p>
    </>
  )
}
