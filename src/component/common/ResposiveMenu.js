import React,{useState} from 'react'
import floralogo  from '../../assets/image/home/firenzflora logo1 1.png';
import card  from '../../assets/image/home/icon/cart.svg';
import { NavLink, useHistory } from 'react-router-dom';
import search  from '../../assets/image/home/icon/search.svg';
import arrowdown from '../../assets/image/home/icon/arrow-down.svg'
const ResponsiveMenuLink = ()=>{
    const [tab, settab] = useState(1);
    const [isOpen, setisOpen] = useState(false);
     
    const OpenSub = ()=>{
        setisOpen(!isOpen)
    }
 
    const tablist = [
        {
            tab:'  MENU',
            id:1
        },
        {
           tab:'SERVICES',
           id:2
       },
     
    ]
    const menuList = [
        {
            name:'Home',
            url:'/'
        },
        {
            name:'OUR STORY',
            url:'/our-story'
        },
        {
            name:'CARE TIPS',
            url:'/'
        },
        {
            name:'CORPORATE GIFTING',
            url:'/'
        },
        {
            name:'FAQ',
            url:'/faq'
        },
        {
            name:'TERMS OF USE',
            url:'/'
        },
        {
            name:'PRIVACY POLICY',
            url:'/'
        },
        {
            name:'TESTOMONIAL',
            url:'/Testimonials'
        },
        {
            name:'EVENT SERVICE',
            url:'/'
        },
        {
            name:'WEDDING SERVICES',
            url:'/'
        },
        {
            name:'CONTACT US',
            url:'/contactus'
        },
        {
            name:'SUBSCRIPTION',
            url:'/'
        },
        {
            name:'OUR BLOG',
            sub:['SINGLE BLOG'],
            url:'/'
        },
        {
            name:'WISHLIST',
            url:'/wishlist'
        },
     

    ]
    const ServiceList = [
        {
            name:'COMPLETE RANGE',
            url:'/Complete-range'
        },
        {
            name:'RESH ROSES IN BOX',
            url:'/'
        },
        {
            name:'LONG LIFE ROSES IN BOXES',
            url:'/'
        },
        {
            name:'MIX FLOWERS IN BOX',
            url:'/'
        },
        {
            name:'SIGNATURE DESIGN',
            url:'/'
        },
        {
            name:'PREMIUM BUOQUET',
            url:'/'
        },
        {
            name:'CUSTOM BOXES',
            url:'/'
        },
        {
            name:'FLOWER SUBSCRIPTION',
            url:'/'
        },
        {
            name:'PREMIUM ORCHID PLANTS',
            url:'/'
        },
        {
            name:'DRIED FLOWERS',
            url:'/'
        },
      
     

    ]
    return(
        <div className="phoneNavigation">
        <input
          type="checkbox"
          className="phoneNavigation__checkbox"
          id="navi-toggel"
        />
        <label for="navi-toggel" className="phoneNavigation__botton">
          <span className="phoneNavigation__icon">&nbsp;</span>
        </label>
        <div className="phoneNavigation__background">&nbsp;</div>
        <nav className="phoneNavigation__nav">
          <ul className="phoneNavigation__list">
            <div className='phoneNavigation__searchbox d-flex'>
               <input type='text' placeholder='search for Product'  />
               <img src={search} />
            </div>
            <div className='phoneNavigation__tabrow'>
            {
                           tablist.map(
                               i=>
                               <div

                                 onClick={()=>settab(i.id)} className={`phoneNavigation__tab 
                                  ${i.id === tab ? 'active-phoneNavigation__tab' : null }`
                                 }>
                                   {i.tab}
                                </div>
                           )
                           
                       }
            </div>
            <div  className="phoneNavigation__menu">
                {
                    tab === 1 ?
                    menuList.map(i=>
                       ( <div>
                        <li  className="phoneNavigation__menuLink">
                            <NavLink to={i.url}>
                                {i.name}
                            </NavLink>
                            {
                            i.sub && <div 
                            className='phoneNavigation__menuLink--arrow center'>
                              <img   onClick={OpenSub}
                   src={arrowdown} className={isOpen && 'imagerotate'}/>
                            </div>
                            }
                            
                        </li>

                        {isOpen && i.sub ? i.sub.map(j => <li className="phoneNavigation__submenu phoneNavigation__menuLink">{j}</li>) :null}
                        </div>)
                    ):
                    ServiceList.map(i=>  <li  className="phoneNavigation__menuLink">
                    <NavLink to={i.url}>
                        {i.name}
                    </NavLink>
                </li>)
                }
            </div>
          </ul>
        </nav>
      </div>
    )
}
const ResposiveMenu = (props) => {
    const history = useHistory()
    const gotocard = ()=>{
        props.opencardnav()    }
    return (
        <div className='responsiveMenu'>
           <div className='container'>
               <div className='responsiveMenu__sec d-flex-spacebetween'>
                   <div className='responsivebar'>
                      <ResponsiveMenuLink />
                      </div>
                  <div className='Menu__logo'>
                      <img className='Menu__logo-img' src={floralogo} alt='flora-logo'/>
                  </div>
                  <div className='Menu__info d-flex'>
                     <div className='Menu__icon d-flex'>
                      
                       <div className='Menu__card relative ' onClick={gotocard}>
                          <img src={card}/>
                          <div className='Menu__card--num'>
                              12
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
