import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { usePatch } from './../../hooks/usePatch';
import { requestSendMessage } from './../../queries/contact-us';
import { CustomAlert } from 'helpers/alert';
import Spinner from 'component/common/Spinner';

const ContactusModal = (props) => {
    const [formData, setFormData] = usePatch({
        name: "",
        email: "",
        subject: "",
        contact_type: "",
        message: ""
    });
    const [loading, setLoading] =  useState(false)
    const sendMessage = (e) => {
        e.preventDefault()
        const EMAIL_PATTERN =  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        
        if (formData.name.length < 2) return CustomAlert({ icon: 'warning', text: 'Entered name is too short' })
        if (!EMAIL_PATTERN.test(formData.email)) return CustomAlert({ icon: 'warning', text: 'Entered company name is too short' })
        if (formData.subject.length < 2) return CustomAlert({ icon: 'warning', text: 'Entered subject is too short' })
        if (!formData.contact_type) return CustomAlert({ icon: 'warning', text: 'Contact type must be selected' })
        if (formData.message.length < 5) return CustomAlert({ icon: 'warning', text: 'Entered message is too short' })
        setLoading(true)
        
        const MESSAGE_PAYLOAD = {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            contact_type: formData.contact_type,
            message: formData.message
        }
        
        requestSendMessage(MESSAGE_PAYLOAD)
        .then(res => {
            setLoading(false)
            CustomAlert({ icon: 'success', title: 'Sent !', text: 'Your message has successfully sent' })
            props.close()
        }).catch(err => {
            setLoading(false)
            CustomAlert({ icon: 'error', title: 'Failed', text: 'Server error' })
        
        })
    }
    
    return (
        <div className='modal__bg center'>
            <div className='CardNav_close d-flex' style={{color: '#fafafa'}} onClick={props.close}>
                <i class="fas fa-times"></i>
            </div>
            <div className='modla__main'>
                <div className='ContactusModal'>
                    <div className='ContactusModal__form'>
                        <h4>SEND US A MESSAGE</h4>
                        <form className='ProductDetailReview__form' onSubmit={sendMessage}>
                            <div className='ReviewForm__userInput reviewform-row'>
                                <div className='ReviewForm__userInput-div'>
                                    <label className='ReviewForm__label'>Your Name</label>
                                    <input className='ReviewForm__input' type='text' onChange={({target}) => setFormData({name: target.value})} />
                                </div>
                                <div className='ReviewForm__userInput-div'>
                                    <label className=' ReviewForm__label'>Your Email</label>
                                    <input className='ReviewForm__input' type='email' onChange={({target}) => setFormData({email: target.value})}/>
                                </div>
                            </div>
                            <div className='ReviewForm__userInput reviewform-row'>
                                <div className='ReviewForm__userInput-div'>
                                    <label className='ReviewForm__label'>Subject</label>
                                    <input className='ReviewForm__input' type='text' onChange={({target}) => setFormData({subject: target.value})}/>
                                </div>
                                <div className='ReviewForm__userInput-div'>
                                    <select className='select-input' onChange={({ target }) => setFormData({contact_type: target.value})}>
                                        <option value=''>Contact type</option>
                                        <option value='event'>event</option>
                                        <option value='corporate_gift'>Corporate gift</option>
                                        <option value='wedding'>wedding</option>
                                        <option value='contact_us'>Contact us</option>
                                        <option value='subscription'>subscription</option>
                                        <option value='signiture_design'>Signiture design</option>
                                        <option value='premium'>premium</option>
                                        <option value='custom_boxes'>Custom boxes</option>
                                    </select>
                                </div>
                            </div>
                            <div className='ReviewForm__review reviewform-row'>
                                <label className='ReviewForm__label'>Your Message</label>
                                <textarea className='ReviewForm__textarea' onChange={({target}) => setFormData({message: target.value})} rows='4'/>
                            </div>

                            <div className='contactus_btnbox'>
                                <button type='submit' className='btn ContactusModal--btn'>
                                    {loading ? <Spinner /> : 'SEND'}
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className='ContactusModal__info'>
                        <h4>CONTACT INFORMATION</h4>
                        <div className='ContactusModal__info--body'>
                            <div className='ContactusModal__info--infobox d-flex'>
                                <div className='ContactusModal__info--infoboxicon'>
                                    <i class="fas fa-map-marker-alt"></i>

                                </div>
                                <p>50 East 52nd Street
                                    Brooklyn, NY 10022
                                    United States</p>
                            </div>
                            <div className='ContactusModal__info--infobox d-flex'>
                                <div className='ContactusModal__info--infoboxicon'>
                                    <i class="fas fa-mobile-alt"></i>
                                </div>
                                <p>+1322224332
                                    <br/>
                                    +4643758533</p>
                            </div>
                            <div className='ContactusModal__info--infobox d-flex'>
                                <div className='ContactusModal__info--infoboxicon'>
                                    <i class="far fa-paper-plane"></i>
                                </div>
                                <p>info@google.com
                                    <br/>
                                    support@google.com</p>
                            </div>
                        </div>

                        <div className='ContactusModal__info--footer'>
                            <p>Do you have questions about how we can help your company? Send us an email and we’ll get
                                in touch shortly.</p>
                            <div className='d-flex'>
                                <Link>
                                    <div className='contactus__social--circle center'
                                         style={{backgroundColor: '#365493'}}>
                                        <i class="fab fa-facebook-f"></i>
                                    </div>
                                </Link>
                                <Link>
                                    <div className='contactus__social--circle center' style={{backgroundColor: '#3CF'}}>
                                        <i class="fab fa-twitter"></i>
                                    </div>
                                </Link>
                                <Link>
                                    <div className='contactus__social--circle center'
                                         style={{backgroundColor: '#CB2027'}}>
                                        <i class="fab fa-pinterest-p"></i>
                                    </div>
                                </Link>
                                <Link>
                                    <div className='contactus__social--circle center'
                                         style={{backgroundColor: '#0274B3'}}>
                                        <i class="fab fa-linkedin-in"></i>
                                    </div>
                                </Link>
                                <Link>
                                    <div className='contactus__social--circle center'
                                         style={{backgroundColor: '#37AEE2'}}>
                                        <i class="fab fa-telegram-plane"></i>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ContactusModal
