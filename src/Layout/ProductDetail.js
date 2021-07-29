import React,{useEffect} from 'react'
import ProductDetailImage from '../component/ProductDetail/ProductDetailImage'
import ProductdetailInfo from '../component/ProductDetail/ProductdetailInfo'
import ProductDetailTab from '../component/ProductDetail/ProductDetailTab'
import flower1 from '../assets/image/home/product/Rectangle 46.png'
import flower2 from '../assets/image/home/product/Rectangle 47.png'
import flower3 from '../assets/image/home/product/Rectangle 48.png'
import flower4 from '../assets/image/home/product/Rectangle 49.png'
import flower5 from '../assets/image/home/product/Rectangle 50.png'
import flower6 from '../assets/image/home/product/Rectangle 52.png'
import flower7 from '../assets/image/home/product/Rectangle 54.png'
import flower8 from '../assets/image/home/product/Rectangle 55.png'
import flower9 from '../assets/image/home/product/Rectangle 56.png'
import hoverflower1 from '../assets/image/home/product/hover/Rectangle 51.png'
import ProducDetailLikPriduct from '../component/ProductDetail/ProducDetailLikPriduct'
import UseWindowSize from '../Sizes/UseWindowSize'
import PhoneProductDetailacordion from '../component/ProductDetail/PhoneProductDetailacordion'

const ProductDetail = () => {
   const windowSize = UseWindowSize();
   useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
    return (
        <div>
          <div className='container'>
            <div className=' productdetail_firstRow d-flex'>
             <ProductDetailImage />
             <ProductdetailInfo />
             </div>
          </div>
          {
             windowSize === 'xs' ?
             <PhoneProductDetailacordion />:
            <ProductDetailTab />

          }
          <ProducDetailLikPriduct productList={LikeProduct} title='YOU MAY ALSO LIKE... '/>
          <ProducDetailLikPriduct productList={similarProduct} title='Related Products'/>


          
        </div>
    )
}

export default ProductDetail
const LikeProduct = [
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
const similarProduct = [
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