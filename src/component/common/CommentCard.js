import Rating from '@material-ui/lab/Rating'
import React from 'react'

const CommentCard = ({profile,rate,text,name}) => {
    return (
        <div className='CommentCard'>
           <div className='d-flex'>
             <img src={profile}/>
             <div className='CommentCard__info'>
             <p className='CommentCard__name'>
                    {name}
                    </p>
                    <p  className='CommentCard__middleinfo'>Google inc</p>
                  <Rating
                    name="simple-controlled"
                    value={rate}
                    size="large"
                      />
                    
                  
             </div>
           </div>
                  <div className='CommentCard__textbox'>
                  <p className='CommentCard__text'>
                        {text}
                    </p>
                  </div>
                
        </div>
    )
}

export default CommentCard