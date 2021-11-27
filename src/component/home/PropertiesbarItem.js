import {Link} from 'react-router-dom';

export const PropertiesbarItem = ({img, title, id}) => {
    return (
        <div className='PropertiesbarItem d-flex'>
            <div className='PropertiesbarItem__imagebox'>
                <img alt='hw' src={img}/>
            </div>
            <div className='PropertiesbarItem__textbox'>
                <p>{title}</p>
                <Link to={{
                    pathname: `/category/${id}`,
                    state: title
                }}>see more</Link>
            </div>
        </div>
    )
}
