import React, {useEffect} from 'react'
import './Home.css'
import Reviews from './About'
import SocialMedia from './SocialMedia'
import Review from './Review'
import Footer from './Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'


function Home() {

  useEffect(() => {
    Aos.init({duration: 3000});
  }, []);

    return (
        <>
        <SocialMedia/>
        <div className='padding' />
        <div className='homeTitle' data-aos='fade-right'>
        <img src='/dots.png' alt='look'  className='home-stars' data-aos='fade-down'/>
        <img src='/dots.png' alt='look'  className='home-stars2' data-aos='fade-down'/>
        <img className='ballons-home' src='/ballons 12.png' alt='ballons' data-aos='fade-up'/>
        <h1 className='title'><span className='title-span'>Learn</span> English</h1>
        <span className='sub-title'>In a <span className='fun'>Fun</span> Way</span>
        <button className='title-btn'>Demo Class</button>
        </div>
        <div className="slidershow middle">

        <div className="slides">
          <input type="radio" name="r" id="r1"/>
          <input type="radio" name="r" id="r2"/>
          <input type="radio" name="r" id="r3"/>
          <input type="radio" name="r" id="r4"/>
          <input type="radio" name="r" id="r5"/>
          <div class="slide s1">
            <img src="/image1.jpg" alt="" className='image'/>
          </div>
          <div className="slide">
            <img src="/image3.jpg" alt="" className='image'/>
          </div>
          <div className="slide">
            <img src="/image 5.jpg" alt="" className='image'/>
          </div>
          <div className="slide">
            <img src="/image4.jpg" alt="" className='image'/>
          </div>
          <div className="slide">
            <img src="/about.jpg" alt="" className='image'/>
          </div>
        </div>
  
        <div className="navigation">
          <label for="r1" className="bar"></label>
          <label for="r2" className="bar"></label>
          <label for="r3" className="bar"></label>
          <label for="r4" className="bar"></label>
          <label for="r5" className="bar"></label>
        </div>
      </div>
      <Reviews />
      <Review />
      <Footer />
      </>
    )
}

export default Home
