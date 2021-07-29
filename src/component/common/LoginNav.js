import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const LoginNav = (props) => {
    const [nav, setnav] = useState(true)
    const close = ()=>{
      // setnav(false)
      // setInterval(() => {
      //   props.closenav()
      // }, 300);
      props.closenav()
  }
    return (
        <div className={`cardnav_back  `}>
        <div className={`CardNav ${nav ? 'cardnav__true' : 'cardnav__false'} ` }>
           <div className='CardNav_close d-flex' onClick={close}>
             <i class="fas fa-times"></i>
             <p>close</p>
          </div>
          <div className='CardNav__container'>
                   <div className='CardNav__header'>
                     <h2>SIGN IN</h2>  
                   </div>
               <form>
               <div className='CheckOutForm__review reviewform-row'>
                <label className='CheckOutForm__label' >Username or email address <span>*</span> </label>
                <input className='CheckOutForm__input'/>
            </div>
            <div className='CheckOutForm__review reviewform-row'>
                <label className='CheckOutForm__label' >Password <span>*</span></label>
                <input className='CheckOutForm__input'/>
            </div>
              
               <button className='btn third-btn' style={{width:'100%'}}>
                  Log in
               </button>
               <div className='d-flex-spacebetween'>
               <div className='d-flex CheckOutForm__checkbox-box'>
                    <input type='checkbox' id='Remember'/>
                    <label className='CheckOutForm__label chechbox-label'  for='Remember'>
                    Remember me
                    </label>
                </div>
                <Link className='lostpass'>
                 Lost your password?
                </Link>
               </div>
               </form>
               <div className='social--login'>
                   <div className='social-login-header d-flex'>
                       <div className='social--login--line'>

                       </div>
                       <p>OR LOGIN WITH</p>
                       <div className='social--login--line'>

                        </div>

                   </div>
               
                   <button className='social-btn btn login-icon-facebook socila-facebool relative'>
                   <div className='login-icon  center'>
                   <i class="fab fa-facebook-f"></i>
                   </div>
                   <p>Facebook</p>
                   </button>
                   <button className='social-btn login-icon-gmail btn socila-facebool relative'>
                   <div className='login-icon center'>  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="18px" height="18px" viewBox="0 0 48 48" class="abcRioButtonSvg"><script xmlns=""/><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></g></svg>
                   </div>
                      <p>GOOGLE</p>
                   </button>
               </div>
               <div className='logincard__footer'>
              <i class="far fa-user"></i>
                   <Link className='noaccountyet'>
                     No account yet?
                   </Link>
                  <Link className='createanaccount'>
                  CREATE AN ACCOUNT
                  </Link>
               </div>
              </div>
        </div>
    </div>

    )
}

export default LoginNav
