import React, {useEffect, useState} from 'react'
import SectionTitle from '../common/SectionTitle'
import ProductCard from '../common/ProductCard/ProductCard'
import {requestProductsList} from "../../queries/products";
import Axios from "axios";
import {getAbsolutePath} from "../../helpers/strings";
import { requestFavouritesList } from './../../queries/products';
import { Configs } from 'configs';
import { haveTokens } from 'helpers/auth';

const FeaturedProduct = (props) => {
    const [tab, settab] = useState(1);
    const [favourites, setFavourites] = useState([]);

    const isLoggedIn = haveTokens()

    const [sales, setSales] = useState({
		title: '',
		result: []
	});
	const [featured, setFeatured] = useState({
		title: '',
		result: []
	});
	const [bestseller, setBestseller] = useState({
		title: '',
		result: []
	});
	const MAP_SAMPLE = {
		0: setSales,
		1: setFeatured,
		2: setBestseller
	}

    const getProducts = () => {
        const tags = [['best_sellers'], ['featured'], ['sales']]
        const getProductsPerTagsRequests = tags.map(tag => requestProductsList({ tags: tag, product_type: 'product' }))

        Axios.all(getProductsPerTagsRequests)
            .then((result) => {
                result.forEach((item, index) => {
                    MAP_SAMPLE[index]({
                        result: result[index]['data']['result'].map(elm => ({
                            stock_quantity: elm.details[0].stock_quantity,
                            details: elm['details'],
                            general_attributes: elm['general_attributes'],
                            is_enable: elm['is_enable'],
                            id: elm.id,
                            product_type: elm.product_type,
                            product_details_id: elm.details[0].product_details_id ,
                            image: getAbsolutePath(elm.image.thumbnail_url),
                            name: elm.title,
                            cap: elm.categories.map(item => item.title).join(', '),
                            cost: elm.min_price,
                            hoverimage: getAbsolutePath(elm.image.thumbnail_url),
                            tip: false,
                            New: false
                        }))
                    })
                })
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
        getProducts();
        // Only get wishlist when user is logged in
        isLoggedIn && getFavouritesList();
    }, [])

    const tablist = [
        {
            tab: ' BEST SELLERS',
            id: 1
        },
        {
            tab: 'FEATURED',
            id: 2
        },
        {
            tab: 'SALES',
            id: 3
        },
    ]
    return (
        <section className='FeaturedProduct'>
            <SectionTitle title='Featured products' pretitle='FLOWERS'
                          subtitle='Will your clients accept that you go about things order.'/>
            <div className='container'>
                <div className='FeaturedProduct__tab'>
                    <div className='FeaturedProduct__tabhead center'>
                        {
                            tablist.map(
                                (i, key) =>
                                    <div
										key={key}
                                        onClick={() => settab(i.id)} className={`FeaturedProduct__tabhead--title
                                  ${i.id === tab ? 'active-tabfeature' : null}`
                                    }>
                                        {i.tab}
                                        <div className='tabtitlehover'/>
                                    </div>
                            )

                        }
                    </div>
                    <div className='FeaturedProduct__grid'>
                        {
                            tab === 1 ?
                                bestseller.result.map((i, key) => {
                                    const is_favourite = favourites.some(item => item.id === i.id);
                                    return (
                                        <ProductCard
                                            stock_quantity={i.stock_quantity}
                                            is_favourite={is_favourite}
                                            is_enable= {i['is_enable']}
                                            general_attributes={i.general_attributes}
                                            details={i.details}
                                            key={key}
                                            id={i.id}
                                            hot={i.hot}
                                            New={i.New}
                                            tip={i.tip}
                                            product_type={i.product_type}
                                            price={i['prices']}
                                            product_details_id={i.product_details_id}
                                            mainimg={i.image} hoverimg={i.hoverimage}
                                            name={i.name} cap={i.cap} cost={i.cost}
                                        />
                                    )
                                })
                                : tab === 2 ?
                                featured.result.map((i, key) => {
                                    const is_favourite = favourites.some(item => item.id === i.id);
                                    return (
                                        <ProductCard
                                            stock_quantity={i.stock_quantity}
                                            is_favourite={is_favourite}
                                            general_attributes={i.general_attributes}
                                            is_enable= {i['is_enable']}
                                            details={i.details}
                                            key={key}
                                            price={i['prices']}
                                            id={i.id}
                                            hot={i.hot}
                                            New={i.New}
                                            tip={i.tip}
                                            product_type={i.product_type}
                                            product_details_id={i.product_details_id}
                                            mainimg={i.image} hoverimg={i.hoverimage}
                                            name={i.name} cap={i.cap} cost={i.cost}
                                          />
                                    )
                                }) :
                                tab === 3 ?
                                    sales.result.map((i, key) => {
                                        const is_favourite = favourites.some(item => item.id === i.id);
                                        return (
                                            <ProductCard
                                                stock_quantity={i.stock_quantity}
                                                is_favourite={is_favourite}
                                                is_enable= {i['is_enable']}
                                                general_attributes={i.general_attributes}
                                                details={i.details}
                                                key={key}
                                                price={i['prices']}
                                                id={i.id}
                                                product_type={i.product_type}
                                                product_details_id={i.product_details_id}
                                                mainimg={i.image} hoverimg={i.hoverimage}
                                                name={i.name} cap={i.cap} cost={i.cost}
                                                hot={i.hot}
                                                New={i.New}
                                                tip={i.tip}
                                            />
                                        )
                                    }) : null
                        }
                    </div>
                </div>
                {/*<div className='center' style={{margin: '30px 0'}}>*/}
                {/*    <button className='btn btn-secondary'>*/}
                {/*        LOAD MORE PRODUCTS*/}
                {/*    </button>*/}
                {/*</div>*/}
            </div>
        </section>
    )
}

export default FeaturedProduct
