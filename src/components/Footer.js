import React from 'react'

export default function Footer() {
	const phoneNumber = '3330-3333-991';
	
	return (
      <footer className="page-footer">
        <h4>Contact Us</h4>
        <ul>
          <li>
          LoriAnn@hotmail.com
          </li>
          <li>
          {phoneNumber}
            </li>
        </ul>
      </footer>
    )
}
