import React from 'react'
import svg1 from '../../assets/image/rang/4.svg'
import svg2 from '../../assets/image/rang/3.svg'
import svg3 from '../../assets/image/rang/2.svg'
import svg4 from '../../assets/image/rang/1.svg'

const ProductHeader = () => {
    return (
        <div className=' ProductHeader'>
             <div className='d-flex'>
                <p>show:</p>
                <p>9 / 12 / 18 / 24</p>
             </div>
          <div className='d-flex mr-left-25 ProductHeader__img xs-opacity0'>
           <img src={svg1} />
           <img src={svg2} />
           <img src={svg3} />
           <img src={svg4} />

          </div>
          <div className='CheckOutForm__review reviewform-row mr-left-25 xs-opacity0'>
                <select className='select-input' defaultValue='Default Sorting' >
                    <option value='Default Sorting' >Default Sorting</option>
                    <option>2</option>
                </select>
            </div>

        </div>
    )
}

export default ProductHeader
