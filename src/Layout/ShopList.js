import React, {useEffect, useState} from 'react'
import HeaderShowcase from '../component/common/HeaderShowcase'
import ProductSection from '../component/shoplist/ProductSection'
import background from '../assets/image/shopping card/shadow.png'
import OrderTable from '../component/shoplist/OrderTable'
import OrderPayment from '../component/shoplist/OrderPayment'
import UseWindowSize from '../Sizes/UseWindowSize'
import resbackimg from '../assets/image/responsive/shopping card.png'
import {useSelector} from "react-redux";
import {requestProductSingle} from "../queries/products";
import Axios from "axios";
import Spinner from './../component/common/Spinner';

const Header = () => {
    const windowSize = UseWindowSize();

    return (<> {
        windowSize === 'xs' ?
            <p className='active-cart-title'>SHOPPING CART </p>

            : <div className='cart-title'>


                <p className='active-cart-title'>SHOPPING CART </p>
                <p>/CHECKOUT</p>
                <p>/ORDER COMPLETE</p>
            </div>
    }</>)
}
const ShopList = (props) => {
    const [loading, setLoading] = useState(true);
	const Card = useSelector(state => state.Card);
	const [products, setProducts] = useState({});
	const [total, setTotal] = useState(0);
    //const [invalidItems, setInvalidItems] = useState([]);


	useEffect(() => {
		// window.scrollTo({ top: 580, left: 0, behavior: 'smooth' })
		const requests = Card.basket.items.map(item => requestProductSingle(item.product_id));
		Axios.all(requests)
			.then(response => {
                setLoading(false)
				const newProducts = {};
				response.forEach(item => {
					newProducts[item.data.id] = item.data;
				});
				setProducts(newProducts);
			})
			.catch(error => {
                setLoading(false)
				console.log(error);
			})
	}, [props, Card])
    return (
        <div>
            <HeaderShowcase resbackimg={resbackimg} backimg={background}>
                <Header/>
            </HeaderShowcase>
            <ProductSection/>
            <section>
                <div className='container'>
                    <div className='ShopList__order'>
                        {
                            loading ? <Spinner /> : (
                                <>
                                    <OrderTable card={Card} products={products} total={total}/>
                                    <OrderPayment card={Card} products={products} total={total}/>
                                </>
                            )
                        }
                  
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ShopList
