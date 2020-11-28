import React from "react";
//import { Switch, Route, Redirect } from "react-router-dom";
import {BrowserRouter as Router, Route}from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Philosophy from "./Philosophy";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import {Nav} from "react-bootstrap";
//import Nav from React as "nav";




export default function App() {
  return (
    <div className="container">  
   
     <Header class="page-header"/>
        <Router>         
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/philosophy" component={Philosophy} />
            <Route path="/contact" component={Contact} /> 
        </Router>    
      <Footer />  
      
    </div>
  );
}



