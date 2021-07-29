import React from 'react'
import SectionTitle from '../common/SectionTitle'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import leftarrow from "../../assets/image/home/icon/black-left-arrow.png";
import rightarrow from "../../assets/image/home/icon/black-right-arrow.png";
import image1 from '../../assets/image/Testimonials/Pic 1.png'
import image2 from '../../assets/image/Testimonials/Pic 2.png'
import image3 from '../../assets/image/Testimonials/Pic 3.png'
import SliderCommentCart from '../common/SliderCommentCart';
import UseWindowSize from '../../Sizes/UseWindowSize'
import PhoneUserCommentSlider from './PhoneUserCommentSlider';

const CommentList = [
 {
    profile:image1,
    rate:4,
    text:'There are many variati ons passages of but the majority have suffered alteration in some form,injected humour randomised.',
    name:'Esther Howard'
 },
 {
    profile:image2,
    rate:2,
    text:'There are many variati ons passages of but the majority have suffered alteration in some form,injected humour randomised.',
    name:'Jacob Jones'
 },
 {
    profile:image3,
    rate:4,
    text:'There are many variati ons passages of but the majority have suffered alteration in some form,injected humour randomised.',
    name:'Darlene Robertson'
 }

]
class UserCommentSliderContainer extends React.Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
     
      };
      return (
        <div className='container-x'>
          <Slider {...settings}>
        
         { CommentList.map(i=><SliderCommentCart
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
const UserCommentSlider = () => {
  const windowSize = UseWindowSize();

    return (
        <section>
             <SectionTitle title='WHAT USERS SAY ABOUT US' pretitle='we care about you' subtitle=''/>
            <div className='UserCommentSlider'>
            {
              windowSize === 'xs' ?
              <PhoneUserCommentSlider  CommentList={CommentList} />
              :
              <UserCommentSliderContainer/>

            }
            </div>
           
        </section>
    )
}

export default UserCommentSlider
