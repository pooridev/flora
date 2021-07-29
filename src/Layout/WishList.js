import React from 'react'
import flower1 from '../assets/image/home/product/Rectangle 46.png'
import flower2 from '../assets/image/home/product/Rectangle 47.png'
import flower3 from '../assets/image/home/product/Rectangle 48.png'
import flower4 from '../assets/image/home/product/Rectangle 49.png'
import flower5 from '../assets/image/home/product/Rectangle 50.png'

import hoverflower1 from '../assets/image/home/product/hover/Rectangle 51.png'
import HeaderShowcase from '../component/common/HeaderShowcase'
import background from '../assets/image/rang/woman-holding-branch-snow-willow-flower 2.png'
import ProductCard from '../component/common/ProductCard'
const Header =()=>{
    return(
        <div className='header_title' style={{textAlign:'left'}}>
        <h2>Wishlist</h2>
      <div className='d-flex xs-opacity0'>
         <p >HOME </p>
         <p>/WISHLIST</p>
       </div>
    </div>
    )
}
const WishList = () => {
    const product = [
        {
            id:1,
           image:flower1,
           name:'Narcissus',
           cap:'Fresh roses',
           cost:'232',
           hoverimage:hoverflower1
        },
        {
           id:2,
          image:flower2,
          name:'Pink rose',
          cap:'Fresh roses',
          cost:'232',
          hoverimage:hoverflower1
    
       },
       {
           id:3,
          image:flower3,
          name:'Lavender',
          cap:'Fresh roses',
          cost:'232',
          hoverimage:hoverflower1
    
       },
       {
           id:4,
          image:flower4,
          name:'Tulip',
          cap:'Fresh roses',
          cost:'232',
          hoverimage:hoverflower1
    
       },
       {
           id:5,
          image:flower5,
          name:'Wake robin',
          cap:'Fresh roses',
          cost:'232',
          hoverimage:hoverflower1
    
       },
  
       
    ]
    return (
        <div>
             <HeaderShowcase backimg={background}>
              <Header />
             </HeaderShowcase>
             <div className='container'>
             <div className='wishlist-grid'>
            { product.map(i=><ProductCard 
                        id={i.id}

                         mainimg={i.image}  hoverimg={i.hoverimage}
                         name={i.name} cap={i.cap} cost={i.cost}
                       />)}
              </div>
             </div>
        </div>
    )
}

export default WishList

