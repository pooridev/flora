import React, { useState} from 'react'
import Rating from '@material-ui/lab/Rating';
import linkdin from '../../assets/image/singleProduct/icon/linkdin.svg'
import pintrest from '../../assets/image/singleProduct/icon/skype.svg'
import facebook from '../../assets/image/singleProduct/icon/facebook.svg'
import { FacebookShareButton, LinkedinShareButton, PinterestShareButton } from 'react-share';
import { getAbsolutePath } from './../../helpers/strings';
import ProductType from './ProductContent/ProductType';
import SubscriptionType from './ProductContent/SubscriptionType';
import ExtraType from './ProductContent/ExtraType';
import { Badge } from '@material-ui/core';

const ProductdetailInfo = ({detail}) => {
    const { quantity_description } = detail['details'][0]
    const [price, setPrice] = useState(detail['details'][0]['price'])
    const { subscription_plan } = detail
    let actions;
    switch (detail['product_type']) {
        case 'product':
            actions = <ProductType detail={detail} onUpdatePrice={setPrice} />
            break;
        case 'subscription':
            actions = <SubscriptionType detail={detail} onUpdatePrice={setPrice}  />
            break;
        case 'extra':
            actions = <ExtraType detail={detail} onUpdatePrice={setPrice} />
            break;
        default:
            break;
    }
    const statusBadge = detail['is_enable'] ? '' : <Badge color="error" badgeContent='Unavailable' classes={{ root: 'product-status' }} />
    return (
        <div className='ProductdetailInfo'>
            <h2 className='ProductdetailInfo__h2'>{detail.title}</h2>
            <div className='ProductdetailInfo__stems'>
                <i class="fab fa-squarespace"></i>
                {quantity_description}</div>
            <div>
                <div className="ProductdetailInfo__rate">
                    <Rating
                        name="simple-controlled"
                        value={5}
                        readOnly
                        size="large"
                    />
                </div>
                <div className="ProductdetailInfo__price">
                    <p>AED {price}/ {subscription_plan}</p>
                    {statusBadge}
                </div>
                <p className="ProductdetailInfo__cap">
					{detail['description']}
                </p>
                {actions}
            </div>

            <div className='ProductdetailInfo__footer'>
                <p>Category:<span>{detail['categories'].map(item => item.title).join(', ')}</span></p>
                <div className='ProductdetailInfo__footer--socialMedia d-flex'>
                    <p>Share:</p>
                    <div className='d-flex ProductdetailInfo__footer--socialMedia-img'>
                        <LinkedinShareButton 
                            source={window.location.href}
                            url={window.location.href} 
                            title={detail['title']} 
                            summary={detail['description']}
                        >
                            <img alt='social' src={linkdin}/>
                        </LinkedinShareButton>
                        <FacebookShareButton url={window.location.href} quote={detail['title']} hashtag={'Flora website'}>
                            <img alt='social' src={facebook}/>
                        </FacebookShareButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductdetailInfo
