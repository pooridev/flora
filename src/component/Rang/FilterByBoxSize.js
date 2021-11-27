import React from 'react'

const FilterByBoxSize = () => {
    const colorList = [
        {
            name: 'S',
            num: '12'
        },
        {
            name: 'XS',
            num: '12'
        },
        {
            name: 'M',
            num: '12'
        },
        {
            name: 'L',
            num: '12'
        },
        {
            name: 'XL',
            num: '12'
        },
        {
            name: 'XXL',
            num: '12'
        },

    ]
    return (
        <div className='FilterByColor flex-column-left border-bottom'>
            <h4 className='Filter-title'>
                fILTER BY box SIZE
            </h4>
            <div className='FilterBycolorBox'>
                {
                    colorList.map(i => (
                        <div className='FilterBycolorBox-row d-flex-spacebetween'>
                            <div className='d-flex colorbox'>
                                <p>{i.name}</p>
                            </div>
                            <div className='number-div center'>
                                <p>{i.num}</p>
                            </div>
                        </div>

                    ))
                }

            </div>
        </div>
    )
}

export default FilterByBoxSize
