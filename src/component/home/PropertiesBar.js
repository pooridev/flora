import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import flower1 from '../../assets/image/home/prpertybar/bouquet 1.svg';
import flower2 from '../../assets/image/home/prpertybar/rose 1.svg';
import flower3 from '../../assets/image/home/prpertybar/LONG LIFE ROSES.svg';
import flower4 from '../../assets/image/home/prpertybar/CUSTOM BOXES.svg';
import flower5 from '../../assets/image/home/prpertybar/flower 1.svg';
import leftarrow from "../../assets/image/home/icon/black-left-arrow.png";
import rightarrow from "../../assets/image/home/icon/black-right-arrow.png";

import {PropertiesbarItem} from './PropertiesbarItem';
import { requestCategoriesList } from './../../queries/categories';
import { getAbsolutePath } from './../../helpers/strings';

class PropertiesBar extends React.Component {

    state = {
        activeSlide: 0,
        activeSlide2: 0,
        categories: []
    };

    componentDidMount() {
        requestCategoriesList()
        .then(response => {
            const newCategories = []
            response.data.forEach(category => {
                if (category.image && !category.is_occasion) {
                    newCategories.push(category)
                }
            });
            this.setState({ categories: newCategories })
        })
    }

    render() {
        const settings = {
            appendDots: dots => (
                <div
                    style={{}}
                >
                    <ul style={{margin: "0px"}}> {dots} </ul>
                </div>
            ),
            customPaging: i => (
                <div
                    className='custompaging'
                >

                    <p>
                        0{i + 1}
                    </p>
                    <div className='before-dot'>

                    </div>
                </div>
            ),
            className: "slider variable-width PropertiesBarSlider",
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow/>,
            prevArrow: <SamplePrevArrow/>,
            beforeChange: (current, next) => this.setState({activeSlide: next}),
            dotsClass: "slick-dots slick-thumb",
            responsive: [
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <section className='relative PhonepropertiesBar'>
                <div className='container-x'>
                    <Slider {...settings}>
                        {this.state.categories && (
                             this.state.categories.map(i => (
                                <PropertiesbarItem 
                                    img={getAbsolutePath(i.image.thumbnail_url)}
                                    title={i.title}
                                    id={i.id}
                                />)
                            )
                        )}
                    </Slider>
                </div>
            </section>

        )
    }
}

export default PropertiesBar

function SampleNextArrow(props) {
    const {onClick} = props;
    return (
        <img alt='hw' className='slider-arrow phone-right-arrow-slider' src={rightarrow} onClick={onClick}/>
    );
}

function SamplePrevArrow(props) {
    const {onClick} = props;
    return (
        <img alt='hw' className='slider-arrow phone-left-arrow-slider' src={leftarrow} onClick={onClick}/>

    );
}
