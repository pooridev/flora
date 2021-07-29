import React from 'react'
import HeaderShowcase from '../component/common/HeaderShowcase';
import background from '../assets/image/Testimonials/composition-wonderful-colourful-blooms 1.png'
import UserCommentSlider from '../component/Testimonials/UserCommentSlider';
import UserCommentGrid from '../component/Testimonials/UserCommentGrid';
import UseWindowSize from '../Sizes/UseWindowSize'

const Header =()=>{
    const windowSize = UseWindowSize()
    return(
   <div className='header_title' style={{textAlign:'left'}}>
       <h2>Testimonials</h2>
    {windowSize === 'xs' ?
    <></>:
         <div className='d-flex'>
         <p >HOME </p>
   
         <p>/TESTIMONIALS</p>
       </div>
    }
   </div>
    )
}
const Testimonials = () => {
    return (
        <div>
            
           <HeaderShowcase backimg={background}  >
                <Header />
           </HeaderShowcase>
           <UserCommentSlider />
           <UserCommentGrid />
           
        </div>
    )
}

export default Testimonials
