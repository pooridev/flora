import React from 'react'
import ServiceContainer from '../component/Services/ServiceContainer'
import HeaderShowcase from '../component/common/HeaderShowcase'
import background from '../assets/image/services/woman-holding-branch-snow-willow-flower 1.png'
const Header =()=>{
    return(
        <div className='cart-title'>
       <h2>Services</h2>
      </div>
    )
}
const Services = () => {
    return (
        <div>
            <HeaderShowcase backimg={background}>
              <Header />
             </HeaderShowcase>
            <ServiceContainer/>
        </div>
    )
}

export default Services
