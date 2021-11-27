import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftarrow from "../../assets/image/home/icon/black-left-arrow.png";
import rightarrow from "../../assets/image/home/icon/black-right-arrow.png";
import ProductCard from '../common/ProductCard/ProductCard';
import { requestFavouritesList } from './../../queries/products';
import { Configs } from 'configs';
import { haveTokens } from 'helpers/auth';

class ProducDetailLikPriductSlider extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            nextArrow: <SampleNextArrow/>,
            prevArrow: <SamplePrevArrow/>,
            responsive: [
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 350,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 2,
                        initialSlide: 1
                    }
                },

            ]
        };
        return (
            <div>
                <Slider {...settings}>

                    {
                        this.props.productList.map((i, key) => {
                            const is_favourite = this.props.favourites.some(item => item.id === i.id);
                            return (
                                <ProductCard
                                    is_enable={i.is_enable}
                                    product_type={i.product_type}
                                    stock_quantity={i.stock_quantity}
                                    is_favourite={is_favourite}
                                    product_details_id={i['product_details_id']}
                                    id={i.id}
                                    key={key}
                                    mainimg={i.image} hoverimg={i.hoverimage}
                                    name={i.name} cap={i.cap} cost={i.cost}
                                />
                            )
                        })
                          
                    }
                </Slider>
            </div>
        );
    }
}

function SampleNextArrow(props) {
    const {onClick} = props;
    return (
        <img alt='right arrow' className='Insta-arrow Insta-right-arrow-slider'
             onClick={onClick} src={rightarrow}/>
    );
}

function SamplePrevArrow(props) {
    const {onClick} = props;
    return (
        <img alt='left arrow' className=' Insta-arrow Insta-left-arrow-slider'
             onClick={onClick} src={leftarrow}/>


    );
}

const ProducDetailLikPriduct = ({title, productList}) => {
    const [favourites, setFavourites] = useState([]);

    const isLoggedIn = haveTokens()
    
    const getFavouritesList = () => {
        requestFavouritesList({ limit: Configs.LIMIT * 50 })
            .then(({ data }) => {
                const favouritesList = data.result;
                setFavourites(favouritesList)
            })
    }
    useEffect(() => {
        isLoggedIn && getFavouritesList()
    }, [])
    return (
        <div className='container'>
            <div className='ProducDetailLikPriduct'>
                <h3>{title}</h3>
                <ProducDetailLikPriductSlider favourites={favourites} productList={productList}/>
            </div>
        </div>
    )
}

export default ProducDetailLikPriduct
