import React, {useEffect} from 'react';
import Footer3 from './Footer3';
import emailjs from 'emailjs-com';
import './Contact.css';
import Aos from 'aos'
import 'aos/dist/aos.css'

function Contact() {

    useEffect(() => {
        Aos.init({duration: 3000});
      }, []);

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_oafy2pm', 'template_u8wrh0v', e.target, 'user_Nl2UemyNOb9Alp8IHVeMi')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
        }
    
    return (
        <div className='contact-place'>
            <div className='padding' />

            <div className='contactArea'>
            <img src='/building.PNG' alt='building' data-aos='fade-right' className='building'/>
            <div className='address-place' data-aos='fade-left'>
            <h3 className='contact-address-title'>We're Excited to See You!</h3>
            <p className='contact-address-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nulla impedit nihil ullam itaque iste repudiandae, fuga dicta explicabo exercitationem repellat. Maiores est quis suscipit consectetur soluta iusto ad officia?</p>
            <ul className='address-list'>
                <li className='address-unit'>Address: <br />Hồng Hà, Thành phố Hạ Long, Quảng Ninh</li>
                <li className='address-unit'>Phone:  <br />094 390 62 04</li>
            </ul>
            </div>
            </div>
             
            <h2 className='write-us' data-aos='fade-up'>Write Us a Message!</h2>
            <form onSubmit={sendEmail} className='contactContainer' data-aos='fade-up'>
            <div className='contactForm'>
            <input type="text" className="form-control" name="name" autocomplete="off" required/>
                        <label for='name' className='label-name'>
                            <span class='content-name'>Name</span>
                        </label>
                          <input type="email" className="form-control" name="email" autocomplete="off" required/>
                        <label for='email' className='label-name'>
                            <span class='content-name'>Email</span>
                        </label>
                          <input type="text" className="form-control" name="subject" autocomplete="off" required/>
                        <label for='subject' className='label-name'>
                            <span class='content-name'>Subject</span>
                        </label>
                          <textarea className="form-message" id="" cols="30" rows="8" name="message" required></textarea>
                        <label for='subject' className='label-name'>
                            <span class='content-message'>Message</span>
                        </label>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="contactt-btn" value="Get in touch!"></input>
                        </div>
                </div> 
        </form>
        <img className='contact-particles3' src='/particlesColor.png' alt='particles' data-aos='fade-in'/>
        <img className='contact-particles2' src='/particlesColor.png' alt='particles' data-aos='fade-in'/>
        <Footer3/>
        </div>
    )
}

export default Contact
