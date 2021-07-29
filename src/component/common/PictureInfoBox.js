import React from 'react'
import { Link } from 'react-router-dom'

const PictureInfoBox = ({title,url,className}) => {
    return (
        <div className={`PictureInfoBox ${className}`}>
            <h3>{title}</h3>
            <Link className=' a_withborder'>
                VIEW MORE
            </Link>
        </div>
    )
}

export default PictureInfoBox
