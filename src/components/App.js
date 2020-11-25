import React from "react";
//import { Switch, Route, Redirect } from "react-router-dom";
import {BrowserRouter as Router, Route}from "react-router-dom";
// import Header from "./Header";
// import Footer from "./Footer";
import Home from "./Home";
import About from "./About";



export default function App() {
  return (
    <div className="container">
      {/* <Header />   */}
       <Router>
       <Route path="/" component={Home} exact />
       <Route path="/about" component={About} /> 
      </Router>     
      {/* <Footer /> */}
    </div>
  );
}



