import React from 'react'
import SliderCommentCart from '../common/SliderCommentCart'

const PhoneUserCommentSlider = ({CommentList}) => {
    return (
        <div className='container'>
            <div className='PhoneUserCommentSlider'>
              { CommentList.map(i=><SliderCommentCart
          profile={i.profile}
          rate={i.rate}
          text={i.text}
          name={i.name}
          />)}
          </div>
        </div>
    )
}

export default PhoneUserCommentSlider
