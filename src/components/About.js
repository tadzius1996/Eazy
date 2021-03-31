import React, {useEffect} from 'react'
import './About.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Reviews() {

  useEffect(() => {
    Aos.init({duration: 3000});
  }, []);

    return (
        <>
        <div className='review'>
          <img className='ballons' src='/ballons 12.png' alt='ballons' data-aos='fade-up'/>
        
        <div class="custom-shape-divider-top-1616377103">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
        </div>
        <div className='about-container'>
        <div className='about-us'>
        <h1 className='about-us-title' data-aos='fade-up'>Welcome</h1>
        <div className='about-section'>
            <img src='/image2.jpg' alt="about-image" className='about-image' data-aos='fade-up'/>
            <p className='about-text' data-aos='fade-up'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, culpa id. Quisquam similique nihil perferendis modi eum molestias. Eum, esse repellendus mollitia distinctio nemo hic soluta a? Similique, aliquid omnis?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, culpa id. Quisquam similique nihil perferendis modi eum molestias. Eum, esse repellendus mollitia distinctio nemo hic soluta a? Similique, aliquid omnis?<br /><br/>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, culpa id. Quisquam similique nihil perferendis modi eum molestias. Eum, esse repellendus mollitia distinctio nemo hic soluta a? Similique, aliquid omnis?</p>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default Reviews
