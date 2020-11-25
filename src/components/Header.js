import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
 

  return (    
      <header className="menu">
        
        <li><Link to="/about">
          <h1>about</h1>
        </Link></li>

        <li><Link to="/portfolio">
          <h1>portfolio</h1>
        </Link></li>

        <li><Link to="/philosophy">
          <h1>philosophy</h1>
        </Link></li>
        
        <li><Link to="/contact">
          <h1>contact</h1>
        </Link></li>  

      </header>

  );
}
