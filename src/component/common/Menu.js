import React,{useState} from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom';
import floralogo  from '../../assets/image/home/firenzflora logo1 1.png';
import arrow  from '../../assets/image/home/icon/arrow.svg';
import card  from '../../assets/image/home/icon/cart.svg';
import heart  from '../../assets/image/home/icon/Combined Shape.svg';
import search  from '../../assets/image/home/icon/search.svg';


const MenuItem = ({title,url,submenuList,hasDropdown}) =>{
    //const [submenu,setsubmenu]=useState(false)
  
    return(
        <li  className='Menu__List--item relative'>
           <NavLink exact className='Menu__List--item-a' activeClassName='Menu__List--item-active' to={`/${url}`}>
             {title}
           </NavLink>      
             {hasDropdown
             && 
             <img style={{cursor:'pointer'}} src={arrow} className='submenuicon' />  
             }
             {hasDropdown  ? 
              <ul className='Menu__submenu list'>
                  {
                      submenuList.map(
                          i=>(<li ><Link to={i.url}>{i.name}</Link></li>)
                      )
                  }
              </ul>
          :null
             }
        </li>
    )
}
export const Menu = (props) => {
    const history = useHistory()
  const gotocard = ()=>{
   // history.push('/shoping-card')
   props.opencardnav()
  }
 
    return (
        <div className='Menu'>
           <div className='container-x'>
               <div className='Menu__sec d-flex-spacebetween'>
                  <div className='Menu__logo'>
                      <img className='Menu__logo-img' src={floralogo} alt='flora-logo'/>
                  </div>
                  <ul className='Menu__List d-flex list'>
                      <MenuItem exact={true} title='HOME' url=''/>
                      <MenuItem exact={true} submenuList={serviceList} title='SERVICES' url='service' hasDropdown/>
                      <MenuItem exact={true} title='SUBSCRIPTION' url='subscription'/>
                      <MenuItem exact={true} title='SIGNATURE DESIGNS ' url='signature-design'/>
                      <MenuItem exact={true} title='CONTACT US' url='contactus'/>
                      <MenuItem exact={true} title='BLOG' url='blog'/>
                  </ul> 
                  <div className='Menu__info d-flex'>
                     <div className='Menu__log' onClick={props.openlogin}>
                       
                            login
                      |
                       
                            Register
                        
                     </div>
                     <div className='Menu__icon d-flex'>
                       <img src={search} onClick={props.opensearch}/>
                       <img src={heart} onClick={()=>history.push('/wishlist')}/>
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
}
const serviceList=[
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