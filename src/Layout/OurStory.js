import React from 'react'
import HeaderShowcase from '../component/common/HeaderShowcase'
import OurStoryContainer from '../component/ourstory/OurStoryContainer';
import UseWindowSize from '../Sizes/UseWindowSize'
import background from '../assets/image/ourstory/palm-leaves-white-background-with-copy-space 1.png'
const Header =()=>{
    const windowSize = UseWindowSize()
    return(
   <div className='header_title' style={{textAlign:'left'}}>
       <h2>Our story</h2>
    {windowSize ==='xs'? <> </> : <div className='d-flex xs-opacity0'>
        <p >HOME </p>
  
        <p>/OUR STORY</p>
      </div>}
   </div>
    )
}
const OurStory = () => {
    return (
        <div>
            <HeaderShowcase backimg={background}  >
                <Header />
           </HeaderShowcase>
             <OurStoryContainer />
        </div>
    )
}

export default OurStory
