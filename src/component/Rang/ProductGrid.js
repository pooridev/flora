import React from 'react'
import flower1 from '../../assets/image/home/product/Rectangle 46.png'
import flower2 from '../../assets/image/home/product/Rectangle 47.png'
import flower3 from '../../assets/image/home/product/Rectangle 48.png'
import flower4 from '../../assets/image/home/product/Rectangle 49.png'
import flower5 from '../../assets/image/home/product/Rectangle 50.png'
import flower6 from '../../assets/image/home/product/Rectangle 52.png'
import flower7 from '../../assets/image/home/product/Rectangle 54.png'
import flower8 from '../../assets/image/home/product/Rectangle 55.png'
import flower9 from '../../assets/image/home/product/Rectangle 56.png'
import ProductCard from '../common/ProductCard'
import hoverflower1 from '../../assets/image/home/product/hover/Rectangle 51.png'
const ProductGrid = () => {
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
       {
           id:6,
          image:flower6,
          name:'Narcissus',
          cap:'Fresh roses',
          cost:'232',
          hoverimage:hoverflower1
    
       },
       {
           id:7,
          image:flower5,
          name:'Tulip',
          cap:'Fresh roses',
          cost:'232',
          hoverimage:hoverflower1
    
       },
       {
           id:8,
          image:flower8,
          name:'Lavender',
          cap:'Fresh roses',
          cost:'232',
          hoverimage:hoverflower1
    
       },
       {
           id:9,
          image:flower9,
          name:'Pink rose',
          cap:'Fresh roses',
          cost:'232',
          hoverimage:hoverflower1
    
       },
       {
           id:10,
          image:flower7,
          name:'Wake robin',
          cap:'Fresh roses',
          cost:'232',
          hoverimage:hoverflower1
    
       },
       {
        id:11,
       image:flower1,
       name:'Narcissus',
       cap:'Fresh roses',
       cost:'232',
       hoverimage:hoverflower1
    },
    {
       id:12,
      image:flower2,
      name:'Pink rose',
      cap:'Fresh roses',
      cost:'232',
      hoverimage:hoverflower1

   },
   {
       id:13,
      image:flower3,
      name:'Lavender',
      cap:'Fresh roses',
      cost:'232',
      hoverimage:hoverflower1

   },
   {
       id:14,
      image:flower4,
      name:'Tulip',
      cap:'Fresh roses',
      cost:'232',
      hoverimage:hoverflower1

   },
   {
       id:15,
      image:flower5,
      name:'Wake robin',
      cap:'Fresh roses',
      cost:'232',
      hoverimage:hoverflower1

   },
   {
       id:16,
      image:flower6,
      name:'Narcissus',
      cap:'Fresh roses',
      cost:'232',
      hoverimage:hoverflower1

   },
   {
       id:17,
      image:flower5,
      name:'Tulip',
      cap:'Fresh roses',
      cost:'232',
      hoverimage:hoverflower1

   },
   {
       id:18,
      image:flower8,
      name:'Lavender',
      cap:'Fresh roses',
      cost:'232',
      hoverimage:hoverflower1

   },
   {
       id:19,
      image:flower9,
      name:'Pink rose',
      cap:'Fresh roses',
      cost:'232',
      hoverimage:hoverflower1

   },
   {
       id:20,
      image:flower7,
      name:'Wake robin',
      cap:'Fresh roses',
      cost:'232',
      hoverimage:hoverflower1

   },
       
    ]
    return (
        <div className='ProductGrid'>
            {
                   product.map(i=><ProductCard 
                    id={i.id}

                     mainimg={i.image}  hoverimg={i.hoverimage}
                     name={i.name} cap={i.cap} cost={i.cost}
                   />)
            }
        </div>
    )
}

export default ProductGrid
