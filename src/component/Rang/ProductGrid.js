import React from 'react'
import ProductCard from '../common/ProductCard/ProductCard'
import {getAbsolutePath} from "../../helpers/strings";

const ProductGrid = ({products}) => {
    return (
        <div className='ProductGrid'>
            {
				products.length ?
					(
						products.map(item => (
							{
								is_enable: item['is_enable'],
								id: item['id'],
								image: getAbsolutePath(item['image']['thumbnail_url']),
								name: item['title'],
								cap: item['categories'].map(element => element['title']).join(', '),
								cost: item['min_price'],
								product_details_id: item.details[0].product_details_id ,
								product_type: item.product_type,
								hoverimage: getAbsolutePath(item['image']['thumbnail_url']),
								stock_quantity: item['details'][0]['stock_quantity'],
								tip: false,
								New: false,
								hot: false
							}
						)).map((i, key) => <ProductCard
							key={key}
							id={i.id}
							stock_quantity={i.stock_quantity}
							hot={i.hot}
							New={i.New}
							is_enable={i.is_enable}
							product_details_id={i.product_details_id}
							product_type={i.product_type}
							tip={i.tip}
							mainimg={i.image}
							hoverimg={i.hoverimage}
							name={i.name} cap={i.cap} cost={i.cost}
						/>)
					)
					:
					(
						<h2>No product</h2>
					)
            }
        </div>
    )
}

export default ProductGrid
