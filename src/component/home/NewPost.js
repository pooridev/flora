import React, { useEffect, useState } from 'react'
import SectionTitle from '../common/SectionTitle'
import image1 from '../../assets/image/home/newpost/beautiful-floral-bouquet-with-pink-roses-box-pink-background (1) 1.png'
import image2 from '../../assets/image/home/newpost/beautiful-floral-bouquet-with-pink-roses-box-pink-background (2) 1.png'
import profile from '../../assets/image/home/newpost/default.png'
import BlogCard from '../common/BlogCard'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import leftarrow from '../../assets/image/home/icon/black-left-arrow.png'
import rightarrow from '../../assets/image/home/icon/black-right-arrow.png'
import { getBlostPosts } from 'queries/blogPosts'

class PostSlider extends React.Component {
	render() {
		const settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 2,
			slidesToScroll: 2,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
			responsive: [
				{
					breakpoint: 1145,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						initialSlide: 1,
					},
				},
			],
		}
		return (
			<div>
				<Slider {...settings}>
					{this.props.data.slice(0, 5).map(
						(i, key) =>
							i.id && (
								<BlogCard
									key={key}
									id={i.id}
									src={i._embedded['wp:featuredmedia']['0'].source_url}
									title={i.title.rendered}
									author={i.author}
									date={i.date}
									authorepic={i.authorepic}
									comment={i.comment_status}
									cap={i.cap}
									cat={i.categories.length}
									link={i.link}
								/>
							)
					)}
				</Slider>
			</div>
		)
	}
}

const NewPost = ({ blogs }) => {
	return (
		<section className='Newpost-sec'>
			<SectionTitle
				title='Our New Posts'
				pretitle='SHARE BEST NEWS'
				subtitle='Will your clients accepHappen, not  always the way you like it, not always preferred.'
			/>
			<div className='container-x'>
				<div className='NewPost relative'>
					<PostSlider data={blogs} />
				</div>
			</div>
		</section>
	)
}

export default NewPost

function SampleNextArrow(props) {
	const { onClick } = props
	return (
		<img
			alt='hw'
			className='newpost-arrow newpost-right-arrow-slider'
			onClick={onClick}
			src={rightarrow}
		/>
	)
}

function SamplePrevArrow(props) {
	const { onClick } = props
	return (
		<img
			alt='hw'
			className=' newpost-arrow newpost-left-arrow-slider'
			onClick={onClick}
			src={leftarrow}
		/>
	)
}
