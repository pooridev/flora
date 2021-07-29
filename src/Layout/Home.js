import React from 'react'
import BestService from '../component/home/BestService'
import FeaturedProduct from '../component/home/FeaturedProduct'
import HomePic from '../component/home/HomePic'
import HomeSliderShowcas from '../component/home/HomeSliderShowcas'
import InstagramStory from '../component/common/InstagramStory'
import Logosbar from '../component/home/Logosbar'
import NewPost from '../component/home/NewPost'
import NewProduct from '../component/home/NewProduct'
import Propertiesbar from '../component/home/Propertiesbar'
import UseWindowSize from '../Sizes/UseWindowSize'
import PhonepropertiesBar from '../component/home/PhonepropertiesBar'
import PhoneLogoBar from '../component/home/PhoneLogoBar'
import PhoneHomePic from '../component/home/PhoneHomePic'
import PhoneBestService from '../component/home/PhoneBestService'

const Home = () => {
    const windowSize = UseWindowSize();

    return (
        <div>
             {
        windowSize === 'xs' ? 
        <PhonepropertiesBar />:
        <Propertiesbar/>

      }
          
            <HomeSliderShowcas />
            {
        windowSize === 'xs' ? 
        <PhoneLogoBar />:
        <Logosbar />

      }
        {  windowSize === 'xs' ? 
        <PhoneHomePic />:
        <HomePic />

      }
            <FeaturedProduct />
            <NewProduct />
            {  windowSize === 'xs' ? 
        <PhoneBestService />:
        <BestService />

      }
            <NewPost />
            
        </div>
    )
}

export default Home
