import * as React from "react";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container flex">
        <div className="left">
          <Link to="/">Home</Link>
        </div>
        <div className="right">
          <span>&copy;2020 Andrew DaRe</span>
        </div>
      </div>
    </footer>
  )
}
