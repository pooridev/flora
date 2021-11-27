import React from 'react'
import { Configs } from '../../configs'

const CommentCard = ({ profile, text, name }) => {
	return (
		<div className='CommentCard'>
			<div className='d-flex'>
				<img
					alt='comment'
					src={`${Configs.API_URL}/${profile.thumbnail_url}` ?? ''}
				/>
				<div className='CommentCard__info'>
					<p className='CommentCard__name'>{name}</p>
					<p className='CommentCard__middleinfo'>Google inc</p>
					{/* <Rating
                        name="simple-controlled"
                        value={rate}
                        size="large"
                    /> */}
				</div>
			</div>
			<div className='CommentCard__textbox'>
				<p className='CommentCard__text'>{text}</p>
			</div>
		</div>
	)
}

export default CommentCard
