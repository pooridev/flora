import React, { useEffect, useState } from 'react'
import email from '../../assets/image/home/icon/footer/email.svg'
import phone from '../../assets/image/home/icon/footer/phone.svg'
import whatsapp from '../../assets/image/home/icon/footer/whatsapp.svg'
import skype from '../../assets/image/home/icon/footer/skype.svg'
import linkdin from '../../assets/image/home/icon/footer/linkdin.svg'
import pintrest from '../../assets/image/home/icon/footer/pintrest.png'
import facebook from '../../assets/image/home/icon/footer/facebook.svg'
import instagram from '../../assets/image/home/icon/footer/instagram.svg'
import blog1 from '../../assets/image/home/footer/Rectangle 92.png'
import blog2 from '../../assets/image/home/footer/Rectangle 93.png'
import { Link, useHistory } from 'react-router-dom'
import arrowdown from '../../assets/image/home/icon/black-arrowdown.svg'
import UseWindowSize from '../../Sizes/UseWindowSize'
import imag1 from '../../assets/image/home/icon/footer/master-card 1.svg'
import imag2 from '../../assets/image/home/icon/footer/visa 1.svg'
import imag3 from '../../assets/image/home/icon/footer/paypal-color 1.svg'
import { requestCategoriesList } from '../../queries/categories'
import { createEmailSubscriptionReq } from 'queries/subscriptions'
import { CustomAlert } from 'helpers/alert'
import { getBannersReq } from './../../queries/banners';
import { getBlostPosts } from 'queries/blogPosts';
import Spinner from './Spinner'

const menuList = [
	{ name: 'Our Story', link: 'our-story' },
	{ name: 'Corporate Gifting', link: 'Corporate-Gifting' },
	{ name: 'FAQ', link: 'faq' },
	{ name: 'Care tips', link: 'care-tips' },
	{ name: 'Terms Of use', link: 'Terms-Of-use' },
	{ name: 'Privacy Policy', link: 'Privacy-Policy' },
	{ name: 'Testimonial', link: 'Testimonials' },
	{ name: 'Event Service', link: 'Event-Service' },
	{ name: 'Wedding Services', link: 'Wedding-Services' },
	{ name: 'Premium-buoquet', link: 'Premium-buoquet' },
	{ name: 'Custom boxes', link: 'Custom-boxes' },
]
// const catlist = [
//     {name: 'Complete Range', link: 'Complete-range'},
//     {name: 'Fresh roses in box', link: 'Fresh-roses-in-box'},
//     {name: 'Long Life Roses in Boxes', link: 'Long-Life-Roses-in-Boxes'},
//     {name: 'Mix flowers in box', link: 'Mix-flowers-in-box'},
//     {name: 'Signature design', link: 'signature-design'},
//     {name: 'Flower Subscription', link: 'Flower-Subscription'},
//     {name: 'Premium Orchid Plants', link: 'Premium-Orchid-Plants'},
//     {name: 'Dried Flowers', link: 'Dried-Flowers'},
//
// ]
const cantactList = [
	{ name: 'Contact us', link: 'contactus' },
	{ name: 'Subscription', link: 'category/subscription' },
	{ name: 'Our blog', link: 'https://calistu.ir/flora', force: true },
]
const FooterTitle = ({ headertitle }) => {
	return <h6 className='FooterTitle'>{headertitle}</h6>
}
const FooterBlogCard = ({ src, title, comment, date, url }) => {
	const history = useHistory()

	const day = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
  });
  const month = new Date(date).toLocaleDateString('en-US', {
    month: 'short',
  });

	return (
		<div className='FooterBlogCard'>
			<img alt='hw' src={src} />
			<div className='FooterBlogCard__info'>
				<a rel="noreferrer" href={url} className='FooterBlogCard__info--title'>{title['rendered']}</a>
				<div className='FooterBlogCard__info--sub'>
					<p>{day + ' ' + month }</p>
					<p>{comment}</p>
				</div>
			</div>
		</div>
	)
}
const Footer = props => {
	const [open1, setopen1] = useState(false)
	const [open2, setopen2] = useState(false)
	const [open3, setopen3] = useState(false)
	const [open4, setopen4] = useState(false)
	const [blogs, setBlogs] = useState([])
	const windowSize = UseWindowSize()
	const [categories, setCategories] = useState([])
	const [subEmail, setSubEmail] = useState('')
  const [loading, setLoading] =  useState(false)
	const gototop = () => {
		window.scrollTo(0, 0)
	}
	useEffect(() => {
	Promise.all([
		getBlostPosts()
			.then(data => {
				setBlogs(Object.keys(data).map(key => data[key]))
		}),requestCategoriesList()
		.then(response => {
				const newCategories = []
				response.data.forEach(category => {
						if (!category.is_occasion) {
								newCategories.push(category)
						}
				});
				setCategories(newCategories)
		})
	])
	}, [])
// console.log(categories)
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer-container'>
					<div className='Footer__flowerexpress footer-column'>
						<FooterTitle headertitle='flower express' />
						<p className='Footer__flowerexpress--p'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
							gravida ultrices mauris cursus sceleri
						</p>
						<ul className='list Footer__flowerexpress--list'>
							<li>
								<img alt='hw' src={email} />
								<p>support@flowerexpress.ae</p>
							</li>
							<li>
								<img alt='hw' src={phone} />
								<p>+97144329819</p>
							</li>
							<li>
								<img alt='hw' src={whatsapp} />
								<p>+971525577476</p>
							</li>
						</ul>
						<div className='Footer__flowerexpress--social'>
							<FooterTitle headertitle='Follow us on social' />
							<div className='d-flex footer__social'>
								<img alt='hw' src={skype} />
								<img alt='hw' src={linkdin} />
								<img alt='hw' src={pintrest} />
								<img alt='hw' src={facebook} />
								<img alt='hw' src={instagram} />
							</div>
						</div>
					</div>
					<div className='Footer__lastblog footer-column'>
						{windowSize === 'xs' ||
						windowSize === 'sm' ||
						windowSize === 'md' ? (
							<div
								className='d-flex-spacebetween'
								style={{ width: '100%' }}
								onClick={() => setopen1(!open1)}
							>
								<FooterTitle headertitle='Recent post on blog' />
								<img alt='hw' src={arrowdown} />
							</div>
						) : (
							<FooterTitle headertitle='Recent post on blog' />
						)}
						{windowSize === 'xs' ||
						windowSize === 'sm' ||
						windowSize === 'md' ? (
							open1 && (
								<>
									{
										blogs.slice(0, 3).map(i => (
											<FooterBlogCard
												src={i._embedded['wp:featuredmedia'][0]['source_url']}
												title={i.title}
												comment={i.comment_status}
												date={i.date}
												url={i.link}
											/>
										))
									}
								</>
							)
						) : (
							<>
								{
									blogs.slice(0, 3).map(i => (
										<FooterBlogCard
											src={i._embedded['wp:featuredmedia'][0]['source_url']}
											title={i.title}
											comment={i.comment_status}
											date={i.date}
											url={i.link}
										/>
									))
								}
							</>
						)}
					</div>
					<div className='Footer__menu footer-column'>
						{windowSize === 'xs' ||
						windowSize === 'sm' ||
						windowSize === 'md' ? (
							<div
								className='d-flex-spacebetween'
								style={{ width: '100%' }}
								onClick={() => setopen2(!open2)}
							>
								<FooterTitle headertitle='Menu' />
								<img alt='hw' src={arrowdown} />
							</div>
						) : (
							<FooterTitle headertitle='Menu' />
						)}
						{windowSize === 'xs' ||
						windowSize === 'sm' ||
						windowSize === 'md' ? (
							open2 && (
								<>
									<ul className='footer-menu list footer-list'>
										{menuList.map((i, key) => (
											<li key={key}>
												<Link to={`/${i.link}`} onClick={gototop}>
													{i.name}
												</Link>
											</li>
										))}
									</ul>
								</>
							)
						) : (
							<>
								<ul className='footer-menu list footer-list'>
									{menuList.map((i, key) => (
										<li key={key}>
											<Link to={`/${i.link}`} onClick={gototop}>
												{i.name}
											</Link>
										</li>
									))}
								</ul>
							</>
						)}
					</div>
					<div className='Footer__categories footer-column'>
						{windowSize === 'xs' ||
						windowSize === 'sm' ||
						windowSize === 'md' ? (
							<div
								className='d-flex-spacebetween'
								style={{ width: '100%' }}
								onClick={() => setopen3(!open3)}
							>
								<FooterTitle headertitle='CATEGOREIS' />
								<img alt='hw' src={arrowdown} />
							</div>
						) : (
							<FooterTitle headertitle='CATEGOREIS' />
						)}
						{windowSize === 'xs' ||
						windowSize === 'sm' ||
						windowSize === 'md' ? (
							open3 && (
								<>
									<ul className='footer-categories list footer-list'>
										{categories.map((i, key) => (
											<li key={key}>
												<Link to={{ pathname: `/category/${i.id}`, state: i.title }} onClick={gototop}>
													{i.title}
												</Link>
											</li>
										))}
									</ul>
								</>
							)
						) : (
							<>
								<ul className='footer-categories list footer-list'>
									{categories.map((i, key) => (
										<li key={key}>
											<Link to={{ pathname: `/category/${i.id}`, state: i.title }} onClick={gototop}>
												{i.title}
											</Link>
										</li>
									))}
								</ul>
							</>
						)}
					</div>

					<div className='Footer__contact footer-column'>
						{windowSize === 'xs' ||
						windowSize === 'sm' ||
						windowSize === 'md' ? (
							<div
								className='d-flex-spacebetween'
								style={{ width: '100%' }}
								onClick={() => setopen4(!open4)}
							>
								<FooterTitle headertitle='CONTACT' />
								<img alt='hw' src={arrowdown} />
							</div>
						) : (
							<FooterTitle headertitle='CONTACT' />
						)}
						{windowSize === 'xs' ||
						windowSize === 'sm' ||
						windowSize === 'md' ? (
							open4 && (
								<>
									<ul className='footer-categories list footer-list'>
										{cantactList.map((i, key) => {
											if (i.force) {
												return (
													<li key={key}>
														<a href={i.link}>{i.name}</a>
													</li>
												)
											}
											return (
												<li key={key}>
													<Link to={`/${i.link}`} onClick={gototop}>
														{i.name}
													</Link>
												</li>
												)
											}
										)}
									</ul>
								</>
							)
						) : (
							<>
								<ul className='footer-categories list footer-list'>
									{cantactList.map((i, key) => {
										if (i.force) {
											return (
												<li key={key}>
													<a href={i.link}>{i.name}</a>
												</li>
											)
										}
										return (
											<li key={key}>
												<Link to={`/${i.link}`} onClick={gototop}>
													{i.name}
												</Link>
											</li>
											)
										}
									)}
								</ul>
							</>
						)}

						<div className='footer__getnews'>
							<FooterTitle headertitle='Stay Tunned' />
							<form 
								onSubmit={e => e.preventDefault()}
								className=''
								style={{ display: 'flex', flexDirection: 'column' }}
							>
								<input
							  	type="email"
									required
									className='footer__input'
									placeholder='Put youre email here...'
									onChange={e => setSubEmail(e.target.value)}
								/>
								<button
									onClick={() => {
										setLoading(true)
										createEmailSubscriptionReq({ email: subEmail }).then(() => {
											setLoading(false)
											CustomAlert({
												icon: 'success',
												text: 'Successfully Sbuscribed',
											})
										}).catch(err => 	{
											setLoading(false)
											CustomAlert({
											icon: 'error',
											text: 'Enter a valid email',
										})}
										)
									
									}}
									type='submit'
									className='third-btn btn'
									disabled={!subEmail}
								>
									{loading ? <Spinner /> :'subscribe'}
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div className='container'>
				<div className='FooterCopyright'>
					<p>Copyright 2021 Calistu Trading Company. All Right Reserved.</p>
					<div className='d-flex'>
						<img alt='hw' src={imag1} />
						<img alt='hw' src={imag2} />
						<img alt='hw' src={imag3} />
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
