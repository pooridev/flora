import React, {useEffect} from 'react'
import HeaderShowcase from '../component/common/HeaderShowcase'
import OurStoryContainer from '../component/ourstory/OurStoryContainer';
import UseWindowSize from '../Sizes/UseWindowSize'
import background from '../assets/image/ourstory/palm-leaves-white-background-with-copy-space 1.png'
import {Link} from 'react-router-dom';
import resbackimg from '../assets/image/responsive/OurStory.png'

const Header = () => {
    const windowSize = UseWindowSize()
    return (
        <div className='header_title' style={{textAlign: 'left'}}>
            <h2>Our story</h2>
            {windowSize === 'xs' ? <> </> : <div className='d-flex xs-opacity0'>
                <Link to='/'><p>HOME </p></Link>

                <p>/ OUR STORY</p>
            </div>}
        </div>
    )
}
const OurStory = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <HeaderShowcase resbackimg={resbackimg} backimg={background}>
                <Header/>
            </HeaderShowcase>
            <OurStoryContainer/>
        </div>
    )
}

export default OurStory
