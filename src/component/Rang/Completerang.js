
import React from 'react'
import FilterByBoxSize from './FilterByBoxSize'
import FilterByCategory from './FilterByCategory'
import FilterByColor from './FilterByColor'
import FilterByPrice from './FilterByPrice'
import PaginationComponent from './Pagination'
import ProductByStatus from './ProductByStatus'
import ProductGrid from './ProductGrid'
import ProductHeader from './ProductHeader'
import TopRatedProduct from './TopRatedProduct'

const Completerang = () => {
    return (
        <div className='container'>
            <div className='Completerang-container '>
                 <div className='Completerang-filter'>
                     <FilterByPrice />
                     <FilterByColor />
                     <FilterByBoxSize />
                     <FilterByCategory />
                     <ProductByStatus />
                     <TopRatedProduct/>

                 </div>
                 <div className='Completerang-grid'>
                     <ProductHeader />
                     <ProductGrid/>
                     <PaginationComponent />
                 </div>
            </div>
            
        </div>
    )
}

export default Completerang
