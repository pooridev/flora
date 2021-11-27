import ProductCard from '../component/common/ProductCard/ProductCard'
import { getAbsolutePath } from './../helpers/strings';

const WishList = ({favourites, offset, setFavourites }) => {
	return (
        <div className="container">
            <div className="wishlist-grid">
                {favourites.length ? favourites.map((i, key) => <ProductCard
                    key={key}
                    id={i['id']}
                    is_favourite
                    is_enable={i['is_enable']}
                    onFavouritesChange={setFavourites}
                    product_details_id={i['details']['product_details_id']}
                    mainimg={getAbsolutePath(i['base_file']['thumbnail_url'])}
                    hoverimg={getAbsolutePath(i['base_file']['thumbnail_url'])}
                    name={i.title} 
                    cost={i.prices}
                />)  : <p>It's empty</p>}
            </div>
        </div>
	);
};

export default WishList;
