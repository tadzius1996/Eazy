import React, {useState, useRef, useEffect} from 'react'
import './Register.css'
import {Link, useHistory} from 'react-router-dom'
import Footer4 from './Footer4'
import Aos from 'aos'
import 'aos/dist/aos.css'
import useGlobalProvider from '../context'

function Register() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const [error, setError] = useState(false);
    const {signup, currentUser} = useGlobalProvider();
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    useEffect(() => {
        Aos.init({duration: 3000});
      }, []);

      async function handleRegister(e) {
        e.preventDefault()
    
        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
          return setError("Passwords do not match")
        }
    
        try {
          setError(false)
          setLoading(true)
          await signup(emailRef.current.value, passwordRef.current.value)
          history.push("/Dashboard");
        } catch {
          setError("* Failed to create an account")
        }
    
        setLoading(false)
      }

      setTimeout(() => {
        setError('');
    }, 3000);

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
      
            <form  className='contactContainer-register' data-aos='fade-up' onSubmit={handleRegister}>
            <div className='contactForm-registerr'>
                <h2 className='register'>Register</h2>
            <input className="form-control-register" name="name" autocomplete="off" type='email' ref={emailRef} required/>
                        <label for='name' className='label-name-register'>
                            <span class='content-name-register'>Email</span>
                        </label>
                          <input type="password" className="form-control-register" name="password" autocomplete="off" type='password' ref={passwordRef} required />
                        <label for='password' className='label-name-register'>
                            <span class='content-name-register'>Password</span>
                        </label>
                          <input type="text" className="form-control-register" name="subject" autocomplete="off" type='password' ref={confirmPasswordRef} required/>
                        <label for='subject' className='label-name-register'>
                            <span class='content-name-register'>Confirm</span>
                        </label>
                        <p className='have-account'>Already have an Account?</p><Link to='/Login'><a className='already-login'>Login</a></Link>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="contacttt-btn" value="Create Account!"  onSubmit={handleRegister}></input>
                            {error ? <h3 className='error'>{error}</h3> : ''}
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
