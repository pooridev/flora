import React, {useState} from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useLocation } from 'react-router-dom';

const FilterByCategory = ({categories, getProductPerCategory, currentCategory}) => {
    const location = useLocation()

	const [selectedCategories, setSelectedCategories] = useState([]);
	const onChangeCheckBox = ({value, checked}, title) => {
        // update CompleteRange header (Category title)
        location.state = title
        
		let newSelected = [...selectedCategories];
		if(checked){
			newSelected.push(value);
		}else{
			newSelected = newSelected.filter(item => item !== value);
		}
		getProductPerCategory(newSelected);
		setSelectedCategories(newSelected);
	}
	return (
        <div id='FilterByCategory' className='FilterByColor flex-column-left border-bottom'>
            <h4 className='Filter-title'>
                fILTER BY CATEGORY
            </h4>
            <div className='FilterBycolorBox'>
                {
                    categories.map((i, key) =>
                        <div key={key} className='d-flex'>
                            <FormControlLabel
                                value={i.id}
                                control={<Checkbox color="primary" fontSize="large"/>}
                                label={i.title}
                                labelPlacement="end"
								// checked={i.id === currentCategory ? true : selectedCategories.indexOf(i.id) !== -1}
								onChange={({target}) => onChangeCheckBox(target, i.title)}
                            />
                        </div>)
                }

            </div>
        </div>
    )
}

export default FilterByCategory
