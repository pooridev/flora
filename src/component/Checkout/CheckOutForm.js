import React from 'react'
import { Link } from 'react-router-dom'

const CheckOutForm = () => {
    return (
        <div className='CheckOutForm'>
            <p className='CheckOutForm-header'>Returning customer? <Link to=''>Click here to login </Link></p>
            <p className='CheckOutForm-header'>Have a coupon? <Link to=''>Click here to enter your code  </Link></p>

              <form className='CheckOutForm--form'>
          <h2>BILLING DETAILS  </h2>
          <div className='CheckOutForm__userInput reviewform-row'>
          <div className='CheckOutForm__review '>
                <label className='CheckOutForm__label' >First name   <span>*</span></label>
                <input className='CheckOutForm__input'/>
            </div>
            <div className='CheckOutForm__review '>
                <label className='CheckOutForm__label' >Last name <span>*</span></label>
                <input className='CheckOutForm__input'/>
            </div>
          </div>
          <div className='CheckOutForm__review reviewform-row'>
                <label className='CheckOutForm__label' >Company name(optional)</label>
                <input className='CheckOutForm__input'/>
            </div>
            <div className='CheckOutForm__review reviewform-row'>
                <label className='CheckOutForm__label' >Country / Region <span>*</span></label>
                <input className='CheckOutForm__input'/>
            </div>
            <div className='CheckOutForm__review reviewform-row'>
                <label className='CheckOutForm__label' >Street address  <span>*</span></label>
                <input placeholder='House number and street name' className='CheckOutForm__input'/>
                <input placeholder='Apartment, suite, unit, etc. (optional)' className='CheckOutForm__input'/>

            </div>
            <div className='CheckOutForm__review reviewform-row'>
                <label className='CheckOutForm__label' >Town / City   <span>*</span></label>
                <input className='CheckOutForm__input'/>
            </div>
            <div className='CheckOutForm__review reviewform-row'>
                <label className='CheckOutForm__label' >State   <span>*</span></label>
                <select className='select-input' defaultValue='Select an option…' >
                    <option value='Select an option…' >Select an option…</option>
                    <option>2</option>
                </select>
            </div>
            <div className='CheckOutForm__review reviewform-row'>
                <label className='CheckOutForm__label' >Zip   <span>*</span></label>
                <select  className='select-input'  defaultValue='Select an option…' >
                    <option value='Select an option…' >Select an option…</option>
                    <option>2</option>
                </select>
            </div>
            <div className='CheckOutForm__review reviewform-row'>
                <label className='CheckOutForm__label' >Phone number  <span>*</span></label>
                <input className='CheckOutForm__input'/>
            </div>
            <div className='CheckOutForm__review reviewform-row'>
                <label className='CheckOutForm__label' >Email address  <span>*</span></label>
                <input type='email' className='CheckOutForm__input'/>
            </div>
            <div className='CheckOutForm__checkbox reviewform-row'>
                <div className='d-flex CheckOutForm__checkbox-box'>
                    <input type='checkbox' id='createacount'/>
                    <label className='CheckOutForm__label chechbox-label'  for='createacount'>Create an account?</label>
                </div>
                <div className='d-flex CheckOutForm__checkbox-box'>
                    <input  type='checkbox' id='createacount'/>
                    <label className='CheckOutForm__label chechbox-label'  for='createacount'>Ship to a different address?</label>
                </div>
                <p>Order notes (optional)</p>
                <p className='CheckOutForm__p '>Notes about your order, e.g. special notes for delivery.</p>

            </div>
            
            
           </form> 
        </div>
    )
}

export default CheckOutForm
