import React, { useState } from "react";
import { Link } from "react-router-dom";
import { usePatch } from "../../hooks/usePatch";
import {
  requestChangePassword,
  requestGetOTP,
	requestGoogleLogin,
	requestLogin,
} from "../../queries/auth";
import { CustomAlert } from "../../helpers/alert";
import { db } from "../../helpers/db";
import GoogleLogin from "react-google-login";
import { requestVerifyOTP } from './../../queries/auth';
import Spinner from "./Spinner";

const ResetPasswordNav = (props) => {
	const [nav /*setnav*/] = useState(true);
	const [OTP, setOTP] = useState(null);
  const [loading, setLoading] = useState(false);
	const [formData, setFormData] = usePatch({
		username: "",
		password: "",
    enteredOTPByuser: "",
    // oldPassword: "",
    // newPassword: ""
	});
	const close = () =>	props.closenav();

	const getOTPCode = (e) => {
    e.preventDefault();
    const EMAIL_PATTERN =  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const UAE_PHONE_PATTERN =  /^(?:\+971|00971|0)?(?:50|51|52|55|56|2|3|4|6|7|9)\d{7}$/
    
    if (!EMAIL_PATTERN.test(formData.username) && !UAE_PHONE_PATTERN.test(formData.username)) {
      return CustomAlert({ icon: 'warning', text: 'Fill the input with correct value' })
    }
    setLoading(true)
    
		const PAYLOAD = {
			username: formData.username,
		};

		requestGetOTP(PAYLOAD)
      .then(response => {
        setLoading(false)
        CustomAlert({ icon: 'success', text: 'We sent you a code, please verify it !' })
        const OTPCODE = response.data.detail.split(' ')[3]
        setOTP(OTPCODE)
      })
      .catch(err => {
        setLoading(false)
        CustomAlert({ icon: 'error', text: 'username is not valid, try creating a new account' })
      }
    );
	};

  const veryfyOTP = (e) => {
    e.preventDefault()
    if (formData.enteredOTPByuser !== OTP) {
      return CustomAlert({ icon: 'error', text: 'verification code is not valid !' })
    }
    
    setLoading(true)
  	const PAYLOAD = {
			username: formData.username,
      verification_code: OTP
		};

    requestVerifyOTP(PAYLOAD)
      .then(res => {
        setLoading(false)
        setOTP(null)
        db.set('tokens', res.data);
        window.location.reload()
      }).catch(err => {
        setLoading(false)
      })
  }

  // const changePassword = (e) => {
  //   e.preventDefault()

  //   if (!formData.newPassword ||!formData.oldPassword ) {
  //     return CustomAlert({ icon: 'error', text: 'Fill all inputs!' })
  //   }

  //   const PAYLOAD = {
  //     old_password: formData.oldPassword,
  //     new_password: formData.newPassword
  //   }

  //   requestChangePassword()
  // }
  const submitButton =  OTP ? "Login" : "Send me the code"
	return (
		<div className={`cardnav_back  `}>
			<div
				className={`CardNav ${
					nav ? "cardnav__true" : "cardnav__false"
				} `}
			>
				<div className="CardNav_close d-flex" onClick={close}>
					<i className="fas fa-times" />
					<p>close</p>
				</div>
				<div className="CardNav__container">
					<div className="CardNav__header">
						<h2>Lost pasword</h2>
					</div>
					<form onSubmit={OTP  ? veryfyOTP : getOTPCode}>
            {
              !OTP &&
                  <div className="CheckOutForm__review reviewform-row">
                    <label className="CheckOutForm__label">
                      Username or email address <span>*</span>{" "}
                    </label>
                    <input
                      value={formData.username}
                      onChange={({ target }) =>
                        setFormData({ username: target.value })
                      }
                      className="CheckOutForm__input"
                      required
                    />
                  </div>
            }
            {
              OTP && <div className="CheckOutForm__review reviewform-row">
                        <label className="CheckOutForm__label">
                          Code <span>*</span>{" "}
                        </label>
                        <input
                          value={formData.enteredOTPByuser}
                          onChange={({ target }) =>
                            setFormData({ enteredOTPByuser: target.value })
                          }
                          className="CheckOutForm__input"
                          required
                        />
				        		</div>
            }
            {/* {
              formData.newPassword && (
                <>
                  <div className="CheckOutForm__review reviewform-row">
                    <label className="CheckOutForm__label">
                      old password <span>*</span>{" "}
                    </label>
                    <input
                      value={formData.oldPassword}
                      onChange={({ target }) =>
                        setFormData({ oldPassword: target.value })
                      }
                      className="CheckOutForm__input"
                      required
                    />
                  </div>
                  <div className="CheckOutForm__review reviewform-row">
                    <label className="CheckOutForm__label">
                      new password <span>*</span>{" "}
                    </label>
                    <input
                      value={formData.newPassword}
                      onChange={({ target }) =>
                        setFormData({ newPassword: target.value })
                      }
                      className="CheckOutForm__input"
                      required
                    />
                  </div>
                </>
              )
            } */}
            
						<button
							className="btn third-btn"
							style={{ width: "100%" }}
						>
							{
                loading 
                  ? <Spinner />
                  : submitButton

              }
						</button>
					</form>

					<div className="logincard__footer">
						<i className="far fa-user" />
						<a
							onClick={props.openRegister}
							style={{ cursor: "pointer" }}
							className="createanaccount"
						>
							CREATE AN ACCOUNT
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResetPasswordNav;
