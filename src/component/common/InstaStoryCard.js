import React from 'react'
import hear from '../../assets/image/home/icon/like.svg';
import cm from '../../assets/image/home/icon/sm.svg';

const InstaStoryCard = ({src,comment,like}) => {
    return (
        <div className='InstaStoryCard relative'>
            <img className='InstaStoryCard__img' src={src}/>
            <div className='InstaStoryCard__hoverbox'>
               <div className='d-flex-spacebetween InstaStoryCard__info'>
                     <div className='d-flex'>
                          <img src={hear} />
                          <p>{like}</p>
                     </div>
                     <div className='d-flex'>
                          <img src={cm} />
                          <p>{comment}</p>
                     </div>
               </div>
            </div>
        </div>
    )
}

export default InstaStoryCard
