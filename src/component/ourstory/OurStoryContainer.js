import React from 'react'
import profile from '../../assets/image/ourstory/Ellipse 13.png'
import icon1 from '../../assets/image/ourstory/Ellipse 14.svg'
import icon2 from '../../assets/image/ourstory/Ellipse 15.svg';
import image1 from '../../assets/image/ourstory/Rectangle 69.png';
import image2 from '../../assets/image/ourstory/Rectangle 70.png';

const OurStoryContainerIconBox = ({src, title, text}) => {
    return (
        <div className='OurStoryContainerIconBox d-flex'>
            <img alt='hw' src={src}/>
            <div>
                <p className='OurStoryContainerIconBox__title'>{title}</p>
                <p className='OurStoryContainerIconBox__text'>{text}</p>
            </div>
        </div>
    )
}
const OurStoryContainer = () => {
    return (
        <div className='container'>
            <div className='OurStoryContainer'>
                <div className='OurStoryContainer__firstrow '>
                    <div className='OurStoryContainer__cotation'>
                        <img alt='hw' src={profile}/>
                        <p className='OurStoryContainer__qoute'>People will forget what you said. They will forget what
                            you did.
                            But they will never forget how you made them feel.</p>
                        <p className='OurStoryContainer__name'>
                            By Maya Angelou - Mike Sims
                        </p>
                    </div>
                    <div className='OurStoryContainer__iconSec'>
                        <OurStoryContainerIconBox
                            src={icon1}
                            title='Happy clients'
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Id vehicula semper velit maecenas eu.'
                        />
                        <OurStoryContainerIconBox
                            src={icon2}
                            title='Finished works'
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Id vehicula semper velit maecenas eu.'
                        />
                    </div>
                </div>
                <div className='OurStoryContainer__secrow '>

                    <img alt='hw' src={image1}/>
                    <img alt='hw' src={image2}/>
                    <div className='OurStoryContainer__textbox'>
                        <h3>
                            We create the most beautiful flowers in Dubai and help you to find your favorite here ...
                        </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus enim, phasellus diam turpis
                            lectus. Aliquet lectus volutpat et, nunc dictumst interdum. Congue rhoncus sagittis ultrices
                            faucibus eros tortor arcu gravida a. Leo, hac elementum, eget euismod. Ornare neque nullam
                            cursus id purus euismod ipsum. </p>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default OurStoryContainer
