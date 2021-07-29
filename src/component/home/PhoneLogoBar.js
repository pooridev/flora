import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import logo1 from '../../assets/image/home/logobar/green-spa-leaf-flower-logo-design-template-black-vector-22993055.png';
import logo2 from '../../assets/image/home/logobar/Charlotte_Puxley_logo_transparent_250x.png';
import logo3 from '../../assets/image/home/logobar/il_570xN.png';
import logo4 from '../../assets/image/home/logobar/attachment_32451340.png';
import logo5 from '../../assets/image/home/logobar/EB-imagotype_small.png';
import leftarrow from "../../assets/image/home/icon/black-left-arrow.png";
import rightarrow from "../../assets/image/home/icon/black-right-arrow.png";

import { PropertiesbarItem } from './Propertiesbar';
const array = [logo1,logo2,logo3,logo4,logo5]

class  PhoneLogoBar extends React.Component {
  
    state = {
        activeSlide: 0,
        activeSlide2: 0
      };
  render(){
    const settings = {
        appendDots: dots => (
            <div
              style={{
            
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div
              className='custompaging'
            >
             
              <p>
              0{i + 1}
              </p>
              <div className='before-dot'>

               </div>
            </div>
          ),
        className: "slider variable-width",
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
        beforeChange: (current, next) => this.setState({ activeSlide: next }),
        dotsClass: "slick-dots slick-thumb",
        responsive: [
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                initialSlide: 2
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow:2,
                slidesToScroll: 1
              }
            }
          ]
      };
    return (
        <section className='relative Logosbar'>
            <div className='container-x'>
              <Slider {...settings}>
              {
                         array.map(i=><div className='Logosbar__image'>
                            <img src={i} alt='flower' />
                         </div>)
                     }
              </Slider>
          </div>
        </section>
        
    )
  }
}

export default PhoneLogoBar
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <img className='slider-arrow phone-right-arrow-slider' src={rightarrow} onClick={onClick}/>
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img className='slider-arrow phone-left-arrow-slider' src={leftarrow} onClick={onClick}/>

    );
  }