import React,{useEffect}  from 'react'
import './Services.css'
import Footer6 from './Footer6'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Services() {

    useEffect(() => {
        Aos.init({duration: 3000});
      }, []);

    return (
        <div className='course-container'>
            <div className='padding' />
            <img src='course-clouds.png' alt='clouds' className='course-clouds' data-aos='fade-up'/>
            <img src='course-clouds.png' alt='clouds' className='course-clouds2' data-aos='fade-up'/>
            <img src='course-clouds.png' alt='clouds' className='course-clouds3' data-aos='fade-up'/>
            <img src='course-clouds.png' alt='clouds' className='course-clouds4' data-aos='fade-up'/>
            <img src='course-clouds.png' alt='clouds' className='course-clouds5' data-aos='fade-up'/>
            <img src='/course-ballon.png' alt='plane' className='plane' data-aos='fade-right'/>
            <img src='wishes.png' alt='plane' className='wishes' data-aos='fade-left'/>
            <img src='superHero 1.png' alt='hero' className='hero' data-aos='fade-left'/>
            <img src='/dots.png' alt='look'  className='course-stars' data-aos='fade-left'/>
            <img src='/birdies.png' alt='birds'  className='course-birdies' data-aos='fade-right'/>
            <div className='demo-container' data-aos='fade-up'>
                <h2 className='demo-title'>Courses We Offer!</h2>
                <p className='demo-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo exercitationem maxime rerum obcaecati in iste corporis modi voluptatem. Illum, sint quibusdam praesentium quia animi unde debitis a modi repellat exercitationem.</p>
                <button className='demo-register'>Demo Class</button>
            </div>
            
            <div className='course-sectioon'>
            <div className='course-holder' data-aos='fade-up'>
                <img src='about3.jpg' alt='about' className='course-image'/>
                <div className='course-info' id='course-info'>
                <div className='course-title' id='course-title'>Seed 1 (4 years)</div>
                <h2 className='course-subTitle'id='course-subTitle'>Total time: 8 months</h2>
                <ul className='course-list'>
                    <li className='course-item'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo minus, iure.</li>
                    <li className='course-item'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo minus, iure.</li>
                    <li className='course-item'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo minus, iure.</li>
                    <li className='course-item'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo minus, iure.</li>
                </ul>
                <button className='demo-register'>Demo Class</button>
                </div>
                <div className='course-overlay' id='course-overlay'/>
            </div>

            <div className='course-holder' data-aos='fade-up'>
            <img src='about2.jpg' alt='about' className='course-image'/>
            <div className='course-info' id='course-info'>
                <div className='course-title' id='course-title'>Seed 1 (4 years)</div>
                <h2 className='course-subTitle'id='course-subTitle'>Total time: 8 months</h2>
                <ul className='course-list'>
                    <li className='course-item'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo minus, iure.</li>
                    <li className='course-item'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo minus, iure.</li>
                    <li className='course-item'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo minus, iure.</li>
                    <li className='course-item'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo minus, iure.</li>
                </ul>
                <button className='demo-register'>Demo Class</button>
                </div>
                <div className='course-overlay' id='course-overlay'/>
            </div>

            <div className='course-holder' data-aos='fade-up'>
            <img src='about1.jpg' alt='about' className='course-image'/>
            <div className='course-info' id='course-info'>
                <div className='course-title' id='course-title'>Seed 1 (4 years)</div>
                <h2 className='course-subTitle'id='course-subTitle'>Total time: 8 months</h2>
                <ul className='course-list'>
                    <li className='course-item'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo minus, iure.</li>
                    <li className='course-item'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo minus, iure.</li>
                    <li className='course-item'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo minus, iure.</li>
                    <li className='course-item'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo minus, iure.</li>
                </ul>
                <button className='demo-register'>Demo Class</button>
                </div>
                <div className='course-overlay' id='course-overlay'/>
            </div>

            <div className='course-holder' data-aos='fade-up'>
            <img src='image 5.jpg' alt='about' className='course-image'/>
            <div className='course-info' id='course-info'>
                <div className='course-title' id='course-title'>Seed 1 (4 years)</div>
                <h2 className='course-subTitle'id='course-subTitle'>Total time: 8 months</h2>
                <ul className='course-list'>
                    <li className='course-item'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo minus, iure.</li>
                    <li className='course-item'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo minus, iure.</li>
                    <li className='course-item'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo minus, iure.</li>
                    <li className='course-item'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo minus, iure.</li>
                </ul>
                <button className='demo-register'>Demo Class</button>
                </div>
                <div className='course-overlay' id='course-overlay'/>
            </div>

            <div className='course-holder' data-aos='fade-up'>
            <img src='image4.jpg' alt='about' className='course-image'/>
            <div className='course-info' id='course-info'>
                <div className='course-title' id='course-title'>Seed 1 (4 years)</div>
                <h2 className='course-subTitle'id='course-subTitle'>Total time: 8 months</h2>
                <ul className='course-list'>
                    <li className='course-item'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo minus, iure.</li>
                    <li className='course-item'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo minus, iure.</li>
                    <li className='course-item'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo minus, iure.</li>
                    <li className='course-item'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo minus, iure.</li>
                </ul>
                <button className='demo-register'>Demo Class</button>
                </div>
                <div className='course-overlay' id='course-overlay'/>
            </div>

            <div className='course-holder' data-aos='fade-up'>
            <img src='image3.jpg' alt='about' className='course-image'/>
            <div className='course-info' id='course-info'>
                <div className='course-title' id='course-title'>Seed 1 (4 years)</div>
                <h2 className='course-subTitle'id='course-subTitle'>Total time: 8 months</h2>
                <ul className='course-list'>
                    <li className='course-item'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo minus, iure.</li>
                    <li className='course-item'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo minus, iure.</li>
                    <li className='course-item'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo minus, iure.</li>
                    <li className='course-item'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo minus, iure.</li>
                </ul>
                <button className='demo-register'>Demo Class</button>
                </div>
                <div className='course-overlay' id='course-overlay'/>
            </div>

            <div className='course-holder' data-aos='fade-up'>
            <img src='image2.jpg' alt='about' className='course-image'/>
            <div className='course-info' id='course-info'>
                <div className='course-title' id='course-title'>Seed 1 (4 years)</div>
                <h2 className='course-subTitle'id='course-subTitle'>Total time: 8 months</h2>
                <ul className='course-list'>
                    <li className='course-item'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo minus, iure.</li>
                    <li className='course-item'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo minus, iure.</li>
                    <li className='course-item'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo minus, iure.</li>
                    <li className='course-item'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo minus, iure.</li>
                </ul>
                <button className='demo-register'>Demo Class</button>
                </div>
                <div className='course-overlay' id='course-overlay'/>
            </div>

            <div className='course-holder ' data-aos='fade-in'>
            <img src='image1.jpg' alt='about' className='course-image'/>
            <div className='course-info' id='course-info'>
                <div className='course-title' id='course-title'>Seed 1 (4 years)</div>
                <h2 className='course-subTitle'id='course-subTitle'>Total time: 8 months</h2>
                <ul className='course-list'>
                    <li className='course-item'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo minus, iure.</li>
                    <li className='course-item'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo minus, iure.</li>
                    <li className='course-item'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo minus, iure.</li>
                    <li className='course-item'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo minus, iure.</li>
                </ul>
                <button className='demo-register'>Demo Class</button>
                </div>
                <div className='course-overlay' id='course-overlay'/>
            </div>
            </div>
            <Footer6 />
        </div>
    )
}

export default Services
