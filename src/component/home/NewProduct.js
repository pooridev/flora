import React from 'react'
import image2 from '../../assets/image/home/newproducts/Rectangle 59.png'
import image3 from '../../assets/image/home/newproducts/Rectangle 60.png'
import image1
    from '../../assets/image/home/newproducts/beautiful-floral-bouquet-with-pink-roses-box-pink-background (1) 1.png'
import PictureInfoBox from '../common/PictureInfoBox';
import UseWindowSize from '../../Sizes/UseWindowSize'
import {SideBySideMagnifier,} from "react-image-magnifiers";
import {useHistory} from 'react-router-dom';

const NewProduct = () => {
    const history = useHistory()
    const gotoProduct = () => {
        history.push(`/Complete-range`)
    }
    const windowSize = UseWindowSize();

    return (
        <section className='NewProduct'>
            <div className='container'>
                <div className="NewProduc-sec">
                    <div className="NewProduc-image relative">
                        {
                            windowSize === 'xs' ?
                                <img alt='hw' src={image1} style={{width: '100%'}}/> :
                                <SideBySideMagnifier fillAvailableSpace imageSrc={image1} alwaysInPlace/>

                        }
                        <PictureInfoBox className='PictureInfoBox__1' title='Bunch of Flowers
                       Diffrent flowers !'/>
                    </div>
                    <div className="NewProduc-textinfo">
                        <h3>
                            New Bunch of
                            Flower for Home.
                        </h3>
                        <p>
                            But I must explain to you how all this mistaken idea of denouncing
                            pleasure and praising pain was born and I will give you a complete
                            account of the system, andexpound the actual teachings of ...
                        </p>
                        <div className='NewProducimage-row'>
                            <img alt='hw' src={image2}/>
                            <img alt='hw' src={image3}/>

                        </div>
                        <button className='btn third-btn' onClick={gotoProduct}>
                            TOP SHOP
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewProduct
