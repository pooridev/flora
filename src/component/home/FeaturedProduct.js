import React,{useState} from 'react'
import SectionTitle from '../common/SectionTitle'
import flower1 from '../../assets/image/home/product/Rectangle 46.png'
import flower2 from '../../assets/image/home/product/Rectangle 47.png'
import flower3 from '../../assets/image/home/product/Rectangle 48.png'
import flower4 from '../../assets/image/home/product/Rectangle 49.png'
import flower5 from '../../assets/image/home/product/Rectangle 50.png'
import flower6 from '../../assets/image/home/product/Rectangle 52.png'
import flower7 from '../../assets/image/home/product/Rectangle 54.png'
import flower8 from '../../assets/image/home/product/Rectangle 55.png'
import flower9 from '../../assets/image/home/product/Rectangle 56.png'
import hoverflower1 from '../../assets/image/home/product/hover/Rectangle 51.png'
import ProductCard from '../common/ProductCard'
const FeaturedProduct = () => {
     const [tab, settab] = useState(1);
     const tablist = [
         {
             tab:' BEST SELLERS',
             id:1
         },
         {
            tab:'FEATURED',
            id:2
        },
        {
            tab:'SALES',
            id:3
        },
     ]
    return (
        <section className='FeaturedProduct' >
            <SectionTitle title='Featured products' pretitle='FLOWERS' subtitle='Will your clients accept that you go about things order.'/>
          <div className='container'>
               <div className='FeaturedProduct__tab'>
                   <div className='FeaturedProduct__tabhead center'>
                       {
                           tablist.map(
                               i=>
                               <div

                                 onClick={()=>settab(i.id)} className={`FeaturedProduct__tabhead--title 
                                  ${i.id === tab ? 'active-tabfeature' : null }`
                                 }>
                                   {i.tab}
                                   <div className='tabtitlehover'></div>
                                </div>
                           )
                           
                       }
                   </div>
                  <div className='FeaturedProduct__grid'>
                  {
                    tab===1 ?
                       bestseller.map(i=><ProductCard 
                        id={i.id}

                         mainimg={i.image}  hoverimg={i.hoverimage}
                         name={i.name} cap={i.cap} cost={i.cost}
                       />)
                       : tab === 2 ?
                       featured.map(i=><ProductCard 
                        id={i.id}

                         mainimg={i.image}  hoverimg={i.hoverimage}
                         name={i.name} cap={i.cap} cost={i.cost}
                       />) :
                       tab === 3 ?
                       sales.map(i=><ProductCard 
                        id={i.id}
                        mainimg={i.image}  hoverimg={i.hoverimage}
                         name={i.name} cap={i.cap} cost={i.cost}
                       />) : null
                   }
                  </div>
               </div>
               <div className='center' style={{margin:'30px 0'}}>
                   <button className='btn btn-secondary'>
                      LOAD MORE PRODUCTS
                   </button>
               </div>
          </div>
        </section>
    )
}

export default FeaturedProduct
const bestseller = [
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
   
]
const featured = [
  
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
    id:1,
   image:flower1,
   name:'Narcissus',
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
   
]
const sales = [
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
   
]