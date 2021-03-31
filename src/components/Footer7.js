import React from 'react'
import './Footer7.css'
import {AiOutlineFacebook} from 'react-icons/ai'
import {AiOutlinePhone} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'

function Footer7() {
    return (
        <div className='footer7'>
            <div className='footerContent7'>
            <a href='https://www.facebook.com/ezhalong/'  className='hire-footerText3'><AiOutlineFacebook/></a>
            <a href=''  className='hire-footerNumber3'><AiOutlinePhone/></a>
            <a href=''  className='hire-footerText3'><AiOutlineMail/></a>
            <h1 className='hire-footerDesign3'><BsPerson/></h1>
            </div>

           
            
            
        </div>
    )
}

export default Footer7
