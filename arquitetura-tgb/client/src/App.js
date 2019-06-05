import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home/home.component";
import Projetos from "./components/projetos/App";
import Obras from "./components/obras/App";
import Relatorios from "./components/relatorios/App";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
              
            </a>
            <Link to="/" className="navbar-brand">Construtora</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/projetos" className="nav-link">Projetos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/obras" className="nav-link">Obras</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/relatorios" className="nav-link">Relatórios</Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/" exact component={Home} />          
          <Route path="/projetos" component={Projetos} />
          <Route path="/obras" component={Obras} />
          <Route path="/relatorios" component={Relatorios} />

        </div>
      </Router>
    );
  }
}

export default App;