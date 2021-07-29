import React from 'react'
import ReviewForm from './ReviewForm'
import Profile from '../../assets/image/singleProduct/Profile.png'
import Rating from '@material-ui/lab/Rating';

const ProductDetailReview = () => {
    const comment = [
      {
          id:1,
          profile:Profile,
          name:'parisa',
          text:'Lorem Episom lekn kiwas lequw'
      }
    ]
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
                               i => 
                               <div className='ProductDetailReview__comment'>
                                   
                                        <img src={i.profile}/>
                                        <div className='ProductDetailReview__commentinfo'>
                                        <Rating
                                             name="simple-controlled"
                                             readonly
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
            <ReviewForm reviewNum/>
        </div>
    )
}

export default ProductDetailReview
