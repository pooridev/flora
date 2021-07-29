import React from 'react'
import HeaderShowcase from '../component/common/HeaderShowcase'
import background from '../assets/image/shopping card/shadow.png'
import CheckOutForm from '../component/Checkout/CheckOutForm'
import CheckOutPayment from '../component/Checkout/CheckOutPayment'
import UseWindowSize from '../Sizes/UseWindowSize'

const Header =()=>{
  const windowSize = UseWindowSize();

    return(
      <> {
        windowSize === 'xs' ?
        <p className='active-cart-title'>CHECKOUT</p>
     
      :  <div className='cart-title'>
      <p >SHOPPING CART /</p>
      <p className='active-cart-title'>CHECKOUT</p>
      <p>/ORDER COMPLETE</p>
    </div>
    }</>
      
    )
}
const CheckOut = () => {
    return (
        <div >
             <HeaderShowcase backimg={background}>
              <Header />
             </HeaderShowcase>
             <section >
               <div className='container'>
                 <div className='CheckOut__form' >
                    <CheckOutForm />
                    <CheckOutPayment />
                 </div>
               </div>
             </section>
        </div>
    )
}

export default CheckOut
