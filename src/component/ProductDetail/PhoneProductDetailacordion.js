import React from 'react'
import SingleAccordion from '../common/SingleAccordion'
import ProductDetailReview from './productDetailReview'

const PhoneProductDetailacordion = ({detail, reviews, getReviews}) => {
    return (
        <div className='container'>
            <SingleAccordion title="DESCRIPTION">
				{detail['description']}
            </SingleAccordion>
            <SingleAccordion title="ADDITIONAL INFORMATION">
				{
					Object.keys(detail['general_attributes']).map((element, key) => {
						return (
							<p key={key}>
								<b>{element}: </b> {detail['general_attributes'][element]}
							</p>
						)
					})
				}
            </SingleAccordion>
            <SingleAccordion title={`REVIEWS(${reviews.length})`}>
                <ProductDetailReview detail={detail} reviews={reviews} getReviews={getReviews}/>
            </SingleAccordion>
        </div>
    )
}

export default PhoneProductDetailacordion
