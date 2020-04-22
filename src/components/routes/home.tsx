import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home(props: any) {

  useEffect (() => {
    document.title = 'Andrew DaRe';
  }, [])

  return (
    <>
      <p>Hey, I'm Andrew. I'm a software engineer, cat dad, Volkswagon bus owner and sourdough bread baking enthusiast. I'm currently a web developer at <a href="https://www.hellosign.com">HelloSign, a Dropbox Company</a>.</p>
      <p>I have extensive software development, project and product management experience, working at companies small and large. I've worked across a number of technical stacks to build web services, automated tools and more. My current projects include some Javascript (<a href="https://reactjs.org/" target="_blank">React</a>, <a href="https://redux.js.org/" target="_blank">Redux</a>, <a href="https://www.typescriptlang.org/" target="_blank">Typescript</a>, <a href="https://expressjs.com/" target="_blank">Express</a>), Python (<a href="https://flask.palletsprojects.com/en/1.1.x/" target="_blank">Flask</a>, <a href="https://www.djangoproject.com/" target="_blank">Django</a>), and various tooling (<a href="https://webpack.js.org/" target="_blank">Webpack</a>, <a href="https://sass-lang.com/" target="_blank">SASS</a>, <a href="https://www.docker.com/" target="_blank">Docker</a>), just to name a few.</p>
      <p>Feel free to <Link to="/about">read more about me</Link>, <Link to="/resume">check out my resume</Link>, or <Link to="/contact">reach out to me directly</Link>. I'm looking forward to connecting!</p>
    </>
  )
}
