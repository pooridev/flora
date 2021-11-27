import React from 'react'
import img1 from "../../assets/image/rang/Rectangle 54.png";
import img2 from "../../assets/image/rang/Rectangle 49.png";
import img3 from "../../assets/image/rang/Rectangle 46.png";
import Rating from '@material-ui/lab/Rating';

const TopRatedProduct = () => {
    const productList = [
        {
            img: img1,
            name: 'Narcissus',
            rate: 4,
            Price: '352',
            tips: '299'

        },
        {
            img: img2,
            name: 'Narcissus',
            rate: 4,
            Price: '352',
            tips: '299'

        },
        {
            img: img3,
            name: 'Narcissus',
            rate: 4,
            Price: '352',
            tips: '299'

        }
    ]
    return (
        <div className='TopRatedProduct flex-column-left '>
            <h4 className='Filter-title'>
                TOP RATED PRODUCT
            </h4>
            <div>
                {productList.map((i, key) =>
                    <div key={key} className='d-flex TopRatedProduct-cart'>
                        <img alt='product' src={i.img}/>
                        <div className='flex-column-left'>
                            <p className='TopRatedProduct-name'>{i.name}</p>
                            <Rating
                                name="simple-controlled"
                                readOnly
                                value={i.rate}
                                size="large"
                            />
                            <div className='d-flex cost-line'>
                                <div className='price-line d-flex'>
                                    <p>AED</p>
                                    <p className='price-line-cost'>{i.Price}</p>
                                </div>
                                <div className='tipe-line d-flex'>
                                    <p>AED</p>
                                    <p className='tipe-line-cost'> {i.tips}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                }
            </div>
        </div>
    )
}

export default TopRatedProduct
