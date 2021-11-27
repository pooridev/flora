import React, { useEffect, useState } from 'react'
import HeaderShowcase from '../component/common/HeaderShowcase'
import background from '../assets/image/shopping card/shadow.png'
import CheckOutForm from '../component/Checkout/CheckOutForm'
import CheckOutPayment from '../component/Checkout/CheckOutPayment'
import UseWindowSize from '../Sizes/UseWindowSize'
import resbackimg from '../assets/image/responsive/checkout.png'
import SelectAddress from './../component/Checkout/SelectAddress';
import { useSelector } from 'react-redux'
import OrderPayment from './../component/shoplist/OrderPayment';
import { Redirect, useHistory } from 'react-router'
import { haveTokens } from 'helpers/auth';
import { usePatch } from './../hooks/usePatch';
import { CustomAlert } from './../helpers/alert';
import Axios from 'axios';
import { requestProductSingle } from 'queries/products'

const Header = () => {
    const windowSize = UseWindowSize();

    return (
        <> {
            windowSize === 'xs' ?
                <p className='active-cart-title'>CHECKOUT</p>

                : <div className='cart-title'>
                    <p>SHOPPING CART /</p>
                    <p className='active-cart-title'>CHECKOUT</p>
                    <p>/ORDER COMPLETE</p>
                </div>
        }</>

    )
}
const CheckOut = () => {
    const { addresses } = useSelector(({ Profile }) => Profile.profile) || {}

    const [loading, setLoading] = useState(true);
	const Card = useSelector(state => state.Card);
	const [products, setProducts] = useState({});
    const [checkoutData, setCheckoutData] = usePatch(
        {
            delivery_address_id: "",
            payment_type: "COD",
            is_used_wallet: true,
            is_express_shipping: false,
        }
        ) 
    const history = useHistory()
    const [total, setTotal] = useState(0);
    const isLogin = haveTokens();
                            
    useEffect(() => {
		window.scrollTo({ top: 580, left: 0, behavior: 'smooth' })
		const requests = Card.basket.items.map(item => requestProductSingle(item.product_id));
		Axios.all(requests)
			.then(response => {
                setLoading(false)
				const newProducts = {};
				let totalQ = 0;
				response.forEach(item => {
					newProducts[item.data.id] = item.data;
				});
				Card.basket.items.forEach(basket_item => {
					totalQ += newProducts[basket_item['product_id']]['prices'][0] * basket_item['quantity']
				});
				setProducts(newProducts);
                if (isLogin) {
					setTotal(totalQ);
				} else {
					setTotal(Card['basket']['total_price']);
				}
			})
			.catch(error => {
                setLoading(false)
				console.log(error);
			})

	}, [Card])
    return (
        <div>
            <HeaderShowcase resbackimg={resbackimg} backimg={background}>
                <Header/>
            </HeaderShowcase>
            <section>
                <div className='container'>
                    <div className='CheckOut__form'>
                        <SelectAddress addresses={addresses} />
                        <OrderPayment  card={Card} products={products} total={total}/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CheckOut
