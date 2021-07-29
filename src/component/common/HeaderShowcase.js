import React from 'react'

const HeaderShowcase = ({backimg,children}) => {
    return (
        <div className='HeaderShowcase'>
           <img className='HeaderShowcase__img' src={backimg}/> 
            <div className='HeaderShowcase__title'>
                {children}
            </div>
        </div>
    )
}

export default HeaderShowcase
