const ProductGeneralAttributes = ({ onChangeGeneralAttributes }) => {
	return (
		<div>
			<select
				className="select-input"
				onChange={({ target }) =>
					onChangeGeneralAttributes({ flower_color: [target.value] })
				}
			>
				<option value="">Flower color</option>
				<option value="Pink">Pink</option>
				<option value="Red">Red</option>
				<option value="White">White</option>
			</select>
			<select
				className="select-input"
				onChange={({ target }) =>
					onChangeGeneralAttributes({ box_color: [target.value] })
				}
			>
				<option value="">Box color</option>
				<option value="White">White</option>
				<option value="Black">Black</option>
				<option value="Gold">Gold</option>
			</select>
			<select
				className="select-input"
				onChange={({ target }) =>
					onChangeGeneralAttributes({ flower_type: [target.value] })
				}
			>
				<option value="">Flower type</option>
				<option value="Rose">Rose</option>
				<option value="Lilium">Lilium</option>
				<option value="Hydrangea">Hydrangea</option>
			</select>
		</div>
	);
};

export default ProductGeneralAttributes;
