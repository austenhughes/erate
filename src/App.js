// import logo from './logo.svg';
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/index";
import Contact from "./pages/Contact/index";
import FAQ from "./pages/Faq/index";
import Forms from "./pages/Forms/index";
import Procurement from "./pages/Procurement/index";
import Services from "./pages/Services/index";

import './App.css';

function App() {

  return (
    <Router>
      <div>
        <Switch>

        <Route  exact path={["/", "/home"]}>
            <Home />
          </Route>

        <Route path={["/contact"]}>
            <Contact />
          </Route>

        <Route path={["/faq"]}>
            <FAQ />
          </Route>
        
          <Route path={["/forms"]}>
            <Forms />
          </Route>

        <Route path={["/procurement"]}>
            <Procurement />
          </Route>

        <Route path={["/services"]}>
            <Services />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;