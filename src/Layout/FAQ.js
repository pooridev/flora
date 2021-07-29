import React from 'react'
import FaqContainer from '../component/FAQ/FaqContainer';
import HeaderShowcase from '../component/common/HeaderShowcase'
import background from '../assets/image/faq/woman-holding-branch-snow-willow-flower 1.png'
const Header =()=>{
    return(
   <div className='header_title' style={{textAlign:'left'}}>
       <h2>FAQ</h2>
     <div className='d-flex xs-opacity0'>
        <p >HOME </p>
  
        <p>/FAQ</p>
      </div>
   </div>
    )
}
const FAQ = () => {
    return (
        <div>
              <HeaderShowcase backimg={background}  >
                <Header />
              </HeaderShowcase>
            <FaqContainer/>
        </div>
    )
}

export default FAQ
