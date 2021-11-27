import React from 'react'
import image1 from '../../assets/image/home/homepic/beautiful-background-roses-valentine-s-day.png'
import image2 from '../../assets/image/home/homepic/image 3.png'
import image3 from '../../assets/image/home/homepic/image 4.png'
import PictureInfoBox from '../common/PictureInfoBox'
import {SideBySideMagnifier,} from "react-image-magnifiers";

const HomePic = () => {

    return (
        <section className='HomePic'>
            <div className='container'>
                <div className='HomePic__sec'>
                    <div className='HomePic__box HomePic__box1'>
                        <SideBySideMagnifier fillAvailableSpace imageSrc={image1}
                                             alwaysInPlace/>
                        <PictureInfoBox className='PictureInfoBox__1' title='Diffrent flower !'/>
                    </div>
                    <div className='HomePic__box HomePic__box2'>
                        <SideBySideMagnifier fillAvailableSpace imageSrc={image2} alwaysInPlace/>
                        <PictureInfoBox className='PictureInfoBox__2' title='LONG LIFE
                    ROSES'/>
                    </div>
                    <div className='HomePic__box HomePic__box3'>
                        <SideBySideMagnifier fillAvailableSpace imageSrc={image3} alwaysInPlace/>
                        <PictureInfoBox className='PictureInfoBox__2' title='Flowers
                      ceremony'/>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default HomePic
