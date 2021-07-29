import React from 'react'
import image1 from '../../assets/image/home/homepic/beautiful-background-roses-valentine-s-day.png'
import image2 from '../../assets/image/home/homepic/image 3.png'
import image3 from '../../assets/image/home/homepic/image 4.png'
import PictureInfoBox from '../common/PictureInfoBox'
import ReactImageZoom from 'react-image-zoom';

const PhoneHomePic = () => {
//   const pic1 = {width:
//     '100%',
//     zoomPosition:
//     'original'
// ,
//     height:
//     '100%',
//    img: image1};
//    const pic2 = {width:
//     '100%',
//     zoomPosition:
//     'original'
// ,
//     height:
//     '100%',
//    img: image2};
//    const pic3 = {width:
//     '100%',
//     zoomPosition:
//     'original'
// ,
//     height:
//     '100%',
//    img: image3};
    return (
        <section className='HomePic'>
             <div className='container'>
               <div className='HomePic__sec'>
                  <div className='HomePic__box HomePic__box1'>
                    {/* <ReactImageZoom {...pic1}/> */}
                    <img src={image1} style={{width:'100%'}} />
                    <PictureInfoBox className='PictureInfoBox__1' title='Diffrent flower !'/>
                  </div>
                  <div className='HomePic__box HomePic__box2'>
                  <img src={image2} style={{width:'100%'}} />
                    <PictureInfoBox className='PictureInfoBox__2' title='LONG LIFE
                    ROSES'/>
                  </div>
                  <div className='HomePic__box HomePic__box3' >
                  <img src={image3} style={{width:'100%'}}/>
                    <PictureInfoBox className='PictureInfoBox__2' title='Flowers
                      ceremony' />
                  </div>
               </div>
 
             </div>

        </section>
    )
}

export default PhoneHomePic
