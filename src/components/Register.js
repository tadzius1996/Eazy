import React, {useEffect} from 'react'
import './Register.css'
import {Link} from 'react-router-dom'
import Footer4 from './Footer4'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Register() {

    useEffect(() => {
        Aos.init({duration: 3000});
      }, []);

    return (
        <div className='register-place'>
            <div className='padding' />
            <div className='login-bear-text'>
            <img className='register-bear' src='/register-results.png' alt='bear' data-aos='fade-right'/>
            <div className='bear-container' data-aos='fade-left'>
            <h3 className='bear-title'>Your Account</h3>
            <p className='bear-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, voluptatibus ratione quod iusto aperiam autem, quaerat perferendis ipsum eum, voluptates esse consequatur quidem sit magni atque nam aut ea sint.</p>
            <button className='bear-btn'>Create Account!</button>
            </div>
            </div>
            <form  className='contactContainer-register' data-aos='fade-up'>
            <div className='contactForm-registerr'>
                <h2 className='register'>Register</h2>
            <input type="text" className="form-control-register" name="name" autocomplete="off" required/>
                        <label for='name' className='label-name-register'>
                            <span class='content-name-register'>Name</span>
                        </label>
                          <input type="password" className="form-control-register" name="password" autocomplete="off" required/>
                        <label for='password' className='label-name-register'>
                            <span class='content-name-register'>Password</span>
                        </label>
                          <input type="text" className="form-control-register" name="subject" autocomplete="off" required/>
                        <label for='subject' className='label-name-register'>
                            <span class='content-name-register'>Confirm</span>
                        </label>
                        <p className='have-account'>Already have an Account?</p><Link to='/Login'><a className='already-login'>Login</a></Link>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="contacttt-btn" value="Create Account!"></input>
                        </div>
                </div> 
        </form>
        <img className='register-particles2' src='/particlesColor.png' alt='particles' />
        <img className='register-particles' src='/particlesColor.png' alt='particles'/>
        <Footer4/>
        </div>
    )
}

export default Register
