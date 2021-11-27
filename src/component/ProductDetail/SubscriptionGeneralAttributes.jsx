const SubscriptionGeneralAttributes = ({ onChangeGeneralAttributes }) => {
	return (
		<div>
			<select
				className="select-input"
				onChange={({ target }) =>
					onChangeGeneralAttributes({ flower_blooms: [target.value] })
				}
			>
				<option value="">Flower blooms</option>
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
		</div>
	);
};

export default SubscriptionGeneralAttributes;
