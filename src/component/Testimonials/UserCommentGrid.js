import React from 'react'
import image1 from '../../assets/image/Testimonials/Pic 1.png'
import image2 from '../../assets/image/Testimonials/Pic 2.png'
import image3 from '../../assets/image/Testimonials/Pic 3.png'
import UseWindowSize from '../../Sizes/UseWindowSize'
import CommentCard from '../common/CommentCard'
import PhoneUserCommentGrid from './PhoneUserCommentGrid'

const CommentList = [
	{
		profile: image1,
		rate: 4,
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tellus ac volutpat blandit lacinia ornare. Elit ultrices duis pretium parturient dui.Mauris purus, commodo viverra pellentesque. Sit auctor porttitor velit.Elit ultrices duis pretium parturient dui.Mauris purus, commodo viverra pellentesque. Sit auctor porttitor velit.',
		name: 'Esther Howard',
	},
	{
		profile: image2,
		rate: 2,
		text: 'Lorem  ac volutpat blandit lacinia ornare. Elit ultrices duis pretium parturient dui.Mauris purus, commodo viverra pellentesque. Sit auctor porttitor velit.Elit ultrices duis pretium parturient dui.Mauris purus, commodo viverra pellentesque. Sit auctor porttitor velit.',
		name: 'Jacob Jones',
	},
	{
		profile: image3,
		rate: 4,
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tellus ac volutpat blandit lacinia ornare. Elit ultrices duis pretium parturient dui.Mauris purus, commodo viverra pellentesque. Sit auctor porttitor velit.Elit ultrices duis pretium parturient dui.Mauris purus, commodo viverra pellentesque. Sit auctor porttitor velit.',
		name: 'Darlene Robertson',
	},
	{
		profile: image1,
		rate: 4,
		text: 'Lorem ipsum  Suspendisse tellus ac volutpat blandit lacinia ornare. Elit ultrices duis pretium parturient dui.Mauris purus, commodo viverra pellentesque. Sit auctor porttitor velit.Elit ultrices duis pretium parturient dui.Mauris purus, commodo viverra pellentesque. Sit auctor porttitor velit.',
		name: 'Esther Howard',
	},
	{
		profile: image2,
		rate: 2,
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tellus ac volutpat blandit lacinia ornare. Elit ultrices duis pretium parturient dui.Mauris purus, commodo viverra pellentesque. Sit auctor porttitor velit.Elit ultrices duis pretium parturient dui.Mauris purus, commodo viverra pellentesque. Sit auctor porttitor velit.',
		name: 'Jacob Jones',
	},
	{
		profile: image3,
		rate: 4,
		text: 'Lorem ipsum dolor sit amet, tellus ac volutpat blandit lacinia ornare. Elit ultrices duis pretium parturient dui.Mauris purus, commodo viverra pellentesque. Sit auctor porttitor velit.Elit ultrices duis pretium parturient dui.Mauris purus, commodo viverra pellentesque. Sit auctor porttitor velit.',
		name: 'Darlene Robertson',
	},
]
const UserCommentGrid = ({ comments = [] }) => {
	const windowSize = UseWindowSize()

	return (
		<div className='container' style={{ marginTop: '2rem' }}>
			{windowSize === 'xs' ? (
				<PhoneUserCommentGrid CommentList={comments} />
			) : (
				<div className='UserCommentGrid'>
					{comments.map(i => (
						<CommentCard
							profile={i.author_image}
							rate={i.rate}
							text={i.text}
							name={i.author_name}
						/>
					))}
				</div>
			)}
		</div>
	)
}

export default UserCommentGrid
