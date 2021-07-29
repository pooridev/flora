import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import flower1 from '../../assets/image/home/prpertybar/bouquet 1.svg';
import flower2 from '../../assets/image/home/prpertybar/rose 1.svg';
import flower3 from '../../assets/image/home/prpertybar/LONG LIFE ROSES.svg';
import flower4 from '../../assets/image/home/prpertybar/CUSTOM BOXES.svg';
import flower5 from '../../assets/image/home/prpertybar/flower 1.svg';
import leftarrow from "../../assets/image/home/icon/black-left-arrow.png";
import rightarrow from "../../assets/image/home/icon/black-right-arrow.png";

import { PropertiesbarItem } from './Propertiesbar';
const list = [
    {
        img:flower1,
        title:"Complete Range",
        url:''
    },
    {
        img:flower2,
        title:"Fresh Roses",
        url:''
    },
    {
        img:flower3,
        title:"Long Life Roses",
        url:''
    },
    {
        img:flower4,
        title:"Custom Boxes",
        url:''
    },
    {
        img:flower5,
        title:"Dried Flowers",
        url:''
    }
]
class  PhonepropertiesBar extends React.Component {
  
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
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
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
        <section className='relative PhonepropertiesBar'>
            <div className='container-x'>
              <Slider {...settings}>
              {list.map(i=><PropertiesbarItem img={i.img}
                    title={i.title}
                    url={i.url}
                    />)}
              </Slider>
          </div>
        </section>
        
    )
  }
}

export default PhonepropertiesBar
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