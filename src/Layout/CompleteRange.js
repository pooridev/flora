import React, { useState } from 'react'
import Completerang from '../component/Rang/Completerang'
import HeaderShowcase from '../component/common/HeaderShowcase'
import background from '../assets/image/rang/woman-holding-branch-snow-willow-flower 1.png'
import ResponsiveFilter from '../component/Rang/ResponsiveFilter'
const Header =()=>{
    return(
        <div className='header_title' style={{textAlign:'center'}}>
        <h2>Complete Range</h2>
      <div className='d-flex xs-opacity0'>
         <p >HOME </p>
         <p>/SERVICES </p>
         <p>/Complete Range</p>
       </div>
    </div>
    )
}
const CompleteRange = () => {
    const [filternav, setFilterNav] = useState(false)
    const closenav =()=>{
        setFilterNav(false)
    }
    return (
        <div>
             <HeaderShowcase backimg={background}>
              <Header />
             </HeaderShowcase>
            <Completerang />
            {
                filternav ? 
                <ResponsiveFilter closenav={closenav} />
                :
                null
            }
        </div>
    )
}

export default CompleteRange
