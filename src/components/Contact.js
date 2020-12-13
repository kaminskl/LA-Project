
import React from 'react'

export default function Contact() {
    return (
    <form>
        <h2>Contact Form</h2>
        <div className="contactMe">
        <p>Interested in a purchase, want to know more or just say hi, I would love to hear from you. </p>
            <br></br>
            <label>First Name:</label>
              <input type="text" size="50"/><br/><br/>
            <label>Last Name:</label>
               <input type="text" size="50"/><br/><br/>
            <label>E-mail:</label>
               <input type="email" size="50"/><br/><br/>
            <label>Message:</label>
              <textarea name="textarea" cols="50" rows="10"></textarea><br/><br/>
            <button>Submit</button>
        </div>
    </form>  
    )
}
