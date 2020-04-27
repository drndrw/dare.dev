import * as React from "react";
import * as ReactDOM from "react-dom";
import { reduxStore } from './store';
import { Provider, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ReactGA from 'react-ga';

ReactGA.initialize('UA-164653308-1');

// Components
import Header from "./components/header";
import HeaderBackground from "./components/headerBackground";
import Menu from "./components/menu";
import Footer from "./components/footer";

// Routes
import Home from "./components/routes/home";
import About from "./components/routes/about";
import Resume from "./components/routes/resume";
import Contact from "./components/routes/contact";
import NotFound from "./components/routes/notfound";

// Styles
import "./styles/style.scss";

function App() {
  const navState: boolean = useSelector((state: any) => state.navStatus.navOpened);

  return (
    <Router>
      <Header navState={navState} />
      <HeaderBackground />
      <Menu navState={navState} />
      <div className="wrapper">
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/resume'>
            <Resume />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  )
}

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>, document.getElementById('app'))
