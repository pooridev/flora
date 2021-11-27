import React, {useEffect, useState} from 'react';
import image1 from '../../assets/image/shopping card/71-BLZxVrXL 1.png';
import image2 from '../../assets/image/shopping card/—Pngtree—golden event countdown balloon number_5737048 1.png';
import removeIcon from '../../assets/image/shopping card/delete.svg'
import NumButton from '../common/NumButton';
import {useDispatch, useSelector} from "react-redux";
import {requestProductSingle} from "../../queries/products";
import Axios from "axios";
import {getAbsolutePath} from "../../helpers/strings";
import { requestUpdateBasket, requestUpdateBasketExtra, requstDeleteSingleFromBasket } from 'queries/basket';
import { getBasket, resetBasket } from 'redux/action-creators/card';
import { requestGetBasket } from 'queries/basket';
import { Badge, Select, Tooltip } from '@material-ui/core';
import { haveTokens } from './../../helpers/auth';
import { TYPES } from 'redux/types';
import SelectAddress from './../Checkout/SelectAddress';
import { requstDeleteSingleFromBasketExtra } from './../../queries/basket';
import { CustomAlert } from './../../helpers/alert';
import { Add, Close, InsertEmoticonTwoTone } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import NewAddress from 'component/Profile/NewAddress';

const productList = [
    {
        id: 1,
        image: image1,
        title: 'Roses in a Box (Black Box, Medium)',
        price: '23.00',
        qty: '1',
        Subtotal: '23.00'
    },
    {
        id: 2,
        image: image2,
        title: 'Naumber Balloon',
        price: '23.00',
        qty: '2',
        Subtotal: '23.00'
    }
]
const OrderTable = ({card, products, setInvalidItems}) => {
	const dispatch = useDispatch()
	const isLogin = haveTokens()
	const { addresses } = useSelector(({ Profile }) => Profile.profile) || {}
	const Order = useSelector(({ Order }) => Order) || {}
	const Card = useSelector(state => state.Card);
	const basketData = {...Card['basket']};

	const [isAdding, setIsAdding] = useState(false);


	// const { subscription } = useSelector(({ Order }) => Order.order) || {}
	const handleUpdateQuantity = (value, product_id, product_details_id) => {
		if (isLogin) {
			// check for quanity
			const product = basketData['items'].find(item => item['product_id'] === product_id);
			// getting the stock_quantity of selected attributes while adding the product to the basket
			const selectedAttributeQuantity = product?.stock_quantity
			debugger
			if (product?.quantity >= selectedAttributeQuantity) {
					CustomAlert({ icon: 'error', text: 'Sorry, out of stock' })
					return false
			}
			return requestUpdateBasket([{
				product_id,
				product_details_id ,
				quantity: value,
				extra: []
			 }])
			 .then(() => 
					requestGetBasket()
						.then(res => dispatch(getBasket(res.data))
				)
			)
		}

			const BASKET_PAYLOAD = {
				quantity: value,
				product_id: product_id,
				product_details_id: product_details_id,
				extra: []
			};
			const localBasket = JSON.parse(localStorage.getItem('basket')) || { items: [] }
			const existInBasketIndex = localBasket.items.findIndex(item => item['product_id'] === product_id);
							
	
			basketData['items'][existInBasketIndex]['quantity'] = BASKET_PAYLOAD['quantity'];
			basketData['total_price'] = basketData['items'].reduce((sum, i) => sum + (i.price * i.quantity), 0)
		
			localStorage.setItem('basket', JSON.stringify(basketData))
			dispatch(getBasket(basketData))

		}

	const handleDeleteItem = (product_details_id, isInvalid) => {
		if (isLogin) {
			return requstDeleteSingleFromBasket({ product_details_id })
				.then(response => {
					requestGetBasket()
						.then(({ data, detail }) => {
							data ? dispatch(getBasket(data)) : dispatch(resetBasket())
							  // if we got invalid items in the basket response
                if (detail.length !== 0) {
									dispatch({ type: TYPES.UPDATE_INVALID_ITEMS, payload: detail })
							} else {
								dispatch({ type: TYPES.UPDATE_INVALID_ITEMS, payload: [] })
							}
				})
				.catch(err => dispatch(resetBasket()))
			})
		}

		const copyOfBasket = { ...basketData }
		const selectedItemIndex = basketData.items.findIndex(i => i.product_details_id === product_details_id)
	
		copyOfBasket.items.splice(selectedItemIndex, 1)
		dispatch(getBasket(copyOfBasket))
    localStorage.setItem('basket', JSON.stringify(copyOfBasket))

		// if the product is invalid
		// if (isInvalid) {
		// 	const newInvalidItems = invalidItems.filter(i => i.product_details_id !== product_details_id)
		// 	setInvalidItems(newInvalidItems)
		// }
	}


    return (
        <div className='OrderTable'>
						{
							!!card.basket.items.length && isLogin
								? <>
										<h1>Select the address</h1>
										<Tooltip
										style={{ float: 'right' }}
											placement="top"
											title={isAdding ? "addresses" : "Adding new address"}
										>
											<Button
												variant="outlined"
												color="primary"
												onClick={() => setIsAdding((prev) => !prev)}
											>
												{isAdding ? <Close /> : <Add color="primary" />}
											</Button>
										</Tooltip>
										 { isAdding ? <NewAddress setIsAdding={setIsAdding} /> : <SelectAddress addresses={addresses} />}
								   </> : null
						}
					
            <table style={{ marginTop: '2rem', width: '100%' }}>
                <tr className='OrderTable__header'>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Subtotal</th>
                    <th/>
                </tr>
				{
					card.basket.items.length && Object.keys(products).length ?
						card.basket.items?.map((item, index) => {	
							return (
								<>
									<tr className='OrderTable__body--box' key={index}>
										<td>
											<div className='OrderTable__body--name'>
												<img alt='hw' src={getAbsolutePath(products[item['product_id']]?.image['thumbnail_url']) || ''}/>
												<p>{products[item['product_id']]?.title}</p>
												{
													(item.quantity > item.stock_quantity) && <Badge classes={{ root: 'product-status' }} color='error' badgeContent='Unavailable' />
												}
											</div>
										</td>
										<td>
											
											<p className='OrderTable__body--price'>
											
												AED <span>{products[item['product_id']]?.prices?.[0] ?? 0}</span></p>
										</td>
										<td> 
											<NumButton 
												max={isLogin ? item['stock_quantity'] : item.quantity} 
												initialCount={item['quantity']} 
												onChange={(value) =>
												 handleUpdateQuantity(value, item['product_id'], item['product_details_id'], item['price'])}
											/>
									</td>
										<td><p className='OrderTable__body--price'>AED <span>{item['quantity'] * products[item['product_id']]?.prices?.[0] ?? 0}</span></p></td>
										<td>
											<div className='d-flex OrderTable__body--delete' onClick={() => handleDeleteItem(item['product_details_id'], item['quantity'], item['price'])}>
												<img alt='hw' src={removeIcon} style={{cursor: 'pointer'}}/>
											</div>
										</td>
									</tr>
								</>
							)
						})
						:
						(
							<tr className='OrderTable__body--box'>
								<td colSpan='5'>Card is empty</td>
							</tr>
						)
				}
				{
					card.basket.invalidItems && 	card.basket.invalidItems.map(({ invalid_items }, index) => (
							<tr className='OrderTable__body--box' key={index}>
							<td>
								<div className='OrderTable__body--name'>
									<img alt='hw' src={invalid_items?.image?.['thumbnail_url'] && (getAbsolutePath(invalid_items?.image?.['thumbnail_url']) || '')}/>
									<p>{invalid_items?.title}</p>
									<Badge classes={{ root: 'product-status' }} color='error' badgeContent='Unavailable' />
								</div>
							</td>
							<td>
								<p className='OrderTable__body--price'>
								
									AED <span>{invalid_items?.price['DIRHAMS'] || 0}</span></p>
							</td>
							<td> <NumButton disabled initialCount={invalid_items?.['quantity']} />
						</td>
							<td><p className='OrderTable__body--price'>AED <span>{invalid_items?.price['DIRHAMS'] * invalid_items?.['quantity'] || 0}</span></p></td>
							<td>
								<div className='d-flex OrderTable__body--delete' onClick={() => handleDeleteItem(invalid_items?.['details']?.[0]?.['product_details_id'] || invalid_items?.['product_details_id'], true)}>
									<img alt='hw' src={removeIcon} style={{cursor: 'pointer'}}/>
								</div>
							</td>
						</tr>
					))
				}
            </table>
        </div>
    )
}

export default OrderTable
