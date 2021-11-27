import React, {useEffect, useState} from 'react'
import NumButton from './NumButton'
import {useHistory} from 'react-router-dom'
import {useSelector} from "react-redux";
import {requestProductSingle} from "../../queries/products";
import Axios from "axios";
import {getAbsolutePath} from "../../helpers/strings";
import { requestGetBasket, requestUpdateBasket, requestUpdateBasketExtra, requstDeleteSingleFromBasket, requstDeleteSingleFromBasketExtra } from './../../queries/basket';
import { useDispatch } from 'react-redux'
import { getBasket, resetBasket } from 'redux/action-creators/card';
import { haveTokens } from 'helpers/auth'
import Spinner from 'component/common/Spinner';
import { CustomAlert } from './../../helpers/alert';
import { memo } from 'react';

const CardNavCard = memo(({img, title, price, quantity, product_id, product_details_id, productType, stock_quantity}) => {
	const dispatch = useDispatch()
	const Card = useSelector(state => state.Card);
	const isLogin = haveTokens();
	const basketData = {...Card['basket']};

	const selected_attributes = Card.basket.items.find(i => i.product_id === product_id)?.['selected_attributes'] || []

	const handleUpdateQuantity = (value) => {
		if (isLogin) {
			 // check for quanity
			 const product = basketData['items'].find(item => item['product_id'] === product_id);
			 if (product?.quantity >= stock_quantity || product?.quantity >= product?.stock_quantity) {
					 CustomAlert({ icon: 'error', text: 'Sorry, out of stock' })
					 return false
			 }
			return requestUpdateBasket([{
				product_id,
				product_details_id ,
				quantity: value,
				selected_attributes,
				extra: []
			 }])
			 .then(() => requestGetBasket()
			 .then(res => dispatch(getBasket(res.data))))
		}

		const BASKET_PAYLOAD = {
			quantity: value,
			product_id: product_id,
			product_details_id: product_details_id,
			product_type: productType,
			selected_attributes,
			extra: []
		};
	  const localBasket = JSON.parse(localStorage.getItem('basket')) || { items: [] }
      const existInBasketIndex = localBasket.items.findIndex(item => item['product_id'] === product_id);
            
			if(existInBasketIndex !== -1){
					basketData['items'][existInBasketIndex]['quantity'] = BASKET_PAYLOAD['quantity'];
					// basketData['total_price'] = basketData['items'][existInBasketIndex]['quantity'] * basketData['items'][existInBasketIndex]['price']
			} else {
					basketData.items.push(BASKET_PAYLOAD);
			}
			localStorage.setItem('basket', JSON.stringify(basketData))
			dispatch(getBasket(basketData))
	}
	const handleDeleteItemFromCart = () => {
		if (isLogin) {
			return requstDeleteSingleFromBasket({product_details_id})
				.then(response => {
					requestGetBasket()
						.then(response => {
							response.data ?	dispatch(getBasket(response.data)) : dispatch(resetBasket())
				}).catch(err =>	dispatch(resetBasket()))
			})
		}

		const copyOfBasket = { ...basketData }
		const selectedItemIndex = basketData.items.findIndex(i => i.product_details_id === product_details_id)
		const selectedItemPrice = basketData.items.find(i => i.product_details_id === product_details_id)['price']
		copyOfBasket.items.splice(selectedItemIndex, 1)
		copyOfBasket['total_price'] -= selectedItemPrice * quantity

		dispatch(getBasket(copyOfBasket))
    localStorage.setItem('basket', JSON.stringify(copyOfBasket))

	}

    return (
        <div className='CardNavCard d-flex relative'>
            <div className='CardNav_close d-flex' onClick={handleDeleteItemFromCart}>
                <i className="fas fa-times"/>
            </div>
            <img alt='card' src={img}/>
            <div className='CardNavCard__info'>
                <h3>{title}</h3>
                <NumButton initialCount={quantity} max={stock_quantity} onChange={value => handleUpdateQuantity(value)} />
                <div className='d-flex CardNavCard__price'>
                    <span>{quantity} x</span>
                    <p> AED {price}</p>
                </div>
            </div>
        </div>

    )
})

const CardNav = (props) => {
    const [nav] = useState(true)
		const Card = useSelector(state => state.Card);
		const [loading, setLoading] = useState(false);
		// const [extraProducts, setExtraProducts] = useState([]);
		const localBasket = JSON.parse(localStorage.getItem('basket'));
    const [products, setProducts] = useState({});
    // const [total, setTotal] = useState(0);
		const isLogin = haveTokens()
    const history = useHistory();
    const close = () => props.closenav();

		const totalPrice = Card['basket']['total_price']

		useEffect(() => {
			const requests = Card.basket.items.map(item => requestProductSingle(item.product_id));
			Axios.all(requests)
				.then(response => {
					setLoading(false)
					const newProducts = {};
					// let totalQ = 0;
					response.forEach(item => {
						newProducts[item.data.id] = item.data;
					});
					setProducts(newProducts);
				})
				.catch(error => {
					setLoading(false)
				})
			//	const extras = Card.basket.items.map(p => p.extra).flat()
			//	setExtraProducts(extras)
		}, [props, Card.basket])

	useEffect(() => setLoading(true), [])

	useEffect(() =>  {
		
		// if (Card.basket.items[0]?.['extra']) {
		// 	const requests = Card.basket.items[0]['extra'].map(p => requestProductSingle(p.product_id))
		// 	Axios.all(requests)
		// 		.then((res) => {
		// 			const extras = res.map(item => item.data)
		// 		//	setExtraProducts(extras)
		// 		})
		// 	}

	}, [Card.basket])

    return (
        <div className={`cardnav_back  `}>
            <div className={`CardNav ${nav ? 'cardnav__true' : 'cardnav__false'} `}>
                <div className='CardNav_close d-flex' onClick={close}>
                    <i className="fas fa-times"/>
                    <p>close</p>
                </div>
                <div className='CardNav__container'>
                    <div className='CardNav__header'>
                        <h2>Shopping Cart</h2>
                    </div>
					{
						loading && <div className="center"><Spinner /></div>
					}
					{
						Card?.basket?.items?.length && Object.keys(products).length && !loading ?
							Card?.basket?.items?.map((item, index) => {
								return (
									<CardNavCard
										stock_quantity={isLogin ? Card?.basket?.items.find(i => i.product_id === item.id)?.stock_quantity : products[item['product_id']]['stock_quantity']}
										productType="product"
										key={index}
										product_id={item['product_id']}
										product_details_id={item['product_details_id']}
										quantity={item['quantity']}
										img={getAbsolutePath(products[item['product_id']]['image']['thumbnail_url'])}
										title={item['title']}
										price={products?.[item?.['product_id']]?.['prices']?.[0]}
									/>
								)
							})
							:
							(
								<h2 style={{textAlign: 'center', margin: '10px 0'}}>Cart is empty.</h2>
							)
					} 
					{// {
					// 	Card.basket?.items[0]?.['extra']?.length && Object.keys(products).length && !loading ?
					// 		extraProducts?.map((p, index) => (
					// 			<CardNavCard
					// 				stock_quantity={isLogin ? Card.basket.items[0]['extra'].find(item => item.product_id === p.id)?.stock_quantity : p['details']?.[0]['stock_quantity']}
					// 				productType="extra"
					// 				key={index}
					// 				product_id={p['product_id'] || p['id']}
					// 				product_details_id={p['details']?.[0]['product_details_id'] || p['product_details_id']}
					// 				quantity={isLogin ? Card.basket.items[0]['extra'].find(item => item.product_id === p.id)?.quantity : localBasket['items'][0]['extra'].find(item => item.product_id === p.id)?.quantity}
					// 				img={getAbsolutePath(p['image']?.['thumbnail_url'])}
					// 				title={p['title']}
					// 				price={p?.['prices']?.[0] || p?.['price']}
					// 		/>
					// 		))
					// 		: null
					}
                </div>
				{
					!!Card.basket.items.length && (
						<div className='CardNav__footer'>
							<div className='CardNav__cost'>
								<p>SUBTOTAL</p>

								<p className='CardNav__cost-price'>{isLogin ? `AED ${totalPrice}` : 'Login to submit order'}</p>

							</div>
							<button className='CardNav__btn btn third-btn' onClick={() => {
								history.push('/shoping-card');
								props.closenav()
							}}>
								ViewCart
							</button>
							{/* <button className='CardNav__btn btn green_btn third-btn' onClick={() => {
								history.push('/check-out');
								props.closenav()
							}}>
								CheckOut
							</button> */}

						</div>
					)
				} 
            </div>
        </div>

    )
}

export default CardNav
