import React from 'react'
import './Footer2.css'
import {AiOutlineFacebook} from 'react-icons/ai'
import {AiOutlinePhone} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'

function Footer2() {
    return (
        <div className='footer2'>
            <div className='footerContent2'>
            <a href='https://www.facebook.com/ezhalong/'  className='footerText2'><AiOutlineFacebook/></a>
            <a href=''  className='footerNumber2'><AiOutlinePhone/></a>
            <a href=''  className='footerText2'><AiOutlineMail/></a>
            <h1 className='footerDesign2'><BsPerson/></h1>
            </div>

            <div class="xcccccustom-shape-divider-bottom-1616461942">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
    </svg>
</div>
            
            
        </div>
    )
}

export default Footer2
