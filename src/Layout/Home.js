import React, { useState, useEffect } from 'react'
import BestService from '../component/home/BestService'
import FeaturedProduct from '../component/home/FeaturedProduct'
import HomePic from '../component/home/HomePic'
import HomeSliderShowcas from '../component/home/HomeSliderShowcas'
import Logosbar from '../component/home/Logosbar'
import NewPost from '../component/home/NewPost'
import NewProduct from '../component/home/NewProduct'
import UseWindowSize from '../Sizes/UseWindowSize'
import PhoneLogoBar from '../component/home/PhoneLogoBar'
import PhoneHomePic from '../component/home/PhoneHomePic'
import PhoneBestService from '../component/home/PhoneBestService'
import { getBannersReq } from 'queries/banners'
import { getBlostPosts } from 'queries/blogPosts'

const Home = () => {
	const windowSize = UseWindowSize()
	const [banners, setBanners] = useState([])
	const [blogs, setBlogs] = useState([])

	useEffect(() => {
		Promise.all([
			getBannersReq({}).then(({ data }) => {
				setBanners(data.result)
			}),
			getBlostPosts().then(data => {
				setBlogs(Object.keys(data).map(key => data[key]))
			}),
		])
	}, [])

	return (
		<div>
	

			<HomeSliderShowcas banners={banners} />
			{windowSize === 'xs' ? <PhoneLogoBar /> : <Logosbar />}
			{windowSize === 'xs' ? <PhoneHomePic /> : <HomePic />}
			<FeaturedProduct />
			<NewProduct />
			{windowSize === 'xs' ? <PhoneBestService /> : <BestService />}
			<NewPost blogs={blogs} />
		</div>
	)
}

export default Home
