import React from 'react'
import SectionTitle from './SectionTitle'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import leftarrow from "../../assets/image/home/icon/black-left-arrow.png";
import rightarrow from "../../assets/image/home/icon/black-right-arrow.png";
import image1 from "../../assets/image/home/insta/beautiful-floral-bouquet-with-pink-roses-box-pink-background (1) 3.png"
import image2 from "../../assets/image/home/insta/beautiful-floral-bouquet-with-pink-roses-box-pink-background (1) 4.png"
import image3 from "../../assets/image/home/insta/beautiful-floral-bouquet-with-pink-roses-box-pink-background (1) 5.png"
import image4 from "../../assets/image/home/insta/beautiful-floral-bouquet-with-pink-roses-box-pink-background (1) 6.png"
import InstaStoryCard from './InstaStoryCard';
const StoryList = [
  { id:1,
    src:image1,
    comment:'541',
    like:'5421',
  },
  { id:2,
    src:image2,
    comment:'541',
    like:'5421',
  },
  { id:3,
    src:image3,
    comment:'541',
    like:'5421',
  },
  { id:4,
    src:image1,
    comment:'541',
    like:'5421',
  },
  { id:5,
    src:image4,
    comment:'541',
    like:'5421',
  },
  { id:6,
    src:image2,
    comment:'541',
    like:'5421',
  },
  { id:7,
    src:image4,
    comment:'541',
    like:'5421',
  },
  { id:8,
    src:image3,
    comment:'541',
    like:'5421',
  },
  { id:9,
    src:image3,
    comment:'541',
    like:'5421',
  },
  { id:10,
    src:image1,
    comment:'541',
    like:'5421',
  },

]
const InstagramStory = () => {
    return (
        <div> 
         <SectionTitle title='Our Instagram Stories' pretitle='SEE OUR COLLECTION' 
           subtitle='Built a tested code base or had them built, you decided on a content.'/>   
            <div className='container-x'>
               <div className='relative InstagramStory '>
                 <InstaSlider />
               </div>
            </div>
        </div>
    )
}
class InstaSlider extends React.Component {
    render() {
      const settings = {
        dots: false,
        speed: 1500,
        slidesToShow: 5,
        slidesToScroll: 5,
    
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 700,
            settings: {
              dots: false,

              slidesToShow:2,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            dots: false,

            breakpoint: 450,
            settings: {
            
              slidesToShow:2,
              slidesToScroll: 2,
              initialSlide: 1
            }
          },
          {
            dots: false,

            breakpoint: 380,
            settings: {
               className: "center",
              centerMode: true,
              infinite: true,
              slidesToShow:1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
     
        ]
      };
      return (
        <div>
          <Slider {...settings}>
        
            {
              StoryList.map(i=><InstaStoryCard 
                src={i.src}
                comment={i.comment}
                like={i.like}
              />)
            }
          </Slider>
        </div>
      );
    }
  }
export default InstagramStory
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