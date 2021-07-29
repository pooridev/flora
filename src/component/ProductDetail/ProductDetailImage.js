import React, { useState } from "react";
import Slider from "react-slick";
import image1 from '../../assets/image/singleProduct/71GHegmxc7L.png'
import image2 from '../../assets/image/home/homepic/beautiful-background-roses-valentine-s-day.png'
import ReactImageZoom from 'react-image-zoom';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 
import zoomimg from '../../assets/image/singleProduct/icon/Zoom.svg'
import UseWindowSize from '../../Sizes/UseWindowSize';
import leftarrow from "../../assets/image/home/icon/black-left-arrow.png";
import rightarrow from "../../assets/image/home/icon/black-right-arrow.png";
import {

  SideBySideMagnifier,

} from "react-image-magnifiers";
import { useSwipeable } from 'react-swipeable';

const ProductDetailImage = () => {
    const [activeIndex , setActiveIndex] = useState(0)
  //  const [photoIndex, setphotoIndex] = useState(0)
  const [isOpen , setIsOpen] = useState(false)
    const [images, setImages] = useState([
        {
            index:0,
            image:image1
        },
        {
            index:1,
            image:image2
        }
    ])
    const windowSize = UseWindowSize();
    const slide = (dir) => {
     if(dir === 'NEXT' && activeIndex < images.length-1) {
      setActiveIndex(activeIndex + 1)
     }if (dir === 'PREV' && activeIndex > 0){
      setActiveIndex(activeIndex - 1)
     }
     if (dir === 'PREV' && activeIndex === 0){
      setActiveIndex(images.length-1)
     }
     if(dir === 'NEXT' && activeIndex === images.length-1) {
      setActiveIndex(0)
     }
   
    };
   console.log(images.length)
    const handlers = useSwipeable({
      onSwipedLeft: () => slide('NEXT'),
      onSwipedRight: () => slide('PREV'),
      delta: 1,
    });
    
    return (
        <div className='ProductDetailImage'>
           <div className='ProductDetailImage-imagecolumn'>
           {
              images.map(
                  i=>
                  <div  onClick={()=>setActiveIndex(i.index)}>
                      <img src={i.image} />
                  </div>
              )  
            }
           </div>
            <div className='ProductDetailImage-view ' >
              {windowSize === 'xs' ? 
             <img src={images[activeIndex].image} {...handlers} /> :
            <SideBySideMagnifier fillAvailableSpace  imageSrc={images[activeIndex].image} alwaysInPlace />

            }
           
            </div>
            <button type="button"  className='btn ProductDetailImage-zoombtn ' onClick={() =>setIsOpen(true)}>
 
 <img src={zoomimg} />
</button>
                {isOpen && (
          <Lightbox
            mainSrc={images[activeIndex].image}
            nextSrc={images[(activeIndex + 1) % images.length]}
            prevSrc={images[(activeIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
            //   this.setState({
            //     activeIndex: (activeIndex + images.length - 1) % images.length,
            //   })
              setActiveIndex((activeIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
            //   this.setState({
            //     activeIndex: (activeIndex + 1) % images.length,
            //   })
            setActiveIndex((activeIndex + 1) % images.length)
            }
          />
        )}
      { windowSize === 'xs'&& <div className='productdeatil-arrow-row'>
          <button className='btn productdeatil-arrow left-product-arrow'
            onClick={()=>slide('PREV')}
          >
            <img src={leftarrow} />
          </button>
          <button className='btn productdeatil-arrow right-product-arrow'
           
           onClick={()=>slide('NEXT')}
           >
            <img src={rightarrow} />
          </button>
        </div>}
        </div>
    )
}

export default ProductDetailImage
