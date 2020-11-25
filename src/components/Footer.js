import React from 'react'

export default function Footer() {
	const phoneNumber = '3330-3333-991';
	
	return (
      <footer className="page-footer">
        <h4>Contact Us</h4>
        <ul>
          <li>
            <a href="mailto:LoriAnn@supergirl.com">LoriAnn@supergirl.com</a>
          </li>
  				<li><a href={`"tel:+01-${phoneNumber}"`}>{phoneNumber}</a></li>
        </ul>
      </footer>
    )
}
