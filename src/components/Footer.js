import React from 'react'

export default function Footer() {
	const phoneNumber = '+604 365 45 91';
	
	return (
      <footer className="page-footer">
        <h4>Contact:</h4>
        <ul>
          <li>
          Loriannkaminska@hotmail.com
          </li>
          <li>
          {phoneNumber}
            </li>
        </ul>
      </footer>
    )
}

