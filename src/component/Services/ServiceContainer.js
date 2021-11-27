import React from 'react'
import img1 from '../../assets/image/services/Rectangle 71.png'
import img2 from '../../assets/image/services/Rectangle 72.png'
import img3 from '../../assets/image/services/Rectangle 73.png'

const ServiceCard = ({img, title, text}) => {
    return (
        <div className='ServiceCard d-flex'>
            <img alt='service' src={img}/>
            <div className='ServiceCard__textbox'>
                <h4>
                    {title}
                </h4>
                <p>
                    {text}
                </p>
            </div>
        </div>
    )
}
const ServiceContainer = () => {
    return (
        <div className='container'>
            <div className='ServiceContainer'>
                <div className='ServiceContainer__header'>
                    <h3>
                        Just by a few clicks, we send your favorite flowers
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel nisl tempus enim elementum lacinia
                        consectetur maecenas scelerisque. Elit urna sed enim tellus malesuada blandit et, integer
                        lectus. </p>
                </div>
                <div className='ServiceContainer__column'>
                    <ServiceCard
                        img={img1}
                        title='Fresh roses in box'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel nisl tempus enim elementum lacinia consectetur maecenas scelerisque. Elit urna sed enim tellus malesuada blandit et, integer lectus. '
                    />
                    <ServiceCard
                        img={img2}
                        title='Complete Range'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel nisl tempus enim elementum lacinia consectetur maecenas scelerisque. Elit urna sed enim tellus malesuada blandit et, integer lectus. '
                    />
                    <ServiceCard
                        img={img3}
                        title='Mix flowers in box'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel nisl tempus enim elementum lacinia consectetur maecenas scelerisque. Elit urna sed enim tellus malesuada blandit et, integer lectus. '
                    />
                </div>
            </div>
        </div>
    )
}

export default ServiceContainer
