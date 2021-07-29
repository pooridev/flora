import React from 'react'
import shop from '../../assets/image/home/icon/store.svg';
import heart from '../../assets/image/home/icon/Heart.svg';
import user from '../../assets/image/home/icon/user.svg';

const PhoneFooternav = () => {
    return (
        <div className='PhoneFooternav'>
            <div className='column-center'>
               <img src={shop} />
               <p>
                   Shop
               </p>
            </div>
            <div className='column-center'>
               <img src={heart} />
               <p>
                   Wishlist
               </p>
            </div>
            <div className='column-center'>
               <img src={user} />
               <p>
                   Account
               </p>
            </div>
        </div>
    )
}

export default PhoneFooternav
