import React from 'react';
import flower1 from '../../assets/image/home/prpertybar/bouquet 1.svg';
import flower2 from '../../assets/image/home/prpertybar/rose 1.svg';
import flower3 from '../../assets/image/home/prpertybar/LONG LIFE ROSES.svg';
import flower4 from '../../assets/image/home/prpertybar/CUSTOM BOXES.svg';
import flower5 from '../../assets/image/home/prpertybar/flower 1.svg';
import { Link } from 'react-router-dom';

export const PropertiesbarItem = ({img,title,url}) => {
    return (
        <div className='PropertiesbarItem d-flex'>
             <div className='PropertiesbarItem__imagebox'>
                  <img src={img}/>
             </div>
             <div className='PropertiesbarItem__textbox'>
                  <p>{title}</p>
                  <Link to={`/${url}`}>see more</Link>
             </div>
        </div>
    )
}

const Propertiesbar = () => {
    const list = [
        {
            img:flower1,
            title:"Complete Range",
            url:''
        },
        {
            img:flower2,
            title:"Fresh Roses",
            url:''
        },
        {
            img:flower3,
            title:"Long Life Roses",
            url:''
        },
        {
            img:flower4,
            title:"Custom Boxes",
            url:''
        },
        {
            img:flower5,
            title:"Dried Flowers",
            url:''
        }
    ]
    return (
        <section className='Propertiesbar'>
             <div className='container'>
                 <div className='d-flex-spacebetween Propertiesbar__sec'>
                    {list.map(i=><PropertiesbarItem img={i.img}
                    title={i.title}
                    url={i.url}
                    />)}
                 </div>
             </div>
        </section>
    )
}

export default Propertiesbar
