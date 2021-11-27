import React, {useState} from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import search from '../../assets/image/home/icon/search.svg';
import arrowdown from '../../assets/image/home/icon/arrow-down.svg'

const ResponsiveMenuLink = (props) => {
    const [tab, settab] = useState(1);
    const [isOpen, setisOpen] = useState(false);

    const OpenSub = () => {
        setisOpen(!isOpen)
    }

    const tablist = [
        {
            tab: '  MENU',
            id: 1
        },
        {
            tab: 'SERVICES',
            id: 2
        },

    ]
    const menuList = [
        {
            name: 'Home',
            url: '/'
        },
        {
            name: 'OUR STORY',
            url: '/our-story'
        },
        {
            name: 'CLIENTS',
            url: '/testimonials'
        },
        {
            name: 'GALLERY',
            url: '/gallery'
        },
        {
            name: 'CORPORATE GIFTING',
            url: '/CORPORATE-GIFTING'
        },
        {
            name: 'FAQ',
            url: '/faq'
        },
        {
            name: 'TERMS OF USE',
            url: '/TERMS-OF-USE'
        },
        {
            name: 'PRIVACY POLICY',
            url: '/PRIVACY-POLICY'
        },
        {
            name: 'TESTOMONIAL',
            url: '/Testimonials'
        },
        {
            name: 'CONTACT US',
            url: '/contactus'
        },
        {
            name: 'SUBSCRIPTION',
            state: 'subscription',
            url: '/category/subscription'
        },
        {
            name: 'OUR BLOG',
            url: 'https://calistu.ir/flora/',
            force: true
        },

    ]
    const ServiceList = [
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

    const [nav] = useState(true)
    const close = () => {
        props.closenav()
    }

    const history = useHistory();
  
    const [searchValue, setSearchValue] = useState('');
  
    const searchInProductsHandler = e => {
      e.preventDefault();

      if (!searchValue) return
      
      setSearchValue(searchValue.toLowerCase());

      history.push('/products/' + searchValue);
      close();
    };

    return (
        <div className={`cardnav_back  `} onClick={close}>

            <div className={`CardNav menunav ${nav ? 'cardnav__true' : 'cardnav__false'} `}
                 onClick={(e) => e.stopPropagation()}>

                <nav className="">
                    <ul className="phoneNavigation__list">
                        <form onSubmit={searchInProductsHandler} className='phoneNavigation__searchbox d-flex'>
                            <input type='text' value={searchValue}
                                onChange={e => setSearchValue(e.target.value)} 
                                placeholder='search for Product'/>
                            <img alt='hw' src={search}/>
                        </form>
                        <div className='phoneNavigation__tabrow'>
                            {
                                tablist.map(
                                    i =>
                                        <div

                                            onClick={() => settab(i.id)} className={`phoneNavigation__tab
                                      ${i.id === tab ? 'active-phoneNavigation__tab' : null}`
                                        }>
                                            {i.tab}
                                        </div>
                                )

                            }
                        </div>
                        <div className="phoneNavigation__menu">
                            {
                                tab === 1 ?
                                    menuList.map(i => {
                                        if (i.force) {
                                            return (
                                                <li className="phoneNavigation__menuLink"> 
                                                    <a rel="noreferrer" target="_blank" href={i.url} onClick={props.closenav}>
                                                    {i.name}
                                                    </a>
                                                </li>
                                            )
                                        }
                                        return <div>
                                            <li className="phoneNavigation__menuLink">
                                                <NavLink to={{ pathname: i.url, state: i.state }} onClick={props.closenav}>
                                                    {i.name}
                                                </NavLink>
                                                {
                                                    i.sub && <div
                                                        className='phoneNavigation__menuLink--arrow center'>
                                                        <img alt='hw' onClick={OpenSub}
                                                             src={arrowdown} className={isOpen && 'imagerotate'}/>
                                                    </div>
                                                }

                                            </li>

                                            {isOpen && i.sub ? i.sub.map(j => <li
                                                className="phoneNavigation__submenu phoneNavigation__menuLink">{j}</li>) : null}
                                        </div>
                                    }
                                        
                                    ) :
                                    ServiceList.map(i => <li style={{textTransform: 'uppercase'}}
                                                             className="phoneNavigation__menuLink">
                                        <NavLink to={i.url} onClick={props.closenav}>
                                            {i.name}
                                        </NavLink>
                                    </li>)
                            }
                        </div>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
export default ResponsiveMenuLink
