import React, { useEffect, useState} from 'react'
// import search from "../../assets/image/home/icon/search.svg"
import buy from "../../../assets/image/home/icon/Buy.svg"
import {makeStyles} from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import {useHistory, useLocation} from 'react-router-dom'
import UseWindowSize from '../../../Sizes/UseWindowSize';
import {GetNavcardContext} from '../../context/Navcardcontext'
import HeartIcon from '../HeartIcon';
import redheart from '../../../assets/image/home/icon/Heart.png'
import { useDispatch, useSelector } from 'react-redux';
import { getBasket } from 'redux/action-creators/card';
import { requestAddToBasket } from 'queries/basket';
import { requestGetBasket } from 'queries/basket';
import { haveTokens } from '../../../helpers/auth';
import { CustomAlert } from 'helpers/alert';
import { requestCheckIsWishedProduct, requestFavouritesList, requestProductAddFavourite } from 'queries/products';
import { requestProductRemoveSingleFavourite, requestSingleFavourite } from '../../../queries/products';
import { Configs } from 'configs';
import { db } from '../../../helpers/db';

const useStylesBootstrap = makeStyles((theme) => ({
    arrow: {
        color: theme.palette.common.black,
    },
    tooltip: {
        backgroundColor: theme.palette.common.black,
        fontSize: '14px'
    },
}));

export function BootstrapTooltip(props) {
    const classes = useStylesBootstrap();

    return <Tooltip arrow classes={classes} {...props} placement="left"/>;
}

const ProductCard = (props) => {
    const {
        general_attributes,
        is_favourite,
        mainimg, 
        hoverimg, 
        name, 
        cost,id, 
        product_type, 
        is_enable, 
        product_details_id, 
        wishlist, 
        tip, 
        New, 
        hot, 
        stock_quantity,
        onFavouritesChange } = props
    const [imageHover, setImageHover] = useState(false)
    const [check, setCheck] = useState(false);
    const Card = useSelector(state => state.Card);
    const dispatcher = useDispatch()
    const history = useHistory()
    const { pathname } = useLocation()
    const basketData = { ...Card['basket'] };

    // const product = product_type === "extra" ? basketData['items'][0]['extra'].find(item => item['product_id'] === id)  : basketData['items'].find(item => item['product_id'] === id);


    const gotoProduct = (e) => {
        history.push(`/product-detail/${id}`)
    }
    const isLoggedIn = haveTokens();
    const windowSize = UseWindowSize();
    const getBasketPayload = () => {
        // type = product
        let BASKET_PAYLOAD = [{
            quantity: 1,
			product_id: id,
			product_details_id,
            product_type,
			extra: []
		}];
        if (!isLoggedIn) {
            BASKET_PAYLOAD = {
                quantity: 1,
                product_id: id,
                product_details_id,
                product_type,
                extra: []
            }
        }
        return BASKET_PAYLOAD
    } 
    
    const isAllowedToAdd = () => {
        const basketProductType = Card['basket']['items'][0]?.product_type || product_type
        const isSubscriptionProduct =  product_type === 'subscription'

        if (isSubscriptionProduct && basketProductType !== product_type) {
            return false
        }

        // check for quanity
        // getting the product from the basket
        const product = basketData['items'].find(item => item['product_id'] === id);
        // getting the stock_quantity of selected attributes while adding the product to the basket
        const selectedAttributeQuantity = product?.stock_quantity

        if (product?.quantity >= selectedAttributeQuantity) {
            CustomAlert({ icon: 'error', text: 'Sorry, out of stock' })
            return false
        }
        return true
    }


    // for none-login users
    const addToBasketLOGOUT = () => {
        const basketData = { ...Card['basket'] };
        const BASKET_PAYLOAD = getBasketPayload();
        const localBasket = JSON.parse(localStorage.getItem('basket')) || { items: [] }
        const existInBasketIndex = localBasket.items.findIndex(item => item['product_id'] === id);
        
        if(existInBasketIndex !== -1){
            basketData['items'][existInBasketIndex]['quantity'] += 1;
        } else {
            isAllowedToAdd() && basketData.items.push(BASKET_PAYLOAD);
        }
        localStorage.setItem('basket', JSON.stringify(basketData))
        
        isAllowedToAdd() ? CustomAlert({ icon: 'success', text: 'Item added' }) : CustomAlert({ icon: 'error', text: 'Product type is not valid' })
        isAllowedToAdd() && dispatcher(getBasket(basketData))
    }
	const addToBasket = () => {
        if (!isLoggedIn) {
            addToBasketLOGOUT()
            return
        }
        // Add to basket LOG IN
        const BASKET_PAYLOAD = getBasketPayload()
        if (isAllowedToAdd()) {
            const existInBasketIndex = basketData['items'].findIndex(item => item['product_id'] === id);
            if(existInBasketIndex !== -1){
                basketData['items'][existInBasketIndex]['quantity'] = basketData['items'][existInBasketIndex]['quantity'] + BASKET_PAYLOAD['quantity'];
            }else {
                isAllowedToAdd() ? basketData['items'].push(BASKET_PAYLOAD) : CustomAlert({ icon: 'error', text: 'Invalid product type, try removing items from cart' })
            }
             requestAddToBasket(BASKET_PAYLOAD)
                .then(res => {
                    CustomAlert({ icon: 'success', text: 'Item added' })
                    requestGetBasket().then(res => dispatcher(getBasket(res.data)))
                })
        }
	};


    // const isWished = requestCheckIsWishedProduct

    const addToFavourites = () => {
        if (!isLoggedIn) {
            return CustomAlert({icon: 'warning', title: 'Oops...', text: 'You must Login to your account' })
        }
        debugger
        requestProductAddFavourite({
            product_id: id,
            product_details_id
        }).catch(err => CustomAlert({icon: 'error', title: 'Oops...', text: "product is already exist"}))
    }

    const removeFromFavourits = () => {
        if (!isLoggedIn) {
            return CustomAlert({icon: 'warning', title: 'Oops...', text: 'You must Login to your account' })
        }
        requestProductRemoveSingleFavourite({
            product_id: id,
            product_details_id
        }).then(() => {
            if (pathname.includes('profile')) {
                requestFavouritesList({ offset: 0, limit: Configs.LIMIT * 50 })
                    .then(res => {
                        onFavouritesChange(res.data.result)
                }).catch(err => onFavouritesChange([]))
            }
        })
    }

        
    
    useEffect(() => {
        if (isLoggedIn && is_favourite){
            setCheck(true)
        }
    }, [id, is_favourite])
    return (stock_quantity >= 1 || is_favourite) ? (
        <div className='ProductCard'>
            {
                windowSize === 'sm' ?
                    <div className='ProductCard-imgBox' onMouseOver={() => {
                        setImageHover(true)
                    }}
                         onMouseLeave={() => {
                             setImageHover(false)
                         }}
                    >

                        <div className='relative'>

                            <div>
                                <div className='Productcard__heart center' onClick={e => {
                                        e.stopPropagation()
                                     
                                }}>
                                    {check && isLoggedIn ? <img width='100%' height='100%' alt='hw' className='red-heart' src={redheart}/> : <HeartIcon/>}
                                </div>

                                <img alt='hw' src={mainimg} className='Productcard__img'/>
                                <div className='Productcard__buy center'>
                                    <img alt='hw' width='100%' height='100%' src={buy} onClick={e => e.stopPropagation()}/>
                                </div>
                            </div>
                        </div>
                    </div> :
                    <div className='ProductCard-imgBox' onMouseOver={() => {
                        setImageHover(true)
                    }}
                         onMouseLeave={() => {
                             setImageHover(false)
                         }}
                    >
                        {
                            imageHover ?
                                <div className='ProductCard--hoverbox'>

                                    <img alt='hw' className='hover-img' src={hoverimg}/>
                                    <div className={`ProductCard--hoverbox--addtocart ${!is_enable && 'disabled-btn '}`} style={{cursor: 'pointer'}}
                                         onClick={() => {
                                            if (is_enable && stock_quantity > 0) {
                                                addToBasket()
                                            } else {
                                                CustomAlert({ icon: 'error', text: 'Product is not available' })
                                            }
                                         }}>
                                        {stock_quantity !== 0 ? 'BUY NOW' : 'NOT AVAILABLE'}
                                    </div>
                                    <div className='ProductCard--hoverbox--view' style={{cursor: 'pointer'}}
                                         onClick={gotoProduct}>
                                        VIEW
                                    </div>
                                    <div className='ProductCard--hoverbox--icons' onClick={e => {
                                        e.stopPropagation()
                                        check ? removeFromFavourits() : addToFavourites()
                                        isLoggedIn && setCheck(prevCheck => !prevCheck)
                                        }
                                    }>
                                       { check && isLoggedIn ? <img width='100%' height='100%' alt='hw' className='red-heart' src={redheart}/> :<HeartIcon/> }
                                    </div>
                                </div>
                                :
                                <div className='relative'>
                                    <div className='relative'>
                                        {wishlist &&
                                        <img alt='hw' className='red-heart' src={redheart}/>}
                                        {!wishlist &&
                                          <img alt='hw' src={mainimg}/>}
                                        <div className='product--sticker'>
                                            {New && <div className='product-circle product-New center'>
                                                <p>NEW</p>
                                            </div>}
                                            {tip && <div className='product-circle product-tip center'>
                                                <p>{tip}</p>
                                            </div>}
                                            {hot && <div className='product-circle product-Hot center'>
                                                <p>Hot</p>
                                            </div>}

                                        </div>
                                    </div>
                                </div>

                        }
                    </div>

            }
            <h6 className='ProductCard__name'>
                {name}
            </h6>
            <p className='ProductCard__cost'>
                AED {cost}
            </p>

        </div>
    ): null
}

export default ProductCard
