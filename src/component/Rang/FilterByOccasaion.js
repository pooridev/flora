import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useLocation } from 'react-router-dom';

const FilterByOccassion = ({
	occasions,
	getProductPerCategory,
	currentOccassion,
}) => {
	const [selectedOccassion, setSelectedOccassion] = useState([]);
	let location = useLocation()
	const onChangeCheckBox = ({ value, checked }, title) => {
		// update CompleteRange header (Category title)
		location.state = title
		
		let newSelected = [...selectedOccassion];
		if (checked) {
			newSelected.push(value);
		} else {
			newSelected = newSelected.filter((item) => item !== value);
		}
		getProductPerCategory(newSelected);
		setSelectedOccassion(newSelected);
	};
	return (
		<div
			id="FilterByCategory"
			className="FilterByColor flex-column-left border-bottom"
		>
			<h4 className="Filter-title">fILTER BY OCCASION</h4>
			<div className="FilterBycolorBox">
				{occasions.map((i, key) => (
					<div key={key} className="d-flex">
						<FormControlLabel
							value={i.id}
							control={
								<Checkbox color="primary" fontSize="large" />
							}
							label={i.title}
							labelPlacement="end"
							disabled={i.id === currentOccassion}
							checked={
								i.id === currentOccassion
									? true
									: selectedOccassion.indexOf(i.id) !== -1
							}
							onChange={({ target }) => onChangeCheckBox(target, i.title)}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default FilterByOccassion;
