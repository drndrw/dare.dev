import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home(props: any) {

  useEffect (() => {
    document.title = 'Andrew DaRe';
  }, [])

  return (
    <>
      <p>Hey, I'm Andrew. I'm a software engineer, cat dad, Volkswagon bus owner and sourdough bread baking enthusiast. I'm currently a web developer at <a href="https://www.hellosign.com">HelloSign, a Dropbox Company</a>.</p>
      <p>I have extensive software development, project and product management experience, working at companies small, medium and large. I've worked across a number of technical stacks to build web services, automated tools and more.</p>
      <p>If you'd like to learn more, <Link to="/about">read more about me</Link>, <Link to="/resume">check out my resume</Link>, or <Link to="/contact">reach out to me directly</Link>.</p>
    </>
  )
}
