import React from 'react'
import './Footer6.css'
import {AiOutlineFacebook} from 'react-icons/ai'
import {AiOutlinePhone} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'

function Footer6() {
    return (
        <div className='footer6'>
            <div className='footerContent6'>
            <a href='https://www.facebook.com/ezhalong/'  className='footerText3'><AiOutlineFacebook/></a>
            <a href=''  className='footerNumber3'><AiOutlinePhone/></a>
            <a href=''  className='footerText3'><AiOutlineMail/></a>
            <h1 className='footerDesign3'><BsPerson/></h1>
            </div>

           
            
            
        </div>
    )
}

export default Footer6
