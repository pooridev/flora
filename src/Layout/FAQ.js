import React, {useEffect, useState} from 'react'
import FaqContainer from '../component/FAQ/FaqContainer';
import HeaderShowcase from '../component/common/HeaderShowcase'
import background from '../assets/image/faq/woman-holding-branch-snow-willow-flower 1.png'
import {Link} from 'react-router-dom';
import resbackimg from '../assets/image/responsive/Faq.png'
import { requestGetSinglePage } from 'queries/FAQ';
import Spinner from './../component/common/Spinner';

const Header = () => {
    return (
        <div className='header_title' style={{textAlign: 'left'}}>
            <h2>FAQ</h2>
            <div className='d-flex xs-opacity0'>
                <Link to='/'>

                    <p>HOME </p></Link>

                <p>/ FAQ</p>
            </div>
        </div>
    )
}
const FAQ = () => {
    const [FAQs, setFAQs] = useState([])
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        const FAQ_PAGE_ID = 'b1b082ea-b36b-4579-b575-ee5c0664190a';
        requestGetSinglePage(FAQ_PAGE_ID)
            .then(({ data }) =>  {
                setLoading(false)
                setFAQs(JSON.parse(data.content))
                }
            )
            .catch(err => {
                setLoading(false)
                console.error(err)
            })
    }, [])

    return (
        <div>
            <HeaderShowcase resbackimg={resbackimg} backimg={background}>
                <Header/>
            </HeaderShowcase>
             <FaqContainer loading={loading} FAQs={FAQs} />         
        </div>
    )
}

export default FAQ
