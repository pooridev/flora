import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import commenticon from '../../assets/image/home/icon/comment.png'
import shareicon from '../../assets/image/home/icon/share.png'

const BlogCard = ({
	src,
	title,
	author,
	date,
	authorepic,
	comment,
	cap,
	cat,
	link,
}) => {
	const [hoverimg, sethoverimg] = useState(false)

	const day = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
  });
  const month = new Date(date).toLocaleDateString('en-US', {
    month: 'short',
  });


	return (
		<div
			className={`BlogCard d-flex ${hoverimg}`}
			onMouseOver={() => sethoverimg(true)}
			onMouseLeave={() => sethoverimg(false)}
		>
			<div className='BlogCard__img  '>
				<img alt='blog' src={src} />
				<div className='BlogCard__date'>
					<p className='BlogCard__date--day'>{day}</p>
					<p className='BlogCard__date--month'>{month}</p>
				</div>
				{hoverimg && (
					<div className='hoverShadow'>
						<div className='spinner'>
							<div className='bounce1' />
							<div className='bounce2' />
							<div className='bounce3' />
						</div>
					</div>
				)}
			</div>
			<div className='BlogCard__inf'>
				<div className='BlogCard__inf--head'>
					<p>{cat}</p>
				</div>
				<h4>{title}</h4>
				<div className='center BlogCard__inforow'>
					<img className='BlogCard__authorpic' src={authorepic} alt='authore' />
					<p className='BlogCard__authorname'>{author}</p>
					<div className='d-flex relative'>
						<img
							className='BlogCard__comment'
							src={commenticon}
							alt='comment'
						/>
						<div className='comment-num center'>
							<p>{comment}</p>
						</div>
					</div>
					<img src={shareicon} alt='share ' className='BlogCard__share' />
				</div>
				<p className='BlogCard__caption'>{cap}</p>
				<a rel="noreferrer" target="_blank" href={link} className='BlogCard__link'>
					CONTINUE READING
				</a>
			</div>
		</div>
	)
}

export default BlogCard
