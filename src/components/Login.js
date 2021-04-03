import React, {useState, useRef, useEffect} from 'react'
import './Login.css'
import {Link, useHistory} from 'react-router-dom'
import Footer5 from './Footer5';
import useGlobalProvider from '../context'

function Login() {

    const {login} = useGlobalProvider();
    const [loading, setLoading] = useState(false);
    const {signup, currentUser} = useGlobalProvider();
    const [error, setError] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const loginEmailRef = useRef();
    const loginPasswordRef = useRef();
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault()
    
        try {
          setError("")
          setLoading(true)
          await login(loginEmailRef.current.value, loginPasswordRef.current.value)
          history.push("/dashboard")
        } catch {
          setError("* Make sure your email and password are correct")
        }
    
        setLoading(false)
      }

      setTimeout(() => {
        setError('');
    }, 3000);


    return (
        <div className='login-place'>
            <div className='padding' />
        <form  className='contactContainer-login' data-aos='fade-up'  onSubmit={handleLogin}>
        <div className='contactForm-register'>
            <h2 className='login'>Login</h2>
        <input className="form-control-login" name="name" autocomplete="off" required type='email' ref={loginEmailRef}/>
                    <label for='name' className='label-name-register'>
                        <span class='content-name-register'>Email</span>
                    </label>
                      <input className="form-control-login" name="password" autocomplete="off" required type='password' ref={loginPasswordRef}/>
                    <label for='password' className='label-name-register'>
                        <span class='content-name-register'>Password</span>
                    </label>
                      
                    <p className='have-account-login'>Do not have an account?</p><Link to='/Register'><a className='already-login'>Create Account!</a></Link>
                    <div className="col-8 pt-3 mx-auto">
                        <input type="submit" className="loginn-btn" value="Login!" onSubmit={handleLogin}></input>
                        {error ? <h3 className='error'>{error}</h3> : ''}
                    </div>
            </div> 
    </form>
    <img className='login-particles' src='/particlesColor.png' alt='particles' />
    <img className='login-particles2' src='/particlesColor.png' alt='particles' />
    <img className='login-particles3' src='/particlesColor.png' alt='particles' />
    <Footer5/>
    </div>
    )
}

export default Login
