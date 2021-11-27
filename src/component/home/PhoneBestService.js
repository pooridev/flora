import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SectionTitle from '../common/SectionTitle';
import leftarrow from "../../assets/image/home/icon/black-left-arrow.png";
import rightarrow from "../../assets/image/home/icon/black-right-arrow.png";
import {BestServiceCard} from './BestService';
import icon1 from '../../assets/image/home/best service/Our Best services.svg'
import icon2 from '../../assets/image/home/best service/jam.svg'
import icon3 from '../../assets/image/home/best service/Group.svg'

class PhoneBestService extends React.Component {

    state = {
        activeSlide: 0,
        activeSlide2: 0
    };

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
            className: "slider variable-width",
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow/>,
            prevArrow: <SamplePrevArrow/>,
            beforeChange: (current, next) => this.setState({activeSlide: next}),
            dotsClass: "slick-dots slick-thumb",

        };
        return (
            <section className='relative BestServiceCard'>
                <SectionTitle title='Our Best Services ' pretitle='EFFECTIVE WAYS'
                              subtitle='Will your clients accept that you go about things order.'/>

                <div className='container-x'>
                    <Slider {...settings}>
                        <BestServiceCard
                            service='PREMIUM-BUOQUET'
                            icon={icon1}
                            title='Premium buoquet'
                            cap='You’ve come to the right place! We know you’re tired of sending gifts destined for the dusty corners...'
                        />
                        <BestServiceCard
                            service='Event-Service'
                            icon={icon2}
                            title='Events'
                            cap='If the wedding ceremony order is a bit overwhelming and you have some questions
                         about which rites to ...'
                        />
                        <BestServiceCard
                            service='Wedding-Services'
                            icon={icon3}
                            title='Weddings'
                            cap='Traditional and nondenominational wedding ceremonies are most flexible and
                         similar to each....'
                        />
                    </Slider>
                </div>
            </section>

        )
    }
}

export default PhoneBestService

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
