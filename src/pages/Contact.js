import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='container'>
      <h3 className='text-connect'>Get In Touch</h3>
      <div className='row'>
        <div className='col-md-4'></div>
      <div className='col-md-4'>
      <form ref={form} onSubmit={sendEmail}>
    <label>Name</label>
    <input type="text" name="user_name" className='form-control'/>
    <label>Email</label>
    <input type="email" name="user_email" className='form-control'/>
    <label>Message</label>
    <textarea name="message" className='form-control'/>
  
    <button type='submit' className='btn btn-success mt-3 mb-3'>Send</button>
 
  </form>
        </div>
      </div>
  
        

    </div>
  )
}

export default Contact