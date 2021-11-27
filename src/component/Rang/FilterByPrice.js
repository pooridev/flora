import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: '95%',
        marginTop: '15px',
        marginLeft: '10px',
    },
});

function valuetext(value) {
    return `${value}`;
}

function FilterByPrice({data, onChangeFilter, onFilter}) {
    const classes = useStyles();

    const handleChange = (event, newValue) => {
    	onChangeFilter({
			price_lt: newValue[0],
			price_gt: newValue[1]
		})
    };

    return (
        <div id='FilterByPrice' className='flex-column-left border-bottom'>
            <h4 className='Filter-title'>
                fILTER BY PRICE
            </h4>
            <div className={classes.root}>

                <Slider
                    value={[data.price_lt, data.price_gt]}
                    onChange={handleChange}
                    aria-labelledby="range-slider"
                    getAriaValueText={valuetext}
                    max={10000}
                    min={0}
                />
                <div className='d-flex-spacebetween FilterByPrice__text'>
                    <div className='d-flex'>
                        <p className='FilterByPrice__title'>Price:</p>
                        <p className='FilterByPrice__price'><span>AED</span>{data.price_lt}</p>
                        <p className='FilterByPrice__price'><span>AED</span> {data.price_gt}</p>

                    </div>
                    <button className='btn third-btn' onClick={onFilter}>
                        Filter
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FilterByPrice
