import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import leftarrow from "../../assets/image/home/icon/black-left-arrow.png";
import rightarrow from "../../assets/image/home/icon/black-right-arrow.png";
import SliderCommentCart from '../common/SliderCommentCart';
import CommentCard from '../common/CommentCard';
class PhoneUserCommentGrid extends React.Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
     
      };
      return (
        <div className='container-x'>
          <Slider {...settings}>
        
         { this.props.CommentList.map(i=><CommentCard
             profile={i.profile}
             rate={i.rate}
             text={i.text}
             name={i.name}
          />)}
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
  export default PhoneUserCommentGrid
