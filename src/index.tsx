import * as React from "react";
import * as ReactDOM from "react-dom";
import { reduxStore } from './store';
import { Provider, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Components
import Header from "./components/header";
import HeaderBackground from "./components/headerBackground";
import Menu from "./components/menu";

// Routes
import Home from "./components/routes/home";
import About from "./components/routes/about";

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
        </Switch>
      </div>
    </Router>
  )
}

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>, document.getElementById('app'))
