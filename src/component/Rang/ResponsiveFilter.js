import React from 'react'
// import FilterByBoxSize from './FilterByBoxSize'
import FilterByCategory from './FilterByCategory'
// import FilterByColor from './FilterByColor'
import FilterByPrice from './FilterByPrice'
// import TopRatedProduct from './TopRatedProduct'
// import ProductByStatus from './ProductByStatus'

const ResponsiveFilter = ({closenav}) => {
    return (
        <div className='ResponsiveFilter'>
            <div className='closeNav' onClick={closenav}>
                <i className="fas fa-times"/>
            </div>
            <FilterByPrice/>
            {/*<FilterByColor/>*/}
            {/*<FilterByBoxSize/>*/}
            <FilterByCategory/>
            {/*<ProductByStatus/>*/}
            {/*<TopRatedProduct/>*/}
        </div>
    )
}

export default ResponsiveFilter
