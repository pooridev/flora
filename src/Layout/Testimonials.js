import React, { useEffect, useState } from 'react'
import HeaderShowcase from '../component/common/HeaderShowcase'
import background from '../assets/image/Testimonials/composition-wonderful-colourful-blooms 1.png'
import UserCommentSlider from '../component/Testimonials/UserCommentSlider'
import UserCommentGrid from '../component/Testimonials/UserCommentGrid'
import UseWindowSize from '../Sizes/UseWindowSize'
import { Link } from 'react-router-dom'
import resbackimg from '../assets/image/responsive/Testomonial.png'
import { getTestimonialsReq } from 'queries/testimonials'
import Spinner from 'component/common/Spinner'

const Header = () => {
	const windowSize = UseWindowSize()

	return (
		<div className='header_title' style={{ textAlign: 'left' }}>
			<h2>Testimonials</h2>
			{windowSize === 'xs' ? (
				<></>
			) : (
				<div className='d-flex'>
					<Link to='/'>
						<p>HOME </p>
					</Link>

					<p>/ TESTIMONIALS</p>
				</div>
			)}
		</div>
	)
}

const Testimonials = () => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true)
		window.scrollTo(0, 0)
		getTestimonialsReq().then(({ data }) => {
			setLoading(false)
			setData(data.result)
		}).catch(err => setLoading(false))
	}, [])
	return (
		<div>
			<HeaderShowcase resbackimg={resbackimg} backimg={background}>
				<Header />
			</HeaderShowcase>
			{
				loading && <div className="center"><Spinner /></div>
			}
			{
				!loading && <UserCommentGrid comments={data} />
			}
			
		</div>
	)
}

export default Testimonials
