import React from 'react'
import HeaderShowcase from '../component/common/HeaderShowcase'
import background from '../assets/image/shopping card/shadow.png'
import SectionTitle from '../component/common/SectionTitle';
import BlogCard from '../component/common/BlogCard';
import image1 from '../assets/image/home/newpost/beautiful-floral-bouquet-with-pink-roses-box-pink-background (1) 1.png'
import image2 from '../assets/image/home/newpost/beautiful-floral-bouquet-with-pink-roses-box-pink-background (2) 1.png'
import profile from '../assets/image/home/newpost/default.png'
import { Link } from 'react-router-dom';
import UseWindowSize from '../Sizes/UseWindowSize'

const blogList = [
    {
        id:1,
        src:image1,
        title:"Fresh flowers you can  order any time ",
        author:"J. Cooper",
        dateday:'15',
        dateMounth:'Apr',
        authorepic:profile,
        comment:12,
        cap:'Flowers are symbols of life, openness, and beauty. They are usually present...',
        cat:'Home plants, AND TREND ITEMS'
    },
    {
        id:2,
        src:image2,
        title:"Fresh flowers you can  order any time ",
        author:"J. Cooper",
        dateday:'15',
        dateMounth:'Apr',
        authorepic:profile,
        comment:12,
        cap:'Flowers are symbols of life, openness, and beauty. They are usually present...',
        cat:'Home plants, AND TREND ITEMS'
    },
 
]
const Header =()=>{
  const windowSize = UseWindowSize();

  return(
    <> {
      windowSize === 'xs' ?
      <p className='active-cart-title'>ORDER COMPLETE</p>
   
    :    <div className='cart-title'>
    <p >SHOPPING CART /</p>
    <p >CHECKOUT/</p>
    <p className='active-cart-title'>ORDER COMPLETE</p>
  </div>
  }</>
    
  )
   
}
const OrderComplete = () => {
    return (
        <div>
             <HeaderShowcase backimg={background}>
               <Header />
             </HeaderShowcase> 
         
             <section className='order-complete'>
                   
                 <div className='container'>
                 <div className='order-complete-div'> 
                      <h1>Thank you for your purchase </h1>
                      <p className='order-complete-p'>Enjoy your day to the fullest.</p>
                      <Link to='/' >
                        Return home
                      </Link>
                   </div>
                     <SectionTitle title='Our New Articles' pretitle='SHARE BEST NEWS' subtitle='Happen, not  always the way you like it, not always preferred.'/>

                     <div className='new__article'>
                     {
             blogList.map(i=>
               <BlogCard 
               id={i.id}
               src={i.src}
               title={i.title}
               author={i.author}
               dateday={i.dateday}
               authorepic={i.authorepic}
               comment={i.comment}
               cap={i.cap}
               cat={i.cat}
               dateMounth={i.dateMounth}
               /> 
                )
         }
        
                     </div>
                 </div>
             </section>
        </div>
    )
}

export default OrderComplete
