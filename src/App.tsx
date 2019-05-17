import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "../node_modules/materialize-css/dist/js/materialize.min.css";
import "../node_modules/materialize-css/dist/js/materialize.min.js";
import "./App.css";

import { NavBar } from "./components/NavBar";
import { About } from "./pages/about";
import { Home } from "./pages/home";

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </div>
    </Router>
  );
};

export default App;
