import React from 'react'
import SectionTitle from '../common/SectionTitle';
import icon1 from '../../assets/image/home/best service/Our Best services.svg'
import icon2 from '../../assets/image/home/best service/jam.svg'
import icon3 from '../../assets/image/home/best service/Group.svg'
import {useHistory} from 'react-router-dom';

export const BestServiceCard = ({icon, title,service , cap}) => {
    const history = useHistory()
    return (
        <div className='BestServiceCard'>
            <div className='BestServiceCard__iconbox center'>
                <img alt='hw' src={icon}/>
            </div>
            <div className='BestServiceCard__main'>
                <h4>
                    {title}
                </h4>
                <p>
                    {cap}
                </p>
            </div>
            <button className='btn third-btn' onClick={() => history.push(`/${service}`)}>
                View more
            </button>
        </div>
    )
}

const BestService = () => {
    return (
        <section className='BestService-sec'>
            <SectionTitle title='Our Best Services ' pretitle='EFFECTIVE WAYS'
                          subtitle='Will your clients accept that you go about things order.'/>
            <div className='container'>
                <div className='BestService'>
                    <BestServiceCard
                        icon={icon1}
                        title='Premium buoquet'
                        service="PREMIUM-BUOQUET"
                        cap='You’ve come to the right place! We know you’re tired of sending gifts destined for the dusty corners...'
                    />
                    <BestServiceCard
                        icon={icon2}
                        service="Event-Service"
                        title='Events'
                        cap='If the wedding ceremony order is a bit overwhelming and you have some questions
                         about which rites to ...'
                    />
                    <BestServiceCard
                        icon={icon3}
                        title='Weddings'
                        service="Wedding-Services"
                        cap='Traditional and nondenominational wedding ceremonies are most flexible and
                         similar to each....'
                    />
                </div>
            </div>
        </section>
    )
}

export default BestService
