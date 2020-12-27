import React from "react";
import Home from './Compenents/Home'
import Product from './Compenents/Product'
import Cart from './Compenents/Cart'
import {NavBar} from './Compenents/NavBar'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function RouteConfig() {
  return (
    
        <Router>
         
          <nav>
           <NavBar />
          </nav>
          <Routes> 

          <Route path= "/" element={<Home/>} />
          <Route path= "/Product" element={<Product/>} />
          <Route path= "/Cart" element={<Cart/>} />
          <Route path= "*" element={<h3>Page Not Found</h3>} />
        
          
                
                </Routes>
        </Router>  
    
  );
}

export default RouteConfig;
