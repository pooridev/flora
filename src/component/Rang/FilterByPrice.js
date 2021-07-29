import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: '95%',
    marginTop:'15px',
    marginLeft: '10px',
  },
});

function valuetext(value) {
  return `${value}`;
}

function FilterByPrice() {
  const classes = useStyles();
  const [value, setValue] = React.useState([0, 8754]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <div id='FilterByPrice' className='flex-column-left border-bottom'>
          <h4 className='Filter-title'>
          fILTER BY PRICE
          </h4>
        <div className={classes.root}>
          
          <Slider
            value={value}
            onChange={handleChange}
            aria-labelledby="range-slider"
            getAriaValueText={valuetext}
            max={8754}
            min={0}
          />
         <div className='d-flex-spacebetween FilterByPrice__text'>
         <div className='d-flex'>
              <p className='FilterByPrice__title'>Price:</p>
              <p className='FilterByPrice__price'><span>AED</span>{value[0]}</p>
              <p className='FilterByPrice__price'><span>AED</span> {value[1]}</p>

          </div>
          <button className='btn third-btn'>
              Filter
          </button>
         </div>
      </div>
    </div>
  );
}
export default FilterByPrice
