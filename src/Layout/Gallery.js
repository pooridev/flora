import React, {useEffect, useState} from "react";
import HeaderShowcase from "../component/common/HeaderShowcase";
import background from '../assets/image/contactus/roses.png'
import resbackimg from '../assets/image/responsive/contactus.png'
import GalleryPkg from 'react-grid-gallery';
import {requestFilesGallery} from "../queries/files";
import {Configs} from "../configs";
import {getAbsolutePath} from "../helpers/strings";
import Spinner from './../component/common/Spinner';

const Gallery = (props) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true)
		requestFilesGallery()
			.then(response => {
				setData(response.data.map(item => {
					setLoading(false)
					return ({
						src: getAbsolutePath(item['thumbnail_url']),
						thumbnail: getAbsolutePath(item['thumbnail_url']),
						thumbnailWidth: 320,
						thumbnailHeight: 212,
						tags: [{value: item.alt['EN'], title: item.alt['EN']}],
						caption: item.alt['EN']
					})
				}));
			}).catch(error => {
				setLoading(false)
				console.log(error);
		})
	}, [props])

	return (
		<div>
			<HeaderShowcase resbackimg={resbackimg} backimg={background}>
				<div className='cart-title'>
					<h2>Gallery</h2>
				</div>
			</HeaderShowcase>
			{
				loading && <div className="center"><Spinner /></div>
			}
			<div className="container gallery-container">
				{ !loading && (
						<GalleryPkg
							margin={10}
							tileIconStyle={() => ({
								display: 'none'
							})}
							tagStyle={{
								fontSize: 20,
								backgroundColor: 'rgba(0,0,0, 0.6)',
								color: 'white',
								padding: '5px 10px'
							}}
							thumbnailStyle={() => ({
								width: '100%',
								height: '100%',
								objectFit: 'cover'
							})}
							images={data}/>
					)
				}
			</div>
			<div className="clearfix"/>
		</div>
	)
}

export default Gallery;
