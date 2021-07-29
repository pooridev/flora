import React from 'react'
import HeaderShowcase from '../component/common/HeaderShowcase'
import ContactusInfo from '../component/contactus/ContactusInfo'
import background from '../assets/image/contactus/roses.png'
const Header =()=>{
    return(
        <div className='cart-title'>
       <h2>Contact us</h2>
      </div>
    )
}
const ContactUs = () => {
    return (
        <div>
             <HeaderShowcase backimg={background}>
              <Header />
             </HeaderShowcase>
            <ContactusInfo />
        </div>
    )
}

export default ContactUs
