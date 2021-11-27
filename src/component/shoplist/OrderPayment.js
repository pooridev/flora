import { haveTokens } from 'helpers/auth'
import React, { useEffect, useState } from 'react'
import {Link, useHistory, useLocation} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { changeShippingMethod, resetBasket } from 'redux/action-creators/card';
import { CustomAlert } from 'helpers/alert';
import { TYPES } from './../../redux/types';
import { requestApplyCouponCode, requestPayOrder, requestPlaceOrder, requestSingleTransaction } from './../../queries/orders';
import { useSelector } from 'react-redux';
import { StarTwoTone } from '@material-ui/icons';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Redirect, useParams } from 'react-router';
import Spinner from 'component/common/Spinner';
import { requestGetBasket } from 'queries/basket';
import { getBasket } from 'redux/action-creators/card';
import { requestProductSingle } from 'queries/products';
import Axios from 'axios';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: '100%',

  },
}));
const OrderPayment = ({ card }) => {
		const classes = useStyles();
		const dispatch = useDispatch();
		const [loading, setLoading] = useState(false)
		const order = useSelector(({ Order }) => Order.order) || {}
		const Card = useSelector(({ Card }) => Card.basket) || {}
		
		const [couponCode, setCouponCode] = useState('')
		const [discount, setDiscount] = useState(0)
		const [ableToApplyCoupon, setAbleToApplyCoupon] = useState(true)

		const { transaction_code } = useParams()
		const chnageShippingMethodHandler = (shippingMethod) => {
			if (shippingMethod === 'express-shipping') {
				dispatch(changeShippingMethod(card.basket['express_shipping_cost'] + card.basket['total_price']))
				dispatch({ type: TYPES.UPDATE_SHIPPING_METHOD, payload: true })
			} else {
				dispatch(changeShippingMethod(card['basket']['total_price'] - card.basket['express_shipping_cost'] ))
				dispatch({ type: TYPES.UPDATE_SHIPPING_METHOD, payload: false })
			}
		}
		const placeOrderHandler = () => {
			// return and open a toast, if the payment form was not valid
			if (isFormValid()){
				let PLACE_PAYLOAD = {	
					delivery_address_id: order.delivery_address_id,
					payment_type: order.payment_type,
					is_used_wallet: order.is_used_wallet,
					is_express_shipping: order.is_express_shipping,
					gift_message: order.gift_message,
					special_request: order.special_request,
					delivery_datetime: order.delivery_datetime,
					delivery_frequency: order.delivery_frequency, 
				}
				setLoading(true)
				requestPlaceOrder(PLACE_PAYLOAD)
					.then(({ data, detail }) => {
						setLoading(false)

						// redirect to the order payment page if the payment type was online
						// otherwise show him/her a toast
						if (order.payment_type === 'online') {
							const PAY_PAYLOAD = { order_id: data.id, redirect_url: 'http://localhost:3000/shoping-card' }
							PayOrder(PAY_PAYLOAD); 
							return
						}

						CustomAlert({ icon: 'success', title: 'Your order has been placed successfully', text: `Order code:${data.order_code} ` })
						dispatch(resetBasket())
					}
				).catch(error => {
						setLoading(false)
						debugger
						// const alreadyExist = card.basket.items[0]['extra'].find(i => i.product_id === error.response.data.detail.product_id
						const invalidItems = error?.data?.detail
						CustomAlert({ icon: 'error', text: 'Remove unavailable products' })
						dispatch({ type: TYPES.UPDATE_INVALID_ITEMS, payload: invalidItems })
						// getInvalidItems(invalidItems)
				})
			} 
		}

		const PayOrder = (PAY_PAYLOAD) => {
			requestPayOrder(PAY_PAYLOAD)
				.then(({ data }) => {
					window.location.href = data.InvoiceURL
					// return <Redirect to={data.InvoiceURL} />
					// window.open(data.InvoiceURL)
					// window.location.reload()
				})
				.catch(error => {
					console.log(error)
				})
		}

		const isFormValid = () => {
			if (Card.invalidItems.length !== 0) {
				debugger
				CustomAlert({ icon: 'error', text: 'Remove invalid products' })
				return false
			}
			if (!order.delivery_address_id || !order.payment_type || !order.delivery_datetime) {
				 CustomAlert({ icon: 'error', text: 'Payment type, delivery address and delivery date time are required' })
				 return false
			}
			return true
		}

		const applyCouponCode = () => {
			requestApplyCouponCode(couponCode)
				.then(({ data }) => {
					setDiscount({
						discount_amount: data?.discount_amount,
						discount_percentage: data?.discount_percentage,
					})
        	applyDiscount(data)			   
					setCouponCode('')
				})
				.catch(error => {
					CustomAlert({ icon: 'error', text: 'Invalid or expired coupon code' })
				 })
		}

		const applyDiscount = (data) => {
			if (data.discount_amount && !data.discount_percentage && ableToApplyCoupon) {
				dispatch(dispatch({ type: TYPES.UPDATE_TOTAL_PRICE, payload: card.basket['total_price'] - data.discount_amount}))
				setAbleToApplyCoupon(false)
			} else if (data.discount_percentage && !data.discount_amount && ableToApplyCoupon) {
				dispatch(changeShippingMethod(card.basket['total_price'] - (card.basket['total_price'] * data.discount_percentage / 100)))
				setAbleToApplyCoupon(false)
			} else {
				 ableToApplyCoupon && dispatch(dispatch({ type: TYPES.UPDATE_TOTAL_PRICE, payload: card.basket['total_price'] - data.discount_amount}))
				 ableToApplyCoupon && dispatch(changeShippingMethod(card.basket['total_price'] - (card.basket['total_price'] * data.discount_percentage / 100)))
				setAbleToApplyCoupon(false)
			}
		}
		const isLogin = haveTokens()
		useEffect(() => {
			if (transaction_code) {
				dispatch(resetBasket())
				requestSingleTransaction(transaction_code)
					.then(({ data }) => {
						CustomAlert({ icon: 'success', title: 'Hoooray !', text: `Order status : ${data}` })
					}) 
			}
		}, [])

		// const getInvalidITemsRequests = (items) =>
		// 	items.map(item => requestProductSingle(item.invalid_items.product_id).then(res => res.data))
	
		// const getInvalidItems = (items) => {
		// 	const requests = getInvalidITemsRequests(items)

		// 	Axios.all(requests)
		// 		.then(data => {
		// 			dispatch({ type: TYPES.UPDATE_INVALID_ITEMS, payload: data })
		// 			// setInvalidItems(data)
		// 		})
		// }
		const updateDeliveryDatetime = (selectedDateAndTime) => {
			const currentDateAndTime = new Date().toISOString().slice(0, 16)

			if (selectedDateAndTime < currentDateAndTime) {
				CustomAlert({ icon: 'error', text: 'Invalid date or time' })
				return
			}
			dispatch({ type: TYPES.UPDATE_DELIVERY_DATETIME, payload: selectedDateAndTime })

		}
		let content = null
		if (card.basket.items.length && isLogin) {
			content = (
				<div className='OrderPayment'>
					<form className='OrderPayment__message'>
						<div>
							<h2>Add Gift message</h2>
							<textarea onChange={({ target }) => dispatch({ type: TYPES.UPDATE_GIFT_MESSAGE, payload: target.value })} placeholder='Your message'></textarea>
						</div>
						<div>
							<h2>Add especial request</h2>
							<textarea onChange={({ target }) => dispatch({ type: TYPES.UPDATE_SPECEAL_REQUEST, payload: target.value })} placeholder='Your request'></textarea>
						</div>
						<div>
						<div className='CheckOutForm__review reviewform-row'>
						<h2>Apply coupon code</h2>
						<div className="coupon-inputs">
							<input value={couponCode} onChange={({ target }) => setCouponCode(target.value)} type='text' placeholder="Your coupon code" className='CheckOutForm__input'/>
							<Button onClick={applyCouponCode} variant="contained" >Apply</Button>
						</div>
						</div>
							<h2>Pick delivery date and time</h2>
							<TextField	
							   id="date"
								 type="datetime-local"
								 defaultValue={new Date().toISOString()}
								 className={classes.textField}
								 classes={{ root: 'root-datepicker' }}
								 onChange={({ target }) => updateDeliveryDatetime(target.value)}
								 inputProps={{
									min: new Date().toISOString().slice(0, 16)
								}}
								 InputLabelProps={{
									 shrink: true,
								 }}
							 />
						</div>
						<div>
							<h2>Select delivery frequency</h2>
							<div>
								<select className='select-input' defaultValue='1' onChange={({ target }) => dispatch({type: TYPES.UPDATE_DELIVERY_FREQUENCy, payload: target.value})}>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
								</select>
							</div>
						</div>
					</form>
							<div className='OrderPayment__head d-flex-spacebetween'>
									<p>PRODUCT </p>
									<p>SUBTOTAL</p>
							</div>
							<div className='OrderPayment__productsec '>
								{
									card.basket.items.map(item => (
										<div className='OrderPayment__product d-flex-spacebetween'>
											<p>{item['title']}</p>
											<p>AED {item['price']?.DIRHAMS || 0}</p>
										</div>
									))
								}
							</div>
							<div className='OrderPayment__subtotal d-flex-spacebetween'>
								<p>Subtotal </p>
								<p className='OrderPayment__subtotal--price'>AED {card.basket['sub_total_price']}</p>
							</div>
							<div className='OrderPayment__shipping d-flex-spacebetween'>
								<h3>Shipping </h3>
								<div className='OrderPayment__shipping--option'>
									<div className='OrderPayment__shipping--optionbox d-flex'>
										<label htmlFor="Freeshipping">Free shipping</label>
										<input onChange={e => chnageShippingMethodHandler(e.target.value)} value='free' type="radio" id="Freeshipping" defaultChecked name="shipping" />
									</div>
									<div className='OrderPayment__shipping--optionbox d-flex'>
										<label htmlFor="Local">Express shipping: <span>AED {card.basket['express_shipping_cost']}</span></label>
										<input onChange={e => chnageShippingMethodHandler(e.target.value)} value='express-shipping' type="radio" id="Local" name="shipping"/>
									</div>
								</div>
							</div>
							<div className='OrderPayment__shipping d-flex-spacebetween'>
								<h3>Payment method </h3>
								<div className='OrderPayment__shipping--option'>
									<div className='OrderPayment__shipping--optionbox d-flex'>
										<label htmlFor="Payment">Online</label>				
										<input type="radio" onChange={({ target }) => dispatch({ type: TYPES.UPDATE_PAYMENT_TYPE, payload: target.value })} id="Payment" name="Payment" value="online"/>
									</div>
									<div className='OrderPayment__shipping--optionbox d-flex'>
										<label htmlFor="Cash">Cash on delivery</label>
										<input onChange={({ target }) => dispatch({ type: TYPES.UPDATE_PAYMENT_TYPE, payload: target.value })} type="radio" id="Cash" name="Payment" value="COD"/>
									</div>
								</div>
							</div>
							
							{/*<div className='OrderPayment__shipping d-flex-spacebetween'>
								<h3>Payment method</h3>
								<div className='OrderPayment__shipping--optionbox d-flex'>
										<input type="radio" onChange={({ target }) => dispatch({ type: TYPES.UPDATE_PAYMENT_TYPE, payload: target.value })} id="Payment" name="Payment" value="online"/>
										<label htmlFor="Payment">Online
										</label>

								</div>

								<div className='OrderPayment__shipping--optionbox d-flex'>
										<input onChange={({ target }) => dispatch({ type: TYPES.UPDATE_PAYMENT_TYPE, payload: target.value })} type="radio" id="Cash" name="Payment" value="COD"/>
										<label htmlFor="Cash">Cash on delivery</label>
								</div>
							</div>*/}
							<div className='OrderPayment__total d-flex-spacebetween'>
								<p>TOTAL </p>
								<p className='OrderPayment__total--price'>AED <span>{card.basket['total_price']}</span></p>
							</div>
							<div className='center OrderPayment__btn'>
								<button className='btn third-btn' onClick={placeOrderHandler}>
									{loading ? <Spinner /> :'Place order'}
								</button>
							</div>
						</div>
			)
		}

		if (card.basket.items.length && !isLogin) {
			content = (
					<div className='OrderPayment'>
						<div className='OrderPayment__head center'>
							<h3>You must login to your account</h3>
						</div>
						<div className='center OrderPayment__btn'>
							<button className='btn third-btn disabled-btn'>
									Proceed to checkout
							</button>
						</div>
					</div>
			)
		}

    return content
}

export default OrderPayment
