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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import leftarrow from "../../assets/image/home/icon/black-left-arrow.png";
import rightarrow from "../../assets/image/home/icon/black-right-arrow.png";
import hoverflower1 from '../../assets/image/home/product/hover/Rectangle 51.png'
import ProductCard from '../common/ProductCard'
class ProductSectionSlider extends React.Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 580,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 1
            }
          },
          {
            breakpoint: 350,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
              initialSlide: 1
            }
          },
     
        ]
      };
      return (
        <div>
          <Slider {...settings}>
        
         {
          this.props.productList.map(i=>
             <ProductCard 
                        id={i.id}

                         mainimg={i.image}  hoverimg={i.hoverimage}
                         name={i.name} cap={i.cap} cost={i.cost}
                       />)
         }
          </Slider>
        </div>
      );
    }
  }
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <img className='Insta-arrow Insta-right-arrow-slider' 
      onClick={onClick} src={rightarrow} />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img className=' Insta-arrow Insta-left-arrow-slider' 
         onClick={onClick} src={leftarrow} />


    );
  }
const ProductSection = ({title}) => {
    return (
       <div className='container-x'>
            <div className='ProducDetailLikPriduct'>
            <h3>{title}</h3>
             <ProductSectionSlider productList={productlist} />
           </div>
       </div>
    )
}

export default ProductSection


const productlist = [
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

 
]