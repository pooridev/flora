import React, {useState} from 'react'
import HeaderShowcase from '../component/common/HeaderShowcase'
import ContactusInfo from '../component/contactus/ContactusInfo'
import background from '../assets/image/contactus/roses.png'
import resbackimg from '../assets/image/responsive/contactus.png'

import ContactusModal from '../component/contactus/ContactusModal'

const Header = () => {
    return (
        <div className='cart-title'>
            <h2>Contact us</h2>
        </div>
    )
}
const ContactUs = () => {
    return (
        <div>
            <HeaderShowcase resbackimg={resbackimg} backimg={background}>
                <Header/>
            </HeaderShowcase>
            <ContactusInfo/>
        </div>
    )
}

export default ContactUs
