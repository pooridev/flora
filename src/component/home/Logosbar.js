import React from 'react'
import logo1 from '../../assets/image/home/logobar/green-spa-leaf-flower-logo-design-template-black-vector-22993055.png';
import logo2 from '../../assets/image/home/logobar/Charlotte_Puxley_logo_transparent_250x.png';
import logo3 from '../../assets/image/home/logobar/il_570xN.png';
import logo4 from '../../assets/image/home/logobar/attachment_32451340.png';
import logo5 from '../../assets/image/home/logobar/EB-imagotype_small.png';
import { Link } from 'react-router-dom';

const array = [{src:logo1,url:'/'},
{src:logo2,url:'/'},
{src:logo3,url:'/'},
{src:logo4,url:'/'},
{src:logo5,url:'/'},]
const Logosbar = () => {
    return (
        <div className='Logosbar'>
           <div className='container'>
               <div className='logosbar__sec d-flex-spacebetween'>
                     {
                         array.map(i=><Link  to={i.url}className='Logosbar__image' >
                            <img src={i.src} alt='flower' />
                         </Link>)
                     }
               </div>
           </div>
        </div>
    )
}

export default Logosbar
