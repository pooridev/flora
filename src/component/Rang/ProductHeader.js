import React from 'react'

const ProductHeader = ({data, onChangeFilter}) => {
    return (
        <div className=' ProductHeader'>

            <div className='CheckOutForm__review reviewform-row mr-left-25 xs-opacity0'>
                <select className='select-input' defaultValue={data.sort} onChange={({target}) => onChangeFilter({sort: target.value})}>
                    <option value='asc'>Ascending</option>
                    <option value='desc'>Descending</option>
                </select>
            </div>

        </div>
    )
}

export default ProductHeader
