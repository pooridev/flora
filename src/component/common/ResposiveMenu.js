import React, { useEffect } from 'react'
import floralogo from '../../assets/image/home/firenzflora logo1 1.png';
import card from '../../assets/image/home/icon/cart.svg';
import {useHistory} from 'react-router-dom';
import { haveTokens } from './../../helpers/auth';
import { requestGetBasket } from 'queries/basket';
import { getBasket } from 'redux/action-creators/card';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const ResposiveMenu = (props) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const gotocard = () => {
        props.opencardnav()
    }
    const Card = useSelector(state => state.Card);
    const isLogin = haveTokens();

    const fetchBasket = () => {
        if (isLogin) {
            return requestGetBasket()
                .then(({ data }) => {
                    data && dispatch(getBasket(data))
              }).catch(err => console.error(err))
        }
        const localBasket = JSON.parse(localStorage.getItem('basket')) || { items: [] }
        dispatch(getBasket(localBasket))
    } 

    useEffect(() => {
         fetchBasket()
    }, [])
    return (
        <div className='responsiveMenu'>
            <div className='container'>
                <div className='responsiveMenu__sec d-flex-spacebetween'>
                    <div className='responsivebar'>
                        <div onClick={props.openmenu} className="phoneNavigation__background"><i className="fas fa-bars"/></div>
                    </div>
                    <div className='Menu__logo'>
                        <img className='Menu__logo-img' onClick={() => history.push('/')} src={floralogo}
                             alt='flora-logo'/>
                    </div>
                    <div className='Menu__info d-flex'>
                        <div className='Menu__icon d-flex'>

                            <div className='Menu__card relative ' onClick={gotocard}>
                                <img alt='hw' src={card}/>
                                <div className='Menu__card--num'>
                                {Card?.basket?.items ? Card.basket.items.length : 0}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ResposiveMenu;


