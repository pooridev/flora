import React from 'react'
import SingleAccordion from '../common/SingleAccordion'
import ProductDetailReview from './productDetailReview'

const PhoneProductDetailacordion = () => {
    return (
        <div className='container'>
                <SingleAccordion  title="DESCRIPTION">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel nisl tempus enim elementum lacinia consectetur maecenas scelerisque. Elit urna sed enim tellus malesuada blandit et, integer lectus. 
                 </SingleAccordion>
                 <SingleAccordion title="ADDITIONAL INFORMATION">
                 </SingleAccordion>
                 <SingleAccordion title="REVIEWS(0)">
                     <ProductDetailReview />
                 </SingleAccordion>
        </div>
    )
}

export default PhoneProductDetailacordion
