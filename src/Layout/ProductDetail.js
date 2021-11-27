import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import ProductDetailImage from '../component/ProductDetail/ProductDetailImage'
import ProductdetailInfo from '../component/ProductDetail/ProductdetailInfo'
import ProductDetailTab from '../component/ProductDetail/ProductDetailTab'
import flower1 from '../assets/image/home/product/Rectangle 46.png'
import flower2 from '../assets/image/home/product/Rectangle 47.png'
import flower3 from '../assets/image/home/product/Rectangle 48.png'
import flower4 from '../assets/image/home/product/Rectangle 49.png'
import flower5 from '../assets/image/home/product/Rectangle 50.png'
import flower6 from '../assets/image/home/product/Rectangle 52.png'
import flower7 from '../assets/image/home/product/Rectangle 54.png'
import flower8 from '../assets/image/home/product/Rectangle 55.png'
import flower9 from '../assets/image/home/product/Rectangle 56.png'
import hoverflower1 from '../assets/image/home/product/hover/Rectangle 51.png'
import ProducDetailLikPriduct from '../component/ProductDetail/ProducDetailLikPriduct'
import UseWindowSize from '../Sizes/UseWindowSize'
import PhoneProductDetailacordion from '../component/ProductDetail/PhoneProductDetailacordion'
import {requestProductRelated, requestProductReviews, requestProductSingle} from "../queries/products";
import {Configs} from "../configs";
import {getAbsolutePath} from "../helpers/strings";
import Spinner from './../component/common/Spinner';

const ProductDetail = () => {
	const [detail, setDetail] = useState({});
	const [reviews, setReviews] = useState({});
	const [related, setRelated] = useState([]);
    const [loading, setLoading] = useState(false);
	const {product_id} = useParams();
    const windowSize = UseWindowSize();
    useEffect(() => {
        setLoading(true)
        window.scrollTo(0, 0)
		getProduct();
        getReviews();
		getRelatedProducts();
    }, [product_id]);

    const getProduct = () => {
		requestProductSingle(product_id)
			.then(response => {
                setLoading(false)
				setDetail(response.data);
			})
			.catch(error =>{
                setLoading(false)
				console.log(error);
			})
	}

	const getReviews = () => {
		requestProductReviews({
			limit: Configs.LIMIT * 50,
			offset: 0
		}, product_id)
			.then(response => {
                setLoading(false)
				setReviews(response.data.result);
			})
			.catch(error => {
                setLoading(false)
				console.log(error);
			})
	}

	const getRelatedProducts = () => {
    	requestProductRelated({ product_id, limit: Configs.LIMIT, offset: 0 })
			.then(response => {
                setLoading(false)
				setRelated(response.data.result.map(item => ({
					is_enable: item.is_enable,
					stock_quantity: item['details'][0]['stock_quantity'],
					id: item['id'],
					product_details_id: item['details'][0]['product_details_id'],
					image: getAbsolutePath(item['image']['thumbnail_url']),
					name: item['title'],
					cap: item['categories'].map(element => element['title']).join(', '),
					cost: item['details'][0]['price']['DIRHAMS'],
					hoverimage: getAbsolutePath(item['image']['thumbnail_url'])
				})))
			}).catch(error => {
                setLoading(false)
				console.log(error);
			})
	}

    return (
        <div>
			{
				Object.keys(detail).length && !loading ?
					(
						<>
							<div className='container'>
								<div className='productdetail_firstRow'>
									<ProductDetailImage main={detail['image']} others={detail['files']}/>
									<ProductdetailInfo detail={detail} />
								</div>
							</div>
							{
								windowSize === 'xs' ?
									<PhoneProductDetailacordion detail={detail} reviews={reviews} getReviews={getReviews}/> :
									<ProductDetailTab detail={detail} reviews={reviews} getReviews={getReviews}/>

							}
							{/*<ProducDetailLikPriduct productList={LikeProduct} title='YOU MAY ALSO LIKE... '/>*/}
							<ProducDetailLikPriduct productList={related} title='Related Products'/>
						</>
					)
					:
					(
						<div className='container'>
						     <div className="center"><Spinner /></div>
						</div>
					)
			}
        </div>
    )
}

export default ProductDetail
