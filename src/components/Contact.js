
import React from 'react';

const divStyle = { height: '200px', width:'500px' };
const typeText= {width:'60%', padding: '12px',  border: '1px solid #ccc', resize: 'vertical' }
const container = {border: '5px', background: '#f2f2f2', padding: '20px'}
const primary ={background: 'grey',padding: '12px 20px',border: 'none', cursor: 'pointer'}
const secondary = {background: 'purple'}
  

export default function Contact() {
    return (
 <div class="container">
    <form>
        <h2>Contact Form</h2>
        <div style={container}>
        <p>Interested in a purchase, want to know more or just say hi, I would love to hear from you. </p>
            <br></br>
            <label>First Name:</label><br/>
              <input  style={typeText} /><br/><br/>
            <label>Last Name:</label><br/>
               <input style={typeText} /><br/><br/>
            <label>E-mail:   </label><br/>
               <input style={typeText} /><br/><br/>
            <label for="subject">Message</label><br/>           
            <textarea  style={divStyle} id="subject" name="subject" placeholder="Write something.." ></textarea>
            <br/><br/>
            <div export default Button >
            <div className="mb-2">
            <button style={secondary} size="lg">
            Submit
            </button>
                
            </div>
            </div>
        </div>
    </form> 
</div> 
    )
}
 