import React, { useState } from 'react';
import email from '../../assets/image/home/icon/footer/email.svg'
import phone from '../../assets/image/home/icon/footer/phone.svg'
import whatsapp from '../../assets/image/home/icon/footer/whatsapp.svg'
import skype from '../../assets/image/home/icon/footer/skype.svg'
import linkdin from '../../assets/image/home/icon/footer/linkdin.svg'
import pintrest from '../../assets/image/home/icon/footer/pintrest.png'
import facebook from '../../assets/image/home/icon/footer/facebook.svg'
import instagram from '../../assets/image/home/icon/footer/instagram.svg'
import blog1 from '../../assets/image/home/footer/Rectangle 92.png'
import blog2 from '../../assets/image/home/footer/Rectangle 93.png'
import { Link, useHistory } from 'react-router-dom';
import arrowdown from '../../assets/image/home/icon/black-arrowdown.svg'
import UseWindowSize from '../../Sizes/UseWindowSize';
import imag1 from '../../assets/image/home/icon/footer/master-card 1.svg'
import imag2 from '../../assets/image/home/icon/footer/visa 1.svg'
import imag3 from '../../assets/image/home/icon/footer/paypal-color 1.svg'

const menuList = [
    'Our Story',
    'Care Tips',
    'Corporate Gifting',
    'FAQ',
    'Terms Of use',
    'Privacy Policy',
    'Testimonial',
    'Event Service ',
    'Wedding Services'
]
const catlist = [
    'Complete Range',
    'Fresh roses in box',
    'Long Life Roses in Boxes',
    'Mix flowers in box',
    'Signature design',
    'Premium buoquet',
    'Custom boxes',
    'Flower Subscription ',
    'Premium Orchid Plants',
    'Dried Flowers '
]
const cantactList = [
    'Contact us',
    'Subscription',
    'Our blog',
    
]
const FooterTitle =({headertitle})=>{
    return(
        <h6 className='FooterTitle'>
          {headertitle}
        </h6>
    )
}
const FooterBlogCard=({src,title,comment,date,url})=>{
  const history = useHistory()

    return(
       <div className='FooterBlogCard ' onClick={()=>history.push(`/${url}`)}>
         <img src={src}/>
         <div className='FooterBlogCard__info'>
           <p  className='FooterBlogCard__info--title'>{title}</p>
           <div className='FooterBlogCard__info--sub'>
            <p>{date}</p>
            <p>{comment}comment</p>
           </div>
         </div>
       </div>
    )
}
const Footer = () => {
  const [open1, setopen1] = useState(false);
  const [open2, setopen2] = useState(false);
  const [open3, setopen3] = useState(false);
  const [open4, setopen4] = useState(false);
  const windowSize = UseWindowSize();
    return (
        <footer className='footer'>
            <div className='container'>
                 <div className='footer-container'>
                    <div className='Footer__flowerexpress footer-column'>
                       <FooterTitle headertitle='flower express' /> 
                       <p className='Footer__flowerexpress--p'>
                          Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Etiam gravida ultrices mauris
                          cursus sceleri
                       </p>
                       <ul className='list Footer__flowerexpress--list'>
                           <li>
                               <img src={email}/>
                               <p>support@flowerexpress.ae</p>
                           </li>
                           <li>
                               <img src={phone}/>
                               <p>+97144329819</p>
                           </li>
                           <li>
                               <img src={whatsapp}/>
                               <p>+971525577476</p>
                           </li>
                       </ul>
                        <div className='Footer__flowerexpress--social'>
                           <FooterTitle headertitle='Follow us on social' /> 
                           <div className='d-flex footer__social'>
                               <img src={skype}/>
                               <img src={linkdin}/>
                               <img src={pintrest}/>
                               <img src={facebook}/>
                               <img src={instagram}/>

                           </div>
                             
                        </div>                          
                     </div>    
                     <div className='Footer__lastblog footer-column'>
                    { windowSize === 'xs'
                    ?
                     <div className='d-flex-spacebetween' style={{width:'100%'}} 
                     onClick={()=>setopen1(!open1)}>
                      <FooterTitle headertitle='Recent post on blog' /> 
                      <img src={arrowdown} />
                    </div>
                    :
                    <FooterTitle headertitle='Recent post on blog' /> 

                    }
                     { windowSize === 'xs'
                     ?open1 &&
                     <>
                     <FooterBlogCard 
                           src ={blog1}
                           title ='Lorem ipsum dolor sit '
                           comment ='1'
                           date='July 23,2016'
                           url=''
                        />
                         <FooterBlogCard 
                           src ={blog2}
                           title ='Lorem ipsum dolor sit '
                           comment ='1'
                           date='July 23,2016'
                           url=''
                           
                        />
                     </>
                     :
                     <>
                     <FooterBlogCard 
                           src ={blog1}
                           title ='Lorem ipsum dolor sit '
                           comment ='1'
                           date='July 23,2016'
                           
                        />
                         <FooterBlogCard 
                           src ={blog2}
                           title ='Lorem ipsum dolor sit '
                           comment ='1'
                           date='July 23,2016'
                           
                        />
                     </>

}

                        
                     </div>
                     <div className='Footer__menu footer-column'>
                     { windowSize === 'xs'
                    ?
                     <div className='d-flex-spacebetween' style={{width:'100%'}} 
                     onClick={()=>setopen2(!open2)}>
                     <FooterTitle headertitle='Menu' /> 
                      <img src={arrowdown} />
                    </div>
                    :
                     <FooterTitle headertitle='Menu' /> 

                    }
                    { windowSize === 'xs'
                     ? open2 &&
                     <>
                   
                        <ul className='footer-menu list footer-list'>
                            {menuList.map(i=><li >
                              <Link to=''>
                                {i}
                              </Link>
                            </li>)}
                         </ul>
                     </>
                     :
                     <>
                  
                        <ul className='footer-menu list footer-list'>
                            {menuList.map(i=><li >
                              <Link to=''>
                                {i}
                              </Link>
                            </li>)}
                         </ul>
                     </>

}
                     </div>
                     <div className='Footer__categories footer-column'>
                     { windowSize === 'xs'
                    ?
                     <div className='d-flex-spacebetween' style={{width:'100%'}} 
                     onClick={()=>setopen3(!open3)}>
                     <FooterTitle headertitle='CATEGOREIS' /> 
                      <img src={arrowdown} />
                    </div>
                    :
                    <FooterTitle headertitle='CATEGOREIS' /> 

                    }
                      { windowSize === 'xs'
                     ? open3 &&
                     <>
                   
                   <ul className='footer-categories list footer-list'>
                            {catlist.map(i=><li >
                              <Link to=''>
                                {i}
                              </Link>
                            </li>)}
                         </ul>
                     </>
                     :
                     <>
                  
                  <ul className='footer-categories list footer-list'>
                            {catlist.map(i=><li >
                              <Link to=''>
                                {i}
                              </Link>
                            </li>)}
                         </ul>
                     </>

}
                        
                     </div>

                     <div className='Footer__contact footer-column'>
                     { windowSize === 'xs'
                    ?
                     <div className='d-flex-spacebetween' style={{width:'100%'}} 
                     onClick={()=>setopen4(!open4)}>
                        <FooterTitle headertitle='CONTACT' /> 
                      <img src={arrowdown} />
                    </div>
                    :
                    <FooterTitle headertitle='CONTACT' /> 

                    }
                       { windowSize === 'xs'
                     ? open4 &&
                     <>
                   
                   <ul className='footer-categories list footer-list'>
                            {cantactList.map(i=><li >
                              <Link to=''>
                                {i}
                              </Link>
                            </li>)}
                         </ul>
                     </>
                     :
                     <>
                  
                  <ul className='footer-categories list footer-list'>
                            {cantactList.map(i=><li >
                              <Link to=''>
                                {i}
                              </Link>
                            </li>)}
                         </ul>
                     </>

}
                        
                         <div className='footer__getnews'>
                          <FooterTitle headertitle='Stay Tunned' /> 
                          <input className='footer__input' placeholder='Put youre email here...' />
                          <button className='third-btn btn'>subscribe</button>
  
                         </div>
                     </div>
                     

                 </div>
            </div>
          <div className='container'>
          <div className='FooterCopyright'>
            <p>Copyright 2021 Flora. All Right Reserved</p>
            <div className='d-flex'>
              <img src={imag1}/>
              <img src={imag2}/>
              <img src={imag3}/>


            </div>
            </div>
          </div>
        </footer>
    )
}

export default Footer
