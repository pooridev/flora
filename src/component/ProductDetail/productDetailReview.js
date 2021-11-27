import React from 'react'
import ReviewForm from './ReviewForm'
import Profile from '../../assets/image/user.png'
import Rating from '@material-ui/lab/Rating';

const ProductDetailReview = ({reviews, detail, getReviews}) => {
    const comment = reviews.map((item) => ({
		id: item.id,
		profile: Profile,
		name: item['user'] ? item['first_name'] + ' ' + item['last_name'] : 'Unknown',
		text: item['review'],
		rate: item['rate'] || 5
	}))
    return (
        <div className='ProductDetailReview '>
            <div className='ProductDetailReview__main'>
                <div className='ProductDetailReview__header'>
                    <p>
                        REVIEWS
                    </p>
                </div>
                <div className='ProductDetailReview__commentlist'>
                    {
                        comment.length !== 0 ?
                            comment.map(
                                (i, key) =>
                                    <div key={key} className='ProductDetailReview__comment'>

                                        <img alt='profile' src={i.profile}/>
                                        <div className='ProductDetailReview__commentinfo'>
                                            <Rating
                                                name="simple-controlled"
                                                readOnly
                                                value={i.rate}
                                                size="large"
                                            />
                                            <p>{i.text}</p>
                                        </div>


                                    </div>
                            )


                            :
                            <p>
                                There are no reviews yet.

                            </p>
                    }
                </div>
            </div>
            <ReviewForm product_id={detail.id} getReviews={getReviews}/>
        </div>
    )
}

export default ProductDetailReview
