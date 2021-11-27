import React, {useState} from 'react'
import heart from "../../assets/image/home/icon/Combined Shape.svg"
import checkicon from "../../assets/image/home/icon/noun_Check Mark_15005.svg"
import {BootstrapTooltip} from './ProductCard/ProductCard'
import redheart from '../../assets/image/home/icon/Heart.png'

const HeartIcon = () => {
    const [check, setCheck] = useState(false)
    return (
        <BootstrapTooltip title='Add to WishList'>
            <div>
                {
                    !check ? <img alt='heart' src={heart} onClick={() => setCheck(true)}/> :
                        <img alt='heart' src={redheart} style={{width: '22px'}}/>
                }

            </div>
        </BootstrapTooltip>
    )
}

export default HeartIcon
