import React from 'react'
import Rating from '@material-ui/lab/Rating';

const ReviewForm = ({reviewNum}) => {
    return (
        <div  className='ReviewForm'>
            <div className='ReviewForm__header'>
            {
                reviewNum !== 0 ?
               
                <p>
                    BE THE FIRST TO REVIEW “PENATIBUS PARTURIENT ORCI MORBI”

                </p>:
                 <p>
                     ADD A REVIEW
                 </p>
            }
            </div>
            <p className='ReviewForm__info'>Your email address will not be published. Required fields are marked *</p>
           <form className='ProductDetailReview__form'>
            <div className='ReviewForm__rate d-flex reviewform-row'>
                <label className='ReviewForm__label '>Your rating <span>*</span>:</label>
                <Rating
                      name="simple-controlled"
                      
                      size="large"
                    />
            </div>
            <div className='ReviewForm__review reviewform-row'>
                <label className='ReviewForm__label' >Your review <span>*</span>:</label>
                <textarea className='ReviewForm__textarea' rows='4'/>
            </div>
            <div className='ReviewForm__userInput reviewform-row'>
               <div className='ReviewForm__userInput-div'>
                 <label className='ReviewForm__label'  >Name <span>*</span>:</label>
                  <input className='ReviewForm__input'/>
               </div>
               <div className='ReviewForm__userInput-div'>
                 <label className=' ReviewForm__label' >Email <span>*</span>:</label>
                  <input className='ReviewForm__input'/>
               </div>
            </div>
            <button type='submit' className='btn third-btn'>
             SUBMIT
            </button>
           </form>
        </div>
    )
}

export default ReviewForm
