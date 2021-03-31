import React from 'react'
import './Footer3.css'
import {AiOutlineFacebook} from 'react-icons/ai'
import {AiOutlinePhone} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'

function Footer3() {
    return (
        <div className='footer3'>
            <div className='footerContent3'>
            <a href='https://www.facebook.com/ezhalong/'  className='footerText2'><AiOutlineFacebook/></a>
            <a href=''  className='footerNumber2'><AiOutlinePhone/></a>
            <a href=''  className='footerText2'><AiOutlineMail/></a>
            <h1 className='footerDesign2'><BsPerson/></h1>
            </div>

           
            
            
        </div>
    )
}

export default Footer3
