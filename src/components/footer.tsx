import * as React from "react";
import { Link } from 'react-router-dom';

import GitHub from './svg/github';
import LinkedIn from './svg/linkedin';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container flex">
        <div className="left">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="left">
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="right">
          <div className="logo-bar">
            <a target="_blank" href="https://www.linkedin.com/in/andrewdare/"><LinkedIn /></a>
            <a target="_blank" href="https://github.com/drndrw"><GitHub /></a>
          </div>
          <span><span className="copy">&copy;</span>2020 Andrew DaRe</span>
        </div>
      </div>
    </footer>
  )
}
