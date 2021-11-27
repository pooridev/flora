import React from 'react'
import SliderCommentCart from '../common/SliderCommentCart'

const PhoneUserCommentSlider = ({ CommentList }) => {
	return (
		<div className='container'>
			<div className='PhoneUserCommentSlider'>
				{CommentList.map(i => (
					<SliderCommentCart
						profile={i.author_image}
						text={i.text}
						name={i.author_name}
					/>
				))}
			</div>
		</div>
	)
}

export default PhoneUserCommentSlider
