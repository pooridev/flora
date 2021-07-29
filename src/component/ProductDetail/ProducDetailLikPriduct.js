import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import leftarrow from "../../assets/image/home/icon/black-left-arrow.png";
import rightarrow from "../../assets/image/home/icon/black-right-arrow.png";
import ProductCard from '../common/ProductCard';
class ProducDetailLikPriductSlider extends React.Component {
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
const ProducDetailLikPriduct = ({title,productList}) => {
    return (
       <div className='container-x'>
            <div className='ProducDetailLikPriduct'>
            <h3>{title}</h3>
             <ProducDetailLikPriductSlider productList={productList} />
           </div>
       </div>
    )
}

export default ProducDetailLikPriduct
