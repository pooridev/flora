import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import leftarrow from "../../assets/image/home/icon/left-arrow.svg";
import rightarrow from "../../assets/image/home/icon/right-arrow.svg";
import pic1 from "../../assets/image/home/slider/MicrosoftTeams-image (1).png"
import pic2 from "../../assets/image/home/slider/rose-all-day-bouquet2535535413 1.png"
const HomeLeftSlidCart = ({title,index,img,src}) =>{
    return(
        <div  className='HomeLeftSlidCart'>
            <h2>{title}</h2>
            <img src={img}/>
            <button className='btn btn-primary' >
                GO TO SHOP
            </button>
            <p>0{index}</p>
        </div>

    )
}
const SliderCard= ({activeSlide})=>{
    return(
        <div className='SliderCard'>
                  <HomeLeftSlidCart title='Custom Boxes
                   By Bunch Of Flower' img={pic2} index={activeSlide}  />
                  <div >
                      <img className='SliderCard-image' style={{ width: '100%' }} src={pic1} />
                  </div>
                </div>
    )
}
class  HomeSliderShowcas extends React.Component {
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
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        beforeChange: (current, next) => this.setState({ activeSlide: next }),
        dotsClass: "slick-dots slick-thumb",

      };
    return (
        <section className='relative'>
            <div className='container'>
              <Slider {...settings}>
              <SliderCard  activeSlide={this.state.activeSlide + 1}/>
              <SliderCard  activeSlide={this.state.activeSlide + 1}/>
              <SliderCard  activeSlide={this.state.activeSlide + 1}/>
              <SliderCard  activeSlide={this.state.activeSlide + 1}/>
    
              </Slider>
        </div>
        </section>
    )
  }
}

export default HomeSliderShowcas
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <img className='slider-arrow right-arrow-slider' src={rightarrow} onClick={onClick}/>
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img className='slider-arrow left-arrow-slider' src={leftarrow} onClick={onClick}/>

    );
  }