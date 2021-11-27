import React from 'react'
import SectionTitle from '../common/SectionTitle'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import leftarrow from '../../assets/image/home/icon/black-left-arrow.png'
import rightarrow from '../../assets/image/home/icon/black-right-arrow.png'
import SliderCommentCart from '../common/SliderCommentCart'
import UseWindowSize from '../../Sizes/UseWindowSize'
import PhoneUserCommentSlider from './PhoneUserCommentSlider'

class UserCommentSliderContainer extends React.Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 3,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
		}
		return (
			<div className='container-x'>
				<Slider {...settings}>
					{this.props.comments.map(i => (
						<SliderCommentCart
							profile={i.author_image}
							text={i.text}
							name={i.author_name}
						/>
					))}
				</Slider>
			</div>
		)
	}
}

function SampleNextArrow(props) {
	const { onClick } = props
	return (
		<img
			alt='arrow'
			className='Insta-arrow Insta-right-arrow-slider'
			onClick={onClick}
			src={rightarrow}
		/>
	)
}

function SamplePrevArrow(props) {
	const { onClick } = props
	return (
		<img
			alt='arrow'
			className=' Insta-arrow Insta-left-arrow-slider'
			onClick={onClick}
			src={leftarrow}
		/>
	)
}

const UserCommentSlider = ({ comments }) => {
	const windowSize = UseWindowSize()

	return (
		<section>
			<SectionTitle
				title='WHAT USERS SAY ABOUT US'
				pretitle='we care about you'
				subtitle=''
			/>
			<div className='UserCommentSlider'>
				{windowSize === 'xs' ? (
					<PhoneUserCommentSlider CommentList={comments} />
				) : (
					<UserCommentSliderContainer comments={comments} />
				)}
			</div>
		</section>
	)
}

export default UserCommentSlider
