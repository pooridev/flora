import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {usePatch} from "../../hooks/usePatch";
import {requestRegister} from "../../queries/auth";
import {CustomAlert} from "../../helpers/alert";
import Spinner from './Spinner';

const RegisterNav = (props) => {
	const [nav] = useState(true)
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = usePatch({
		first_name: "",
		last_name: "",
		mobile_number: "",
		email: "",
		password: ""
	});
    const close = () => {
        // setnav(false)
        // setInterval(() => {
        //   props.closenav()
        // }, 300);
        props.closenav()
    }

    const register = (e) => {
			setLoading(true)
    	e.preventDefault();
    	const PAYLOAD = {
    		...formData
		}
		requestRegister(PAYLOAD)
			.then(() => {
				setLoading(false)
				props.closenav();
				CustomAlert({
					icon: 'success',
					title: 'User created successfully.'
				})
			})
			.catch(error => {
				setLoading(false)
				console.log(error);
				CustomAlert({
					icon: 'error',
					title: 'Registration encountered an error.'
				})
			})
	}


    return (
        <div className={`cardnav_back  `}>
            <div className={`CardNav ${nav ? 'cardnav__true' : 'cardnav__false'} `}>
                <div className='CardNav_close d-flex' onClick={close}>
                    <i className="fas fa-times"/>
                    <p>close</p>
                </div>
                <div className='CardNav__container'>
                    <div className='CardNav__header'>
                        <h2>REGISTER</h2>
                    </div>
                    <form onSubmit={register}>
                        <div className='CheckOutForm__review reviewform-row'>
                            <label className='CheckOutForm__label'>First name <span>*</span> </label>
                            <input
								value={formData.first_name}
								onChange={({target}) => setFormData({first_name: target.value})}
								className='CheckOutForm__input' required/>
                        </div>
						<div className='CheckOutForm__review reviewform-row'>
							<label className='CheckOutForm__label'>Last name <span>*</span> </label>
							<input
								value={formData.last_name}
								onChange={({target}) => setFormData({last_name: target.value})}
								className='CheckOutForm__input' required/>
						</div>
						<div className='CheckOutForm__review reviewform-row'>
							<label className='CheckOutForm__label'>Mobile number <span>*</span> </label>
							<input
								value={formData.mobile_number}
								onChange={({target}) => setFormData({mobile_number: target.value})}
								className='CheckOutForm__input' required/>
						</div>
						<div className='CheckOutForm__review reviewform-row'>
							<label className='CheckOutForm__label'>Email <span>*</span> </label>
							<input
								value={formData.email}
								onChange={({target}) => setFormData({email: target.value})}
								type='email' className='CheckOutForm__input' required/>
						</div>
						<div className='CheckOutForm__review reviewform-row'>
							<label className='CheckOutForm__label'>Password <span>*</span> </label>
							<input
								value={formData.password}
								onChange={({target}) => setFormData({password: target.value})}
								type='password' className='CheckOutForm__input' required/>
						</div>

                        <button className='btn third-btn' style={{width: '100%'}}>
													{ loading ? <Spinner /> : 'Register' }
                        </button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default RegisterNav
