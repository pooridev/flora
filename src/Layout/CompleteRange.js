import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Completerang from '../component/Rang/Completerang'
import HeaderShowcase from '../component/common/HeaderShowcase'
import background from '../assets/image/rang/woman-holding-branch-snow-willow-flower 1.png'
import ResponsiveFilter from '../component/Rang/ResponsiveFilter'
import { Link, useLocation } from 'react-router-dom'
import resbackimg from '../assets/image/responsive/completerange.png'
import { requestProductsList } from '../queries/products'
import { requestCategoriesList } from '../queries/categories'
import { usePatch } from '../hooks/usePatch'
import { Configs } from '../configs'

const Header = props => {
	// category title generated from url
	const { state } = useLocation()

	return (
		<div className='header_title' style={{ textAlign: 'center' }}>
			{
				state
					? <>
							<h2>{state}</h2>
							<div className='d-flex xs-opacity0'>
								<Link to='/'>
									<p>HOME </p>
								</Link>
								<Link to='/'>
									<p>/ CATEGORIES </p>
								</Link>
								<p style={{ textTransform: 'uppercase' }}>/ {state}</p>
							</div>
						</>
					: null	
			}
		</div>
	)
}

const removeDuplicateFromArray = arr => {
	return [...new Set(arr)]
}

const CompleteRange = () => {
	const { category_id, search } = useParams()
	const [filternav, setFilterNav] = useState(false)
	const [category, setCategory] = useState({})
	const [categories, setCategories] = useState([])
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(false);
	const location = useLocation()

	const [pagination, setPagination] = usePatch({
		total: 0,
		current: 0,
	})


	const isSubscription = category_id === 'subscription'
	const isSearched = !!search
	const [filter, setFilterItem] = usePatch({
		sort: 'asc',
		price_gt: 10000,
		price_lt: 1,
		[!isSubscription && 'cat_ids']: [category_id],
	})
	const closenav = () => {
		setFilterNav(false)
	}


	const getProductsPerCategory = (cat_ids, filters = filter) => {
		const catIds = cat_ids ? [category_id, ...cat_ids] : filter.cat_ids
		const PAYLOAD = {
			...{
				[!isSearched && 'product_type']: isSubscription ? 'subscription' : 'product',
				price_gt: filters.price_lt,
				price_lt: filters.price_gt,
				sort_by: `${filters.sort}(id)`,
				limit: Configs.LIMIT,
				offset: pagination.current * Configs.LIMIT,
				[isSearched && 'search']: search,
			},
			cat_ids: isSubscription
				? cat_ids
				: removeDuplicateFromArray(
						typeof catIds === 'string' ? [catIds] : catIds
				  ),
		}
		setFilterItem({ cat_ids: PAYLOAD.cat_ids })
		requestProductsList(PAYLOAD)
			.then(response => {
				setLoading(false)
				setPagination({ total: response.data.total })
				setProducts(response['data']['result'])
			})
			.catch(error => {
				setLoading(false)
				console.log(error)
			})
	}

	useEffect(() => {
		setLoading(true)
		window.scrollTo(0, 0)
		requestCategoriesList().then(response => {
			getProductsPerCategory(filter.cat_ids)
			setCategories(response.data)
			setCategory(
				isSubscription
					? response['data'][0]
					: response['data'].find(item => item['id'] === category_id || [])
			)
		})
		!isSubscription && getProductsPerCategory()
		// eslint-disable-next-line
	}, [category_id,search, filter.sort, pagination.current])

	const onFilter = () => {
		getProductsPerCategory(undefined, filter)
	}

	return (
		<div>
			{Object.keys(category || {}).length ? (
				<>
					<HeaderShowcase resbackimg={resbackimg} backimg={background}>
						<Header
							// title={isSubscription ? 'Subscription' : category['title']}
						/>
					</HeaderShowcase>
					<Completerang
						occasions={categories.filter(c => c.is_occasion)}
						loading={loading}
						filter={filter}
						setFilter={setFilterItem}
						products={products}
						currentCategory={category.id}
						categories={categories.filter(c => !c.is_occasion)}
						onFilter={onFilter}
						pagination={{
							...pagination,
							onChangePage: page => setPagination({ current: page }),
						}}
						getProductPerCategory={getProductsPerCategory}
					/>
					{filternav ? <ResponsiveFilter closenav={closenav} /> : null}
				</>
			) : (
				<>
					<h2 style={{ textAlign: 'center', marginTop: '20px' }}>Loading</h2>
				</>
			)}
		</div>
	)
}

export default CompleteRange
