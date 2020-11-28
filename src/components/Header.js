import React from "react";
// import { Link } from "react-router-dom";
import {Nav} from "react-bootstrap";

export default function Header(props) {
 
  return (    
      <header className="page-header">         
             <div>
               <ul>
               <Nav>
                <Nav.Link href="/">Home </Nav.Link>
                <Nav.Link href="/About"> About </Nav.Link>
                <Nav.Link href="/Portfolio"> Portfolio </Nav.Link>
                <Nav.Link href="/Philosophy"> Philosophy </Nav.Link>
                <Nav.Link href="/Contact"> Contact </Nav.Link>
              </Nav>  
             </ul>     
            </div>
       </header>

  );
}
