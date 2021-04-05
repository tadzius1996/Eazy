import React, {useEffect} from 'react'
import './Hire.css'
import Footer7 from './Footer7'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Hire() {

    useEffect(() => {
        Aos.init({duration: 3000});
      }, []);

    return (
        <div>
            <div className='padding' />
            <div className='hire-section'>
                <img src='/board.png' alt='teacher' className='teacher-logo' data-aos='fade-down'/>
                <img src='/education-girl.png' alt='education' className='education-logo' data-aos='fade-right'/>
                <img className='hire-particles' src='/particlesColor.png' alt='particles' data-aos='fade-in'/>
                <img className='hire-particles2' src='/particlesColor.png' alt='particles' data-aos='fade-in'/>
                <img className='hire-particles3' src='/particlesColor.png' alt='particles' data-aos='fade-in'/>
                <div className='hire-title-container'>
                <h2 className='hire-title' data-aos='fade-right'>We're Hiring!</h2>
                <p className='hire-subtitle' data-aos='fade-right'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, ex deserunt? Voluptates, eos, doloribus commodi quas, fuga sunt voluptatum officia.</p>
                <button className='hire-email' data-aos='fade-in'>Send CV</button>
                </div>
                <div className='hire-container'>
                <div className='text-group' data-aos='fade-up'>
                    <h3 className='text-header'>Do you like working with children?</h3>
                    <p className='text-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, magnam. Ut ducimus, magnam sed modi dolore veniam porro. Illo necessitatibus dolor voluptatibus tempora. Cum fuga ex veniam culpa suscipit? Id.</p>
                </div>
                <div className='hire-holder'>
                <div className='text-group2' data-aos='fade-up'>
                    <h3 className='text-header2'>Do you like working with children?</h3>
                    <p className='text-text2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, magnam. Ut ducimus, magnam sed modi dolore veniam porro. Illo necessitatibus dolor voluptatibus tempora. Cum fuga ex veniam culpa suscipit? Id.</p>
                </div>
                <ul className='hire-list' data-aos='fade-up'>
                    <h2 className='hire-list-header'>Terms/Conditions</h2>
                    <li className='hire-item'>What we offer</li>
                    <li className='hire-item'>What we offer</li>
                    <li className='hire-item'>What we offer</li>
                    <li className='hire-item'>What we offer</li>
                </ul>
                </div>
                <div className='hire-holder'>
                <div className='text-group2' data-aos='fade-up'>
                    <h3 className='text-header2'>Do you like working with children?</h3>
                    <p className='text-text2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, magnam. Ut ducimus, magnam sed modi dolore veniam porro. Illo necessitatibus dolor voluptatibus tempora. Cum fuga ex veniam culpa suscipit? Id.</p>
                </div>
                <ul className='hire-list' data-aos='fade-up'>
                    <h2 className='hire-list-header'>Terms/Conditions</h2>
                    <li className='hire-item'>What we offer</li>
                    <li className='hire-item'>What we offer</li>
                    <li className='hire-item'>What we offer</li>
                    <li className='hire-item'>What we offer</li>
                </ul>
                </div>
                </div>
            </div>
            <Footer7 />
        </div>
    )
}

export default Hire
