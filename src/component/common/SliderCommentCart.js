import Rating from '@material-ui/lab/Rating'
import React from 'react'

const SliderCommentCart = ({profile,rate,text,name}) => {
    return (
        <div className='SliderCommentCart'>
            <img src={profile}/>
            <Rating
                      name="simple-controlled"
                      value={rate}
                      size="large"
                      
                    />
                    <p className='SliderCommentCart__text'>
                        {text}
                    </p>
                    <p className='SliderCommentCart__name'>
                        {name}
                    </p>
        </div>
    )
}

export default SliderCommentCart
