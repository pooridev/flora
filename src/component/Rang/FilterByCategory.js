import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const FilterByCategory = () => {
   const CatList = [
   {
        cat:'Shop all',
   },
   {
        cat:'Fresh roses in box',
    },
    {
        cat:'Infinity roses in box',
    },
    {
        cat:'Mix flowers in box',
    },
    {
        cat:'Signature design',
    },
    {
        cat:'Premium buoquet',
    },
    {
        cat:'Custom boxes',
    },
    {
        cat:'Premium orchid plants',
    },
    {
        cat:'Dried flowers',
    },
    ]
    return (
        <div id='FilterByCategory' className='FilterByColor flex-column-left border-bottom'>
             <h4 className='Filter-title'>
                fILTER BY CATEGORY       
             </h4>
         <div className='FilterBycolorBox'>
          {
              CatList.map(i=>
              <div className='d-flex'>
                  <FormControlLabel
                  value={i.cat}
                  control={<Checkbox color="primary" fontSize="large"/>}
                  label={i.cat}
                  labelPlacement="End"
                />
              </div>)
          }
          
          </div>
        </div>
    )
}

export default FilterByCategory
