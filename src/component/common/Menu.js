import React, {useEffect, useState} from 'react'
import { Link, NavLink, useHistory, useLocation } from 'react-router-dom';
import floralogo from '../../assets/image/home/firenzflora logo1 1.png';
import arrow from '../../assets/image/home/icon/arrow.svg';
import card from '../../assets/image/home/icon/cart.svg';
import heart from '../../assets/image/home/icon/Combined Shape.svg';
import search from '../../assets/image/home/icon/search.svg';
import {useSelector} from "react-redux";
import {haveTokens} from "../../helpers/auth";
import {db} from "../../helpers/db";
import { useDispatch } from 'react-redux';
import { getBasket } from 'redux/action-creators/card';
import { requestGetBasket, requestAddToBasket } from 'queries/basket';
import user from 'assets/image/user.png'
import { Button } from '@material-ui/core';
import MaterialMenu from '@material-ui/core/Menu';
import MaterialMenuItem from '@material-ui/core/MenuItem';
import { requestGetProfile } from './../../queries/me';
import { getProfile } from 'redux/action-creators/profile';
import { getAbsolutePath } from './../../helpers/strings';
import { TYPES } from './../../redux/types';

const MenuItem = ({title, url, submenuList, hasDropdown, force, state}) => {
    const [submenu, setsubmenu] = useState(false)
    const { pathname } = useLocation()

    let URL =  `/${url}`
    let activeClass = 'Menu__List--item-active'
    if (url === undefined) {
        URL = pathname;
        activeClass = ''
    }

    return (

        <li className='Menu__List--item relative' onMouseOver={() => setsubmenu(true)}
            onMouseLeave={() => setsubmenu(false)}>
            <div className='d-flex Menu__List--item-a'>
				{
					force ?
						(
							<a rel="noreferrer" target='_blank' className='Menu__List--item' href={URL}>
								{title}
							</a>
						)
						:
						(
							<NavLink exact className='' activeClassName={activeClass} to={{ pathname:URL, state }}>
								{title}
							</NavLink>
						)
				}
                {hasDropdown
                &&
                <img alt='sub menu' style={{cursor: 'pointer'}} src={arrow} className='submenuicon'/>
                }
            </div>
            {hasDropdown && submenu ?
                <ul className='Menu__submenu list'>
                    {
                        submenuList.map(
                            (i, key) => (<li key={key}><Link to={i.url}>{i.name}</Link></li>)
                        )
                    }
                </ul>
                : null
            }
        </li>
    )
}
export const Menu = (props) => {
    const history = useHistory()
	const Card = useSelector(state => state.Card);

	const dispatch = useDispatch();
    const gotocard = () => {
        // history.push('/shoping-card')
        props.opencardnav()
    }
    const isLogin = haveTokens();
	const logout = () => {
		db.del('tokens');
		window.location.reload();
	};
    const { avatar } = useSelector(({ Profile }) => Profile.profile)

    const fetchBasket = () => {
        if (isLogin) {
            const localBasket = JSON.parse(localStorage.getItem('basket'))
            if (localBasket) {
                requestAddToBasket(localBasket.items)
            }

            requestGetProfile()
                .then(({ data }) => {
                    dispatch(getProfile(data))
                })
                .catch(err => console.log(err))

            return requestGetBasket()
            .then(({ data, detail }) => {
                data && dispatch(getBasket(data))
                debugger
                // if we got invalid items in the basket response
                if (detail.length !== 0) {
                    dispatch({ type: TYPES.UPDATE_INVALID_ITEMS, payload: detail })
                }
                
                localStorage.removeItem('basket')
            }).catch(err => console.error(err))
        }
        const localBasket = JSON.parse(localStorage.getItem('basket')) || { items: [] }
        dispatch(getBasket(localBasket))
    } 

    useEffect(() => {
         fetchBasket()
    }, [isLogin])
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
    return (
        <div className='Menu'>
            <div className='container'>
                <div className='Menu__sec d-flex-spacebetween'>
                    <div className='Menu__logo'>

                        <img className='Menu__logo-img' onClick={() => history.push('/')} src={floralogo}
                             alt='flora-logo'/>
                    </div>
                    <ul className='Menu__List d-flex list'>
                        <MenuItem exact={true} title='HOME' url=''/>
                        <MenuItem exact={true} submenuList={serviceList} title='SERVICES' hasDropdown/>
                        <MenuItem exact={true} title='SUBSCRIPTION' state="subscription" url='category/subscription'/>
                        <MenuItem exact={true} title='SIGNATURE DESIGNS' url='signature-design'/>
                        <MenuItem exact={true} title='GALLERY' url='gallery'/>
                        <MenuItem exact={true} title='CONTACT' url='contactus'/>
                        <MenuItem exact={true} title='CLIENTS' url='Testimonials'/>
                        <MenuItem exact={true} force title='BLOG' url='http://calistu.ir/flora/' />
                    </ul>
                    <div className='Menu__info d-flex'>
						{
							!isLogin &&
                                    <>
										<div className='Menu__log' onClick={props.openlogin}>
											login
										</div>
										<div className='Menu__log' children='|'/>
										<div className='Menu__log' onClick={props.openregister}>
											Register
										</div>
                                    </>
							
								
						}
                        <div className='Menu__icon d-flex'>
                            <img alt='hw' src={search} onClick={props.opensearch}/>
                            {
                            isLogin && (
                                <>
                                <Button aria-controls="menuId" aria-haspopup="true" onClick={handleClick}>
                                 <img alt='user' src={avatar ? getAbsolutePath(avatar) : user} />
                                </Button>
                                <MaterialMenu
                                    id="menuId"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    classes={{ paper: 'profileMenu' }}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                <MaterialMenuItem onClick={() => {
                                    history.push('/profile')
                                    handleClose()
                                }}>Profile</MaterialMenuItem>
                                <MaterialMenuItem onClick={logout}>Logout</MaterialMenuItem>
                              </MaterialMenu>
                </>
                            
                            )
                            }
                            <div className='Menu__card relative' onClick={gotocard}>
                                <img alt='hw' src={card}/>
                                <div className='Menu__card--num'>
									{Card.basket.items.length}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const serviceList = [

    {
        name: 'Event Service',
        url: '/Event-Service'
    },
    {
        name: 'Wedding Services',
        url: '/Wedding-Services'
    },
    {
        name: 'PREMIUM BUOQUET',
        url: '/PREMIUM-BUOQUET'
    },
    {
        name: 'CUSTOM BOXES',
        url: '/CUSTOM-BOXES'
    },
]
