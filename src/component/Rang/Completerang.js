import React from 'react'
import FilterByCategory from './FilterByCategory'
// import FilterByColor from './FilterByColor'
import FilterByPrice from './FilterByPrice'
import PaginationComponent from './Pagination'
// import ProductByStatus from './ProductByStatus'
import ProductGrid from './ProductGrid'
import ProductHeader from './ProductHeader'
import {Configs} from "../../configs";
// import TopRatedProduct from './TopRatedProduct'
import Spinner from './../common/Spinner';
import FilterByOccassion from './FilterByOccasaion'

const Completerang = ({products, categories,loading, getProductPerCategory,occasions ,currentCategory, setFilter, filter, onFilter, pagination}) => {
  
    return (
        <div className='container'>
            <div className='Completerang-container '>
                <div className='Completerang-filter'>
                    <FilterByPrice onChangeFilter={setFilter} data={filter} onFilter={onFilter}/>
                    {/*<FilterByColor/>*/}
                     {/*<FilterByBoxSize />*/}
                    <FilterByCategory categories={categories} getProductPerCategory={getProductPerCategory} currentCategory={currentCategory}/>
                    <FilterByOccassion getProductPerCategory={getProductPerCategory} occasions={occasions} />
                    {/*<ProductByStatus/>*/}
                    {/*<TopRatedProduct/>*/}

                </div>
                <div className='Completerang-grid'>
                    <ProductHeader onChangeFilter={setFilter} data={filter}/>
                    { loading ? <div className="center"><Spinner /></div> :  <ProductGrid products={products}/> }
					{
						pagination.total > Configs.LIMIT && <PaginationComponent pagination={pagination}/>
					}
                </div>
            </div>

        </div>
    )
}

export default Completerang
