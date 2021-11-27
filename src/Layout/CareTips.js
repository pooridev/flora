import React, {useEffect} from 'react'
import ServiceContainer from '../component/Services/ServiceContainer'
import HeaderShowcase from '../component/common/HeaderShowcase'
import resbackimg from '../assets/image/responsive/Service.png'
import background from '../assets/image/services/woman-holding-branch-snow-willow-flower 1.png'

const Header = () => {
    return (
        <div className='cart-title'>
            <h2>Care Tips</h2>
        </div>
    )
}
const CareTips = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <HeaderShowcase resbackimg={resbackimg} backimg={background}>
                <Header/>
            </HeaderShowcase>
            <ServiceContainer/>
        </div>
    )
}

export default CareTips
