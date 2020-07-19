import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Home, Nav, About, Contact, Article, Error } from "./components";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Nav />
        </div>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/detail" exact component={Article} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/error" exact component={Error} />
            <Redirect to="/error" />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
