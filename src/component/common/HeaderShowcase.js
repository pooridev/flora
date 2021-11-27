import React from 'react'
import UseWindowSize from '../../Sizes/UseWindowSize';

const HeaderShowcase = ({backimg, children, resbackimg}) => {
    const windowSize = UseWindowSize();

    return (
        <div className='HeaderShowcase'>
            {windowSize === 'sm' ? <img alt='hw' className='HeaderShowcase__img' src={resbackimg}/> :
                <img alt='hw' className='HeaderShowcase__img' src={backimg}/>}
            <div className='HeaderShowcase__title'>
                {children}
            </div>
        </div>
    )
}

export default HeaderShowcase
