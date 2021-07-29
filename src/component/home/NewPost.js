import React from 'react'
import SectionTitle from '../common/SectionTitle'
import image1 from '../../assets/image/home/newpost/beautiful-floral-bouquet-with-pink-roses-box-pink-background (1) 1.png'
import image2 from '../../assets/image/home/newpost/beautiful-floral-bouquet-with-pink-roses-box-pink-background (2) 1.png'
import profile from '../../assets/image/home/newpost/default.png'
import BlogCard from '../common/BlogCard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import leftarrow from "../../assets/image/home/icon/black-left-arrow.png";
import rightarrow from "../../assets/image/home/icon/black-right-arrow.png";
const blogList = [
    {
        id:1,
        src:image1,
        title:"Fresh flowers you can  order any time ",
        author:"J. Cooper",
        dateday:'15',
        dateMounth:'Apr',
        authorepic:profile,
        comment:12,
        cap:'Flowers are symbols of life, openness, and beauty. They are usually present...',
        cat:'Home plants, AND TREND ITEMS'
    },
    {
        id:2,
        src:image2,
        title:"Fresh flowers you can  order any time ",
        author:"J. Cooper",
        dateday:'15',
        dateMounth:'Apr',
        authorepic:profile,
        comment:12,
        cap:'Flowers are symbols of life, openness, and beauty. They are usually present...',
        cat:'Home plants, AND TREND ITEMS'
    },
    {
        id:3,
        src:image1,
        title:"Fresh flowers you can  order any time ",
        author:"J. Cooper",
        dateday:'15',
        dateMounth:'Apr',
        authorepic:profile,
        comment:12,
        cap:'Flowers are symbols of life, openness, and beauty. They are usually present...',
        cat:'Home plants, AND TREND ITEMS'
    },
    {
        id:4,
        src:image2,
        title:"Fresh flowers you can  order any time ",
        author:"J. Cooper",
        dateday:'15',
        dateMounth:'Apr',
        authorepic:profile,
        comment:12,
        cap:'Flowers are symbols of life, openness, and beauty. They are usually present...',
        cat:'Home plants, AND TREND ITEMS'
    },

]
class PostSlider extends React.Component {
    render() {
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 1,
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
             blogList.map(i=>
               <BlogCard 
               id={i.id}
               src={i.src}
               title={i.title}
               author={i.author}
               dateday={i.dateday}
               authorepic={i.authorepic}
               comment={i.comment}
               cap={i.cap}
               cat={i.cat}
               dateMounth={i.dateMounth}
               /> 
                )
         }
        
           
          </Slider>
        </div>
      );
    }
  }
const NewPost = () => {
   
    return (
        <section className='Newpost-sec'>
         <SectionTitle title='Our New Posts' pretitle='SHARE BEST NEWS' 
             subtitle='Will your clients accepHappen, not  always the way you like it, not always preferred.'/>   
             <div className='container-x'>
                 <div className='NewPost relative'>
                   <PostSlider/>

                 </div>
             </div>
        </section>
    )
}

export default NewPost
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <img className='newpost-arrow newpost-right-arrow-slider' 
      onClick={onClick} src={rightarrow} />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img className=' newpost-arrow newpost-left-arrow-slider' 
         onClick={onClick} src={leftarrow} />


    );
  }