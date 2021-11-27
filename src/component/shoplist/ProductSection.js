import React, {useEffect, useState} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftarrow from "../../assets/image/home/icon/black-left-arrow.png";
import rightarrow from "../../assets/image/home/icon/black-right-arrow.png";
import ProductCard from '../common/ProductCard/ProductCard'
import {requestProductsList} from "../../queries/products";
import {getAbsolutePath} from "../../helpers/strings";
import { requestFavouritesList } from './../../queries/products';
import { Configs } from 'configs';
import { haveTokens } from 'helpers/auth';

class ProductSectionSlider extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: this.props.productList.length > 3,
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
                        this.props.productList.map((i, key) =>
                            <ProductCard
                                general_attributes={i.general_attributes}
                                stock_quantity={i.stock_quantity}
                                is_favourite={i.is_favourite}
                                is_enable={i.is_enable}
								key={key}
                                id={i.id}
                                product_details_id={i.product_details_id}
                                product_type={i.product_type}
                                mainimg={i.image}
								hoverimg={i.hoverimage}
                                name={i.name}
								cap={i.cap}
								cost={i.cost}
                            />)
                    }
                </Slider>
            </div>
        );
    }
}

function SampleNextArrow(props) {
    const {onClick} = props;
    return (
        <img alt='hw' className='Insta-arrow Insta-right-arrow-slider'
             onClick={onClick} src={rightarrow}/>
    );
}

function SamplePrevArrow(props) {
    const {onClick} = props;
    return (
        <img alt='hw' className=' Insta-arrow Insta-left-arrow-slider'
             onClick={onClick} src={leftarrow}/>


    );
}

const ProductSection = ({title}) => {
	const [extraProducts, setExtraProducts] = useState([]);
    const [favourites, setFavourites] = useState([]);

    const isLoggedIn = haveTokens()

    const getExtraProducts = () => {
        requestProductsList({
			limit: 5,
			offset: 0,
			product_type: 'extra'
		})
        .then(response => {
            setExtraProducts(response.data.result);
        })
        .catch(error => {
            console.log(error);
        })
    }

    const getFavouritesList = () => {
        requestFavouritesList({ limit: Configs.LIMIT * 50 })
        .then(({ data }) => {
            const favouritesList = data.result;
            setFavourites(favouritesList)
        })
    }

	useEffect(() => {
		getExtraProducts();
        isLoggedIn && getFavouritesList()
	}, [title])

    return (
        <div className='container'>
            <div className='ProducDetailLikPriduct'>
                <h3>{title}</h3>
                <ProductSectionSlider productList={extraProducts.map(item => {
                    const is_favourite = favourites.some(i => i.id === item.id);
                    return {
                        general_attributes: item['details'],
                        stock_quantity: item['details'][0]['stock_quantity'],
                        is_favourite,
                        is_enable: item['is_enable'],
                        id: item['id'],
                        product_type: item['product_type'],
                        product_details_id: item.details[0].product_details_id,
                        image: getAbsolutePath(item['image']['thumbnail_url']),
                        name: item['title'],
                        cap: item['categories'].map(elm => elm.title).join(', '),
                        cost: item['prices'][0],
                        hoverimage: getAbsolutePath(item['image']['thumbnail_url'])
                    }
                })}/>
            </div>
        </div>
    )
}

export default ProductSection
