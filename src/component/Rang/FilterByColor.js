import React from 'react'

const FilterByColor = () => {
    const colorList = [
        {
            hex: '#F0DEBA',
            name: 'Beige',
            num: '12'
        },
        {
            hex: '#0A0A0A',
            name: 'Black',
            num: '12'
        },
        {
            hex: '#19A8E3',
            name: 'Blue',
            num: '12'
        },
        {
            hex: '#49271D',
            name: 'Brown',
            num: '12'
        },
        {
            hex: '#BFBFBF',
            name: 'Gray',
            num: '12'
        },
        {
            hex: '#50B948',
            name: 'Green',
            num: '12'
        },
        {
            hex: '#FBA2A2',
            name: 'Pink',
            num: '12'
        },
    ]
    return (
        <div className='FilterByColor flex-column-left border-bottom'>
            <h4 className='Filter-title'>
                fILTER BY Color
            </h4>
            <div className='FilterBycolorBox'>
                {
                    colorList.map((i, key) => (
                        <div key={key} className='FilterBycolorBox-row d-flex-spacebetween'>
                            <div className='d-flex colorbox'>
                                <div className='color-circle' style={{backgroundColor: i.hex}}/>
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

export default FilterByColor
