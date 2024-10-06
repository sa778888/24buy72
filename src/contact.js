import React from 'react';
import './contact.css';
function Contact() {
  return (
    <div className="contact" id='contactpage'>
      <div  className='ourServicePage'><h1>CONTACT US!</h1></div>
      <form action="/api/adddata" method="POST">
        <div className='firstfield'>
            <input className='Fname' type='text' placeholder='First Name' name='Fname' required/>
            <input className='Lname' type='text' placeholder='Last Name' name='Lname' required/>
        </div>
        <div className='restfield'>
        <input type='email' placeholder='Email' name='Email' required/>
        </div>
        <div className='restfield'>
        <input type='text' placeholder='Phone Number' name='Phone' required/>
        </div>
        <div className='restfield'>
        <input type='text' placeholder='Subject' name='Subject' required/>
        </div>
        <div className='textfield'>
        <textarea type='text' rows="6" placeholder='Message' name='Message' required/>
        </div>
        <div className='brandbybutton'>
        <button  id='post'>Send Message→</button>
       </div>
      </form>
    </div>
  );
}

export default Contact;