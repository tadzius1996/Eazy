import React, {useEffect} from 'react'
import Footer2 from './Footer2'
import './AboutUs.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

function AboutUs() {

  useEffect(() => {
    Aos.init({duration: 3000});
  }, []);

    return (
        <div className='aboutUs'>
          <div className='padding' />
            <div className='about-header'>
            <img src='/group4.png' alt='team'  className='team-group' data-aos='fade-up'/>
            <img src='/circlesColor.png' alt='circles'  className='circles' data-aos='fade-in'/>
            <div className='about-header-div' data-aos='fade-up'>
              <h3 className='about-header-title'>About Us</h3>
              <p className='about-header-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, saepe? Distinctio, in. Delectus iure sapiente aperiam, mollitia earum ratione.</p>
              </div>
            </div>
            <div className='about-place'>
                <div className='about-holder2'>
                  <img className='about-photo' src='/about1.jpg' alt='kids' data-aos='fade-up'/>
                  <div className='about-letters' data-aos='fade-up'>
                  <h3 className='about-title'>We Love Playing and Learning</h3>
                  <p className='about-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum omnis neque cumque dolores? Ea dolores adipisci veniam, ex omnis iste, illo dolorum consequuntur commodi nam, velit reprehenderit repellendus suscipit sint?<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum omnis neque cumque dolores? Ea dolores adipisci veniam, ex omnis iste, illo dolorum consequuntur commodi nam, velit reprehenderit repellendus suscipit sint?</p>
                  </div>
                </div>

                <div className='about-holder'>
                  <div className='about-letters-right' data-aos='fade-up'>
                  <h3 className='about-title2'>We Love Playing and Learning</h3>
                  <p className='about-desc2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum omnis neque cumque dolores? Ea dolores adipisci veniam, ex omnis iste, illo dolorum consequuntur commodi nam, velit reprehenderit repellendus suscipit sint?<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum omnis neque cumque dolores? Ea dolores adipisci veniam, ex omnis iste, illo dolorum consequuntur commodi nam, velit reprehenderit repellendus suscipit sint?</p>
                  </div>
                  <img className='about-photo' src='/about2.jpg' alt='kids' data-aos='fade-up'/>
                </div>

                <div className='about-holder2'>
                  <img className='about-photo' src='/about3.jpg' alt='kids' data-aos='fade-up'/>
                  <div className='about-letters' data-aos='fade-up'>
                  <h3 className='about-title'>We Love Playing and Learning</h3>
                  <p className='about-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum omnis neque cumque dolores? Ea dolores adipisci veniam, ex omnis iste, illo dolorum consequuntur commodi nam, velit reprehenderit repellendus suscipit sint?<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum omnis neque cumque dolores? Ea dolores adipisci veniam, ex omnis iste, illo dolorum consequuntur commodi nam, velit reprehenderit repellendus suscipit sint?</p>
                  </div>
                </div>

                <div className='about-holder'>
                  <div className='about-letters-right' data-aos='fade-in'>
                  <h3 className='about-title2'>We Love Playing and Learning</h3>
                  <p className='about-desc2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum omnis neque cumque dolores? Ea dolores adipisci veniam, ex omnis iste, illo dolorum consequuntur commodi nam, velit reprehenderit repellendus suscipit sint?<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum omnis neque cumque dolores? Ea dolores adipisci veniam, ex omnis iste, illo dolorum consequuntur commodi nam, velit reprehenderit repellendus suscipit sint?</p>
                  </div>
                  <img className='about-photo' src='/about4.jpg' alt='kids' data-aos='fade-up'/>
                </div>
            </div>
            <Footer2 />
        </div>
    )
}

export default AboutUs
