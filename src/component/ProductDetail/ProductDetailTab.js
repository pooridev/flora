import React, {useState} from 'react'
import ProductDetailReview from './productDetailReview';
import ProductAdditionalInfo from './ProductAdditionalInfo';

const ProductDetailTab = ({detail, reviews, getReviews}) => {
    const [tab, settab] = useState(1);
    const tablist = [
        {
            tab: 'DESCRIPTION',
            id: 1
        },
        {
            tab: 'ADDITIONAL INFORMATION',
            id: 2
        },
        {
            tab: `REVIEWS(${reviews.length})`,
            id: 3
        },
    ]
    return (
        <section className='ProductDetailTab-sec'>
            <div className='container'>
                <div className='ProductDetailTab'>
                    <div className='ProductDetailTab__head'>
                        {
                            tablist.map(
                                (i, key) =>
                                    <div
										key={key}
                                        onClick={() => settab(i.id)} className={`FeaturedProduct__tabhead--title
                            ${i.id === tab ? 'product-active-tabfeature' : null}`
                                    }>
                                        {i.tab}
                                        <div className='product-tabtitlehover'/>
                                    </div>
                            )

                        }
                    </div>
                    <div className='ProductDetailTab__container'>
                        {
                            tab === 1 ?
                                <div className='ProductDetailTab__description'>
                                    <p>
										{detail['description']}
                                    </p>
                                </div> :
                                tab === 2 ?
                                    <div className='ProductDetailTab__additional'>
                                        <ProductAdditionalInfo detail={detail} />
										{/* {
											Object.keys(detail['general_attributes']).map((element, key) => {
												return (
													<p key={key}>
														<b>{element}: </b> {detail['general_attributes'][element]}
													</p>
												)
											})
										} */}
                                    </div> : <ProductDetailReview detail={detail} reviews={reviews} getReviews={getReviews}/>
                        }
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ProductDetailTab
