import React from 'react'
import HeaderShowcase from '../component/common/HeaderShowcase'
import ProductSection from '../component/shoplist/ProductSection'
import background from '../assets/image/shopping card/shadow.png'
import OrderTable from '../component/shoplist/OrderTable'
import OrderPayment from '../component/shoplist/OrderPayment'
import UseWindowSize from '../Sizes/UseWindowSize'

const Header =()=>{
    const windowSize = UseWindowSize();

    return(<> {
        windowSize === 'xs' ?
        <p className='active-cart-title'>SHOPPING CART </p>
     
      : <div className='cart-title'>
           

            
      <p className='active-cart-title'>SHOPPING CART </p>
      <p>/CHECKOUT</p>
      <p>/ORDER COMPLETE</p>
    </div>
    }</>)
}
const ShopList = () => {

    return (
        <div>
             <HeaderShowcase backimg={background}>
              <Header />
             </HeaderShowcase>
             <ProductSection />
            <section>
                <div className='container'>
                    <div className='ShopList__order'>
                     <OrderTable />
                     <OrderPayment />
                 </div>
                </div>
            </section>
        </div>
    )
}

export default ShopList
