import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Resume(props: any) {

  useEffect (() => {
    document.title = 'Resume - DaRe';
  }, [])

  return (
    <>
      <h1 className="h3">Resume</h1>
      <h2 className="h4">Experience</h2>
      <div className="experience">
        <div className="resume-item">
          <h5>Web Developer — <span className="italic">HelloSign, a Dropbox Company</span></h5>
          <p className="italic location">San Francisco, CA — May 2019 to Present</p>
          <p className="item">Developer and manager for HelloSign’s marketing website</p>
          <p className="item">Work cross functionally across Hellosign and Dropbox to build new website features and content</p>
          <p className="item">Develop website and automation tools using Javascript (React) and Python</p>
        </div>
        <div className="resume-item">
          <h5>Web Producer — <span className="italic">Atlassian</span></h5>
          <p className="italic location">San Francisco, CA — January 2018 to May 2019</p>
          <p className="item">Support Atlassian’s marketing by developing content using a CMS</p>
          <p className="item">Handle front-end development tasks using Javascript, SASS, Freemarker and Git</p>
          <p className="item">Developed automation and productivity tools using Python and Javascript</p>
        </div>
        <div className="resume-item">
          <h5>Vendor Project Manager — <span className="italic">Apple (Welocalize)</span></h5>
          <p className="italic location">Cupertino, CA — July 2017 to January 2018</p>
          <p className="item">Manage a team of localization contractors onsite at Apple, by enforcing quality and productivity expectations established by Apple’s localization team</p>
          <p className="item">Developed and implemented productivity tracking software to replace the localization team’s existing platform, and to produce productivity metrics for Apple</p>
        </div>
        <div className="resume-item">
          <h5>Production Designer — <span className="italic">Apple (Welocalize)</span></h5>
          <p className="italic location">Cupertino, CA — June 2016 to July 2017</p>
          <p className="item">Produced localized print and digital documentation for various Apple products across forty languages</p>
          <p className="item">Developed software to streamline and automate localization processes for graphic QA checks, batch image exporting, and XML parsing for language translation analysis</p>
        </div>
        <div className="resume-item">
          <h5>Digital Production Manager — <span className="italic">University Graphic Systems</span></h5>
          <p className="italic location">San Luis Obispo, CA — June 2015 to June 2016</p>
          <p className="item">Used and maintained various commercial digital presses and affiliated software</p>
          <p className="item">Managed and instructed a team of interns regarding press operation, workflow management and creation of standard operating procedures for the company</p>
        </div>
        <div className="resume-item">
          <h5>Print Production Specialist Intern — <span className="italic">Robinson Anderson Print & Fulfillment</span></h5>
          <p className="italic location">Elk Grove, CA — June 2015 to September 2015</p>
          <p className="item">Worked with prepress, production and postpress operations with various types of jobs</p>
          <p className="item">Calibrated presses for color accuracy and proof color matching for clients</p>
        </div>
      </div>
      <h2 className="h4">Skills</h2>
      <div className="skills">
        <div className="resume-item">
          <h5>Languages</h5>
          <p className="item"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">HTML</a></p>
          <p className="item"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">CSS</a></p>
          <p className="item"><a href="https://www.python.org/" target="_blank">Python</a></p>
          <p className="item"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">JavaScript</a></p>
          <p className="item"><a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a></p>
          <p className="item"><a href="https://en.wikipedia.org/wiki/SQL" target="_blank">SQL</a></p>
        </div>
        <div className="resume-item">
          <h5>Front End</h5>
          <p className="item"><a href="https://reactjs.org/" target="_blank">React</a></p>
          <p className="item"><a href="https://redux.js.org/" target="_blank">Redux</a></p>
          <p className="item"><a href="https://sass-lang.com/" target="_blank">SASS</a></p>
          <p className="item"><a href="https://webpack.js.org/" target="_blank">Webpack</a></p>
        </div>
        <div className="resume-item">
          <h5>Back End</h5>
          <p className="item"><a href="https://flask.palletsprojects.com/en/1.1.x/" target="_blank">Flask</a></p>
          <p className="item"><a href="https://www.djangoproject.com/" target="_blank">Django</a></p>
          <p className="item"><a href="https://expressjs.com/" target="_blank">Express</a></p>
        </div>
        <div className="resume-item">
          <h5>Database</h5>
          <p className="item"><a href="https://www.mysql.com/" target="_blank">MySQL</a></p>
          <p className="item"><a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a></p>
          <p className="item"><a href="https://redis.io/" target="_blank">Redis</a></p>
        </div>
        <div className="resume-item">
          <h5>Tooling</h5>
          <p className="item"><a href="https://aws.amazon.com/" target="_blank">AWS</a></p>
          <p className="item"><a href="https://www.docker.com/" target="_blank">Docker</a></p>
          <p className="item"><a href="https://git-scm.com/" target="_blank">Git</a></p>
          <p className="item"><a href="https://jenkins.io/" target="_blank">CI / CD</a></p>
        </div>
      </div>
    </>
  )
}
