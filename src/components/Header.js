import React from "react";
// import { Link } from "react-router-dom";
import {Nav} from "react-bootstrap";
import {logo} from "./logo";

export default function Header(props) {
 
  return (    
      <header className="page-header">         
             <div>
             
            
             {/* create image element  */}
      <nav>
          

      </nav>
     
               <ul> 

               {/* <article id="logo"></article> */}
                {/* <Nav.Link  component = {logo}> </Nav.Link> */}
                <Nav.Link  href="/"> Home </Nav.Link>
                <Nav.Link href="/About"> About </Nav.Link>
                <Nav.Link href="/Portfolio"> Portfolio </Nav.Link>
                <Nav.Link href="/Philosophy"> Philosophy </Nav.Link>
                <Nav.Link href="/Contact"> Contact </Nav.Link>

             
             </ul>     
            </div>
       </header>

  );
}
