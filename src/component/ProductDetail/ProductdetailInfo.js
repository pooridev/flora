import React from 'react'
import Rating from '@material-ui/lab/Rating';
import heart from '../../assets/image/singleProduct/icon/heart.svg'
import ruler from '../../assets/image/singleProduct/icon/ruker.svg'
import skype from '../../assets/image/singleProduct/icon/pintrest.svg'
import linkdin from '../../assets/image/singleProduct/icon/linkdin.svg'
import pintrest from '../../assets/image/singleProduct/icon/skype.svg'
import facebook from '../../assets/image/singleProduct/icon/facebook.svg'
import instagram from '../../assets/image/singleProduct/icon/instagram.svg'

const ProductdetailInfo = () => {
    const ColorList = [
        '#F6BDBB','#F7D0CA',
        '#E41F17'
    ]
    return (
        <div className='ProductdetailInfo'>
            <h2 className='ProductdetailInfo__h2'>Round box rose </h2>
            <div>
            <div className="ProductdetailInfo__rate">
                    <Rating
                      name="simple-controlled"
                      value={4}
                      readOnly
                      size="large"
                    />
                    <p className='Productive_revienum'>3 Customer Reviews</p>
            </div>
            <div className="ProductdetailInfo__price">
                <p>AED60.00 </p>
            </div>
            <p className="ProductdetailInfo__cap">
            Forever Roses Box Long-lasting Handmade Roses Flowers for Delivery Prime Preserved Fresh Rose Gift Box Mothers Day Valentines Gifts Christmas Gifts for Girlfriend Wife Birthday Anniversary Flowers Bouquet 19 Roses
            </p>
            <div className='ProductdetailInfo__color'>
                color:{
                   ColorList.map(i=><div
                   style={{backgroundColor:i}}
                    className='ProductdetailInfo__colordiv'>
                       
                   </div>)
                }
            </div>
          <div className='ProductdetailInfo__orderrow'>
          <div className='ProductdetailInfo__countBox'>
              <button type='button' className='btn  ProductdetailInfo_countbtn-negative'>
                  -
              </button>
              <div className='ProductdetailInfo_countnum center'>
                 1
              </div>
              <button type='button' className='btn ProductdetailInfo_countbtn-positive'>
                  +
              </button>
            </div>
             <button className='btn third-btn'>
             ADD TO CART
             </button>
          </div>
              <div className='ProductdetailInfo_icontext'>
                 <div className='d-flex ProductdetailInfo_icontext-box'>
                     <img src={heart} />
                     <p>Add to wishlist</p>
                 </div>
                 <div className='d-flex ProductdetailInfo_icontext-box'>
                     <img src={ruler} />
                     <p>Size Guide</p>
                 </div>
              </div>
              
            </div>
            <div className='ProductdetailInfo__footer'>
               <p>Category:<span>Fresh rose</span></p>   
               <div className='ProductdetailInfo__footer--socialMedia d-flex'>
                  <p>Share:</p>
                  <div className='d-flex ProductdetailInfo__footer--socialMedia-img'>
                     <img src={skype} />
                     <img src={linkdin} />
                     <img src={pintrest} />
                     <img src={facebook} />
                     <img src={instagram} />

                  </div>
               </div>
            </div>
        </div>
    )
}

export default ProductdetailInfo
