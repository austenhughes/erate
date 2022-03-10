// import logo from './logo.svg';
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/index";
import Contact from "./pages/Contact/index";
import FAQ from "./pages/Faq/index";
import Forms from "./pages/Forms/index";
import Services from "./pages/Services/index";
import Consulting from "./pages/Consulting/index";

// adding bootstrap ... I think 
import 'bootstrap/dist/css/bootstrap.min.css';

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

        <Route path={["/services"]}>
            <Services />
          </Route>

        <Route path={["/consulting"]}>
            <Consulting />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;