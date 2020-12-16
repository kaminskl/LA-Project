import React from "react";
//import { Switch, Route, Redirect } from "react-router-dom";
import {BrowserRouter as Router, Route}from "react-router-dom";
import {logo} from "./logo";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Philosophy from "./Philosophy";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

export default function App() {
  return (
    <div class="container">  
   
     <Header class="page-header"/>
     <nav component={logo}> </nav>
        <Router> 
            {/* <Route path="/" component={logo} exact />         */}
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



