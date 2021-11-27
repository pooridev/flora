import React from 'react'
import { Configs } from '../../configs'

const SliderCommentCart = ({ profile, text, name }) => {
	return (
		<div className='SliderCommentCart'>
			<img
				alt='hw'
				src={
					profile
						? `${Configs.API_URL}/${profile.thumbnail_url}`
						: '/blank_image.png'
				}
			/>
			{/* <Rating
                name="simple-controlled"
                value={rate}
                size="large"

            /> */}
			<p className='SliderCommentCart__text'>{text}</p>
			<p className='SliderCommentCart__name'>{name}</p>
		</div>
	)
}

export default SliderCommentCart
