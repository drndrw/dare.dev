import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ReactGA from 'react-ga';

export default function About(props: any) {

  useEffect (() => {
    document.title = 'About - DaRe';
    document.querySelector('meta[property="og:title"]').setAttribute("content", "About - DaRe");
    document.querySelector('meta[name="description"]').setAttribute("content", "Read about my personal and professional engineering experience.");
    document.querySelector('meta[property="og:description"]').setAttribute("content", "Read about my personal and professional engineering experience.");
    ReactGA.ga('send', 'pageview', '/about');
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <h1 className="h2">About me</h1>
      <p>I'm a San Francisco bay area transplant working as a web developer at <a href="https://www.hellosign.com">HelloSign, a Dropbox Company</a>. As a self taught engineer,
      I'm adept at learning new tech, and writing/ shipping code with quick turnaround times. My brief work experience has taught me to be comfortable with failing hard, fast and often,
      especially as it relates to my challenging work projects. As a consequence of that, I've shipped some pretty cool stuff, even if that came at the cost of a few bugs along the way.</p>
      <h2 className="h3">My background</h2>
      <p>I attended Cal Poly, San Luis Obispo with a major in Graphic Communication. After graduation, I moved to the San Francisco bay area to begin a career in production design,
      supporting the localization efforts for a large tech company. About six months into my role, I began to automate a few of our internal processes using my 101-level knowledge of Python. Since then, I've been learning and
      developing software to support a multitude use cases.</p>
      <h2 className="h3">My career</h2>
      <p>I've come a long way since the rudimentary Python scripts I wrote as a production designer. Here are a few examples (not a complete list) of what I've worked on professionally since then:</p>
      <h3 className="h4">Apple (Welocalize)</h3>
      <p>While contracting at Apple, I developed several tools to facilitate automation and project tracking for a team of 15 people. My early projects included a Python-based diffing tool for comparing language-specific text strings, as well as a Python-based image QA tool, used to validate designer-produced images
      against a variable set of criteria. My biggest project was a real-time project tracking tool (think <a href="https://trello.com/" target="_blank">Trello</a> or <a href="https://www.atlassian.com/software/jira" target="_blank">Jira</a> for a very customized workflow), authored from scratch using <a href="https://flask.palletsprojects.com/en/1.1.x/" target="_blank">Flask</a> (a Python-based web framework), <a href="https://socket.io/" target="_blank">Socket.io</a>, Javascript and a <a href="https://www.mysql.com/" target="_blank">MySQL database</a>.</p>
      <h3 className="h4">Atlassian</h3>
      <p>At Atlassian, I developed a series of tools to support my team of web producers, and was an active participant in <a href="https://www.atlassian.com/company/shipit" target="_blank">ShipIt</a>, Atlassian's quarterly internal hackathon. For my team, I developed a series of integrations between our marketing content management system, Jira and Confluence to produce status reports for
      pages across our marketing website. For ShipIt, I built the backend for a tool that helped visualize Jira data for Atlassian's creative team to assist with future work planning, as well as a tool that helped pair Atlassian employees with other employees that had similar interests, based on data collected from internal company blog posts. My biggest ShipIt project involved building the backend for <a href="https://workopen.io" target="_blank">workopen.io</a>, a quiz that participants at Atlassian's 2018 Summit conference in Barcelona took to determine how open their teams were to change. As the quiz is given, participant response data is visualized on a line graph in real time. You can see Jay Simons, Atlassian's president, showcasing the quiz during his keynote speech <a href="https://youtu.be/OLmk-UROdfs?t=526" target="_blank">here</a>.</p>
      <p>Atlassian exposed me to the world of Agile development (I obtained my <a href="https://www.scrum.org/resources/what-is-a-scrum-master" target="_blank">scrum master</a> certification in 2018), and some advanced tooling like <a href="https://www.docker.com/" target="_blank">Docker</a>, <a href="https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment" target="_blank">CI/ CD</a> and various <a href="https://en.wikipedia.org/wiki/Platform_as_a_service" target="_blank">PaaS</a> platforms. All of my projects at Atlassian were written using some combination of <a href="https://flask.palletsprojects.com/en/1.1.x/" target="_blank">Flask</a>, <a href="https://expressjs.com/" target="_blank">Express</a> (a <a href="https://expressjs.com/" target="_blank">Node.js</a> web framework), <a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a>, Docker, and various frontend technologies.</p>
      <h3 className="h4">HelloSign (Dropbox)</h3>
      <p>At HelloSign, I wear several hats. In addition to my day-to-day development responsibilities, I serve as the informal product/ project manager for HelloSign's marketing website, working directly with internal and external stakeholders to deliver our online marketing presence.</p>
      <p>I am actively working on migrating our marketing website component library to <a href="https://reactjs.org/" target="_blank">React</a> (with <a href="https://redux.js.org/" target="_blank">Redux</a> for state management), and building a series of marketing-specific web applications using a similar stack. I'm currently doing a lot of cool work that hasn't been released yet, so check back soon for some links :).</p>
      <h2 className="h3">Get in touch</h2>
      <p>This is just a quick summary about me, my background and my projects. If you'd like to learn more or work with me, <Link to="/contact">feel free to reach out</Link>.</p>
    </>
  )
}
