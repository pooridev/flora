import React,{useState} from 'react'
import Map from './Map'
import location from '../../assets/image/contactus/location.svg';
import email from '../../assets/image/contactus/Email.svg';
import phone from '../../assets/image/contactus/Phone.png';
const ContactusInfoBox = ({icon,title,text}) =>{
    return(
        <div className='ContactusInfoBox'>
            <div className='ContactusInfoBox__flexbox'>
                <img src={icon} />
                <div >
                    <p className='ContactusInfoBox__title'>{title}</p>
                    <p className='ContactusInfoBox__text'>
                        {text}     
                    </p>
                </div>
            </div>
        </div>
    )
}
const ContactusInfo = () => {
    const [zoom, setZoom] = useState(15);

    return (
       <div className='container'>
            <div className='ContactusInfo-grid'>
            <div className='ContactusInfo__information'>
                <ContactusInfoBox icon={location} title='Address'
                 text='Dubai,1901 Thornridge Cir. Shiloh, Hawaii 81063'
                />
                 <ContactusInfoBox icon={email} title='Email'
                 text='kenzi.lawson@example.com'
                />
                 <ContactusInfoBox icon={phone} title='Phone number'
                 text='(319) 555-0115'
                />

                <div className='CheckOutForm__review ContactusInfo__inputbox '>
                <label className='CheckOutForm__label' >Write your message here</label>
                <input className='CheckOutForm__input'/>
            </div>
            <button className='btn third-btn' >
              send
            </button>
            </div>
            <Map />
        </div>
       </div>
    )
}

export default ContactusInfo
