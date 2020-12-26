import React from "react";
import Home from './Compenents/Home'
import Product from './Compenents/Product'
import About from './Compenents/About'
import {NavBar} from './NavBar'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function RouteConfig() {
  return (
    <div>
        <Router>
          <nav>
           <NavBar />
          </nav>

                <Switch>
                        <Route exact path="/" component= {Home} />
                        <Route path="/Product" component= {Product} />
                        <Route exact path="/About" component= {About} />
                </Switch>
        
        </Router>  
    </div>
  );
}

export default RouteConfig;
