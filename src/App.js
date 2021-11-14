import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../src/pages/Home/index";
// import Contact from "./pages/Contact/index";
// import FAQ from "./pages/Faq/index";
// import Forms from "./pages/Forms/index";
// import Procurement from "./pages/Procurement/index";
// import Services from "./pages/Services/index";


import './App.css';

function App() {

  return (
    <Router>
      <div>
        <Switch>

        <Route  exact path={["/", "/home"]}>
            <Home />
          </Route>

        {/* <Route  exact path={["/contact"]}>
            <Contact />
          </Route>

        <Route path={["/FAQ"]}>
            <FAQ />
          </Route>

        <Route path={["/forms"]}>
            <Forms />
          </Route> */}

        {/* <Route path={["/procurement"]}>
            <Procurement />
          </Route>

        <Route path={["/services"]}>
            <Services />
          </Route> */}

        </Switch>
      </div>
    </Router>
  );
}

export default App;