import React, { useState } from 'react'
import NumButton from './NumButton'
import img1 from '../../assets/image/shopping card/71-BLZxVrXL 1.png'
import img2 from '../../assets/image/shopping card/—Pngtree—golden event countdown balloon number_5737048 1.png'
import { useHistory } from 'react-router-dom'

const CardNavCard = ({img,title}) => {
    return (
        <div className='CardNavCard d-flex'>
           <img src={img}/>
           <div className='CardNavCard__info'>
               <h3>{title}</h3>
                <NumButton />
               <div className='d-flex CardNavCard__price'>
                   <span >2x</span>
                   <p>AED 250</p>
               </div>
           </div>
        </div>

    )
}
const CardNav = (props) => {
  const [nav, setnav] = useState(true)
  const close = ()=>{
    // setnav(false)
    // setInterval(() => {
    //   props.closenav()
    // }, 300);
    props.closenav()
}
const history = useHistory()
    return (
        <div className={`cardnav_back  `}>
            <div className={`CardNav ${nav ? 'cardnav__true' : 'cardnav__false'} ` }>
               <div className='CardNav_close d-flex' onClick={close}>
                 <i class="fas fa-times"></i>
                 <p>close</p>
              </div>
              <div className='CardNav__container'>
                   <div className='CardNav__header'>
                     <h2>Shopping Cart</h2>  
                   </div>
                   <CardNavCard img={img1} title='Rose in Box' />
                   <CardNavCard img={img2} title='Ballon' />
                   <CardNavCard img={img1} title='Rose in Box' />
              </div>
            <div className='CardNav__footer'>
            <div className='CardNav__cost'>
                  <p>SUBTOTAL</p>

                  <p className='CardNav__cost-price'>AED 23000</p>

              </div>
              <button className='CardNav__btn btn third-btn' onClick={()=>history.push('/shoping-card')}>
                ViewCart
              </button>
              <button className='CardNav__btn btn green_btn third-btn' onClick={()=>history.push('/checkout')}>
                CheckOut
              </button>

            </div>
            </div>
        </div>

    )
}

export default CardNav
