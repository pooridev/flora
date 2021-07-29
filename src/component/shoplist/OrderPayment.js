import React from 'react'
import { useHistory } from 'react-router-dom'

const OrderPayment = () => {
    const history = useHistory()
    const gotocheckout = ()=>{
      history.push('/check-out')
    }
    return (
        <div className='OrderPayment'>
            <div className='OrderPayment__head d-flex-spacebetween'>
                <p>PRODUCT	</p>
                <p>SUBTOTAL</p>
            </div>
            <div className='OrderPayment__productsec '>
            <div className='OrderPayment__product d-flex-spacebetween'>
                <p>Roses in a Box (Black Box, Medium)	</p>
                <p>AED 232</p>
            </div>
            <div className='OrderPayment__product d-flex-spacebetween'>
                <p>Naumber Balloon	</p>
                <p>AED 232</p>
            </div>
            </div>
            <div className='OrderPayment__subtotal d-flex-spacebetween'>
                <p>Subtotal	</p>
                <p className='OrderPayment__subtotal--price'>AED 232</p>
            </div>
            <div className='OrderPayment__shipping d-flex-spacebetween'>
                <p>Shipping	</p>
                <div className='OrderPayment__shipping--option'>
                    
                    <div  className='OrderPayment__shipping--optionbox d-flex'>
                       <label for="Flat">Flat rate:<span>AED 20</span></label>
                       <input type="radio" id="Flat" name="shipping" value="Flat"/>
                    </div>
                  
                    <div  className='OrderPayment__shipping--optionbox d-flex'>
                       <label for="Freeshipping">Free shipping</label>
                       <input type="radio" id="Freeshipping" name="shipping" value="Freeshipping"/>
                    </div>
                    <div  className='OrderPayment__shipping--optionbox d-flex'>
                       <label for="Local">Local pickup:<span>AED 25</span></label>
                       <input type="radio" id="Local" name="shipping" value="Local"/>
                    </div>
                </div>

            </div>
            <div className='OrderPayment__total d-flex-spacebetween'>
                <p>TOTAL	</p>
                <p className='OrderPayment__total--price'>AED <span>232</span></p>
            </div>
          <div className='center OrderPayment__btn'>
          <button className='btn third-btn' onClick={gotocheckout} >
            Proceed to checkout
            </button>
          </div>
        </div>
    )
}

export default OrderPayment
