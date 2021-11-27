import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import leftarrow from '../../assets/image/home/icon/left-arrow.svg'
import rightarrow from '../../assets/image/home/icon/right-arrow.svg'
import { Configs } from 'configs'

const HomeLeftSlidCart = ({ img, url }) => {
	const trimedURL = url.split('/')
	const bannerURL = `${trimedURL[3]}/${trimedURL[4]}`
	return (
		<div className='HomeLeftSlidCart'>
			{/* <h2>{title}</h2> */}
			<img
				alt='hw'
				src={
					img ? `${Configs.API_URL}/${img.thumbnail_url}` : '/blank_image.png'
				}
			/>
			<Link to={bannerURL} className='btn btn-primary'>
				GO TO SHOP
			</Link>
			{/* <p>0{index}</p> */}
		</div>
	)
}

const SliderCard = ({ img, url }) => {
	return (
		<div className='SliderCard'>
			<HomeLeftSlidCart url={url} img={img} />
			{/* <div>
				<img
					alt='hw'
					className='SliderCard-image'
					style={{ width: '100%' }}
					src={pic1}
				/>
			</div> */}
		</div>
	)
}

class HomeSliderShowcas extends React.Component {
	state = {
		activeSlide: 0,
		activeSlide2: 0,
	}

	render() {
		const settings = {
			appendDots: dots => (
				<div style={{}}>
					<ul style={{ margin: '0px' }}> {dots} </ul>
				</div>
			),
			customPaging: i => (
				<div className='custompaging'>
					<p>0{i + 1}</p>
					<div className='before-dot'></div>
				</div>
			),
			className: 'slider variable-width',
			dots: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
			beforeChange: (current, next) => this.setState({ activeSlide: next }),
			dotsClass: 'slick-dots slick-thumb',
		}
		return (
			<section className='relative'>
				<div className='container'>
					<Slider {...settings}>
						{this.props.banners.map(({ file, target_url }) => (
							<SliderCard
								img={file}
								url={target_url}
								activeSlide={this.state.activeSlide + 1}
							/>
						))}
					</Slider>
				</div>
			</section>
		)
	}
}

export default HomeSliderShowcas

function SampleNextArrow(props) {
	const { onClick } = props
	return (
		<img
			alt='hw'
			className='slider-arrow right-arrow-slider'
			src={rightarrow}
			onClick={onClick}
		/>
	)
}

function SamplePrevArrow(props) {
	const { onClick } = props
	return (
		<img
			alt='hw'
			className='slider-arrow left-arrow-slider'
			src={leftarrow}
			onClick={onClick}
		/>
	)
}
