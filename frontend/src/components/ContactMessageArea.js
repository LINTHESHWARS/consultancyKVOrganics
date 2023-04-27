import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import "../components/ContactMessageArea.css"

const ContactMessageArea = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_l3ycy89', 'template_st7hs0j', form.current, 'd0aZiibRJtfmTfFi4')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };

  return (
    <section>
        <div className='container'>
            <h2 className='--text-center'>Contact Us</h2>
            <form ref={form} onSubmit={sendEmail} className='--form-control --card --flex-center --dir-column'>
                <div className='container'>
                <input type="text" placeholder='Full Name' name='user_name' className='input-with-icon' required/>
                <input type="email" placeholder='Email' name='user_email' required/>
                <input type="text" placeholder='Subject' name='subject' required/>
                <textarea name='message' cols="30" rows="10" placeholder='Enter message'></textarea>
                <button type='submit' className='button' >Submit Form</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default ContactMessageArea

