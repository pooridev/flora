import React,{useContext, useState} from 'react'
import search from "../../assets/image/home/icon/search.svg"
import heart from "../../assets/image/home/icon/Combined Shape.svg"
import buy from "../../assets/image/home/icon/Buy.svg"

import { useHistory } from 'react-router-dom'
import UseWindowSize from '../../Sizes/UseWindowSize';
import { GetNavcardContext } from '../context/Navcardcontext'

const ProductCard = ({mainimg,hoverimg,name,cap,cost,id}) => {
    const [imageHover, setImageHover] = useState(false)
    const history = useHistory()
    const gotoProduct = ()=>{
       history.push(`/product-detail/${id}`)
    }
    const windowSize = UseWindowSize();
    const {cartnav,setcartnav} = useContext(GetNavcardContext)
     const opencardnav = (e)=>{
     e.stopPropagation()
     setcartnav(true)
     }
    return (
        <div className='ProductCard'onClick={gotoProduct}>
            <div className='ProductCard-imgBox' onMouseOver={()=>{setImageHover(true)}}
            onMouseLeave={()=>{setImageHover(false)}}
            >
                {
                    imageHover ?
                    <div className='ProductCard--hoverbox'>
                      
                        <img className='hover-img' src={hoverimg} />
                        <div className='ProductCard--hoverbox--addtocart' style={{cursor:'pointer'}} onClick={opencardnav} >
                             ADD TO CART
                        </div>
                        <div className='ProductCard--hoverbox--icons'>
                            <img src={search} />
                            <img src={heart} />
                        </div>
                    </div>
                    :
                  <div className='relative'>
                       { windowSize === 'xs' ?
                     <div>
                   <div className='Productcard__heart center'>
                     <img src={heart} />
                   </div>

                      <img src={mainimg} className='Productcard__img'/>
                      <div className='Productcard__buy center'>
                     <img src={buy} />
                   </div>

                     </div>
                     : <img src={mainimg} />}
                  </div>

                }
            </div>
            <h6 className='ProductCard__name'>
                {name}
            </h6>
            <p  className='ProductCard__cap'>
                {cap}
            </p>
            <p className='ProductCard__cost'>
              AED  {cost}
            </p>

        </div>
    )
}

export default ProductCard
