import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import paypal from '../../assets/image/shopping card/AM_mc_vs_dc_ae 1.png'
const CheckOutPayment = () => {
    const history = useHistory()
    const gotoFicnish = ()=>{
        history.push('/order-complete')
    }
    return (
        <div className='CheckOutPayment'>
            <h2>
                YOUR ORDER
            </h2>
            <div className='CheckOutPayment__info'>
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
            </div>
            <div  className='CheckOutPayment__shipping--optionbox d-flex'>
               <input type="radio" id="transfer" name="transfer" value="transfer"/>
               <label for="transfer"> Direct bank transfer</label>

           </div>
           <div className='CheckOutPayment_des'>
             <p>
             Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.
             </p>
           </div>
           <div className='CheckOutPayment__shipping--option'>
                    
              <div  className='OrderPayment__shipping--optionbox d-flex'>
                 <input type="radio" id="Payment" name="Payment" value="Payment"/>
                 <label for="Payment">Cheque Payment
               </label>

              </div>
             
              <div  className='OrderPayment__shipping--optionbox d-flex'>
              <input type="radio" id="Cash" name="Payment" value="Cash"/>

                 <label for="Cash">Cash on delivery</label>
              </div>
              <div  className='OrderPayment__shipping--optionbox d-flex'>
                 <input type="radio" id="PayPal" name="Payment" value="PayPal"/>

                 <label for="PayPal "> <div className='d-flex'><p>PayPal</p> <img src={paypal} /> <Link>What is PayPal?</Link></div></label>
                    </div>
            </div>
            <p className='OrderPayment__paragraph'>
              Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
            </p>
            <div className='CheckOutForm__checkbox reviewform-row'>
                <div className='d-flex CheckOutForm__checkbox-box'>
                    <input type='checkbox' id='conditions'/>
                    <label className='CheckOutForm__label chechbox-label'  for='conditions'>
                    I have read and agree to the website terms and conditions *
                    </label>
                </div>
                

            </div>
            <button className='btn third-btn CheckOutForm-btn' onClick={gotoFicnish}>
              PLACE ORDER
            </button>
        </div>
    )
}

export default CheckOutPayment
