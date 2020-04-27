import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ReactGA from 'react-ga';

export default function Contact(props: any) {

  useEffect (() => {
    document.title = 'Contact - DaRe';
    document.querySelector('meta[property="og:title"]').setAttribute("content", "Contact - DaRe");
    document.querySelector('meta[name="description"]').setAttribute("content", "Reach out to me via email, or connect with me on LinkedIn.");
    document.querySelector('meta[property="og:description"]').setAttribute("content", "Reach out to me via email, or connect with me on LinkedIn.");
    ReactGA.ga('send', 'pageview', '/contact');
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <h1 className="h2">Contact me</h1>
      <p>If you'd like to learn more about my projects, or potentially work with me, shoot me an email at <a href="mailto:andrew@dare.dev">andrew@dare.dev</a>, or <a href="https://www.linkedin.com/in/andrewdare/" target="_blank">connect with me on LinkedIn</a>.</p>
    </>
  )
}
