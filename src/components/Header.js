import React, { Component } from "react";
import {Nav} from "react-bootstrap";
//import {logo} from "../images/logo.png";

export default function Header(props) {
 
  return (  
<header className="page-header">        
  <div>

    <nav>
    </nav>
          <ul> 
            <img src="../logo.png" alt="logo" className="logo" ></img>
            <Nav.Link href="/"> Home </Nav.Link>
            <Nav.Link href="/About"> About </Nav.Link>
            <Nav.Link href="/Portfolio"> Portfolio </Nav.Link>
            <Nav.Link href="/Philosophy"> Philosophy </Nav.Link>
            <Nav.Link href="/Contact"> Contact </Nav.Link>
          </ul>     
      </div>
</header>

  );
}
