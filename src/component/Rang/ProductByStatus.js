import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const ProductByStatus = () => {
    const CatList = [
        {
            cat: 'On Sale',
        },
        {
            cat: 'In Stock',
        },

    ]
    return (
        <div id='ProductByStatus' className='FilterByColor flex-column-left border-bottom'>
            <h4 className='Filter-title'>
                PRODUCT STATUS
            </h4>
            <div className='FilterBycolorBox'>
                {
                    CatList.map((i, key) =>
                        <div key={key} className='d-flex'>
                            <FormControlLabel
                                value={i.cat}
                                control={<Checkbox color="primary" fontSize="large"/>}
                                label={i.cat}
                                labelPlacement="end"
                            />
                        </div>)
                }

            </div>
        </div>
    )
}

export default ProductByStatus
