

// export default function Contacthero() {
//   return (
//     <div>Contacthero</div>
//   )
// }

import React, { useContext, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contacthero.css'
import { ThemeContext } from '../../App';

export const Contacthero = () => {
  
  const { mode, setmood } = useContext(ThemeContext);
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_f96q2xz', 'template_cb1x5ud', form.current, {
        publicKey: 'RtDNAPk-chuRYfDgM',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('i will check your message ')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className={`contactme-section ${mode}cot`}>
        <div className='contact-top-div'>
            <h5 className='blue'>contact</h5>
            <h2 className='w-t'>Let’s Discuss Your <span className='blue'>Project</span></h2>
        </div>
        <div className='contact-bottom-div'>
            <div className='contact-left-div'>
                <div className='my-phone-div'>
                    <img className='phone-icon' src="/assets/Group 9042.svg" alt="" />
                    <div className='text-phone'>
                        <h5>Call Me</h5>
                        <h6 className='w-t'>+963 958272215</h6>
                    </div>
                </div>
                <div className='my-email-div'>
                    <img src="/assets/Group 9043.svg" alt="" />
                    <div className='text-email'>
                        <h5>Email Me</h5>
                        <h6 className='w-t'>nourzidan717@gmail.com</h6>
                    </div>
                </div>
                <div className='my-adress-div'>
                    <img src="/assets/Group 9044.svg" alt="" />
                    <div className='text-address'>
                        <h5>Address</h5>
                        <h6 className='w-t'>Latakia Syria</h6>
                    </div>
                </div>
            </div>
            <div className='contact-right-div'>
            <form className='form' ref={form} onSubmit={sendEmail}>
      <div className='name-email-div'>
      <input className='name-input' type="text" name="from_name" placeholder='Full name'/>
      
      <input className='email-input' type="email" name="email" placeholder='Your email' />
      </div>
      
     
      <input className='ph-num-input' placeholder='Phone number' type="number" name="from_phone" />
      
      <textarea className='your-text' placeholder='Message' name="message" />
      <div className='btn-cotact-div'>
      <input type="submit" value="Send Message" />
      </div>
      
    </form>
            </div>
        </div>
    
    </section>
  );
};