import React from 'react'

const SectionTitle = ({pretitle,title,subtitle}) => {
    return (
        <div className='SectionTitle'>
            <p className='SectionTitle__pre'>{pretitle}</p>
            <h3>
                {title}
            </h3>
            <p className='SectionTitle__sub'>
              {subtitle}
            </p>
        </div>
    )
}

export default SectionTitle
