import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { usePatch } from "hooks/usePatch";
import { CustomAlert } from "helpers/alert";
import { requestNewAddress } from "queries/me";
import { requestGetProfile } from "./../../queries/me";
import { getProfile } from "redux/action-creators/profile";

const NewAddress = ({ setIsAdding }) => {
	const [formData, setFormData] = usePatch({
		first_name: "",
		last_name: "",
		country_code: "",
		phone_number: "",
		alternate_phone_number: "",
		street: "",
		address_line_1: "",
		address_line_2: "",
		state: "",
		city: "",
		postal_code: "",
		type: 'pickup',
	});
	const dispatch = useDispatch();
	useEffect(() => {
		window.scrollTo(0, 0);
		// getLocation();
	}, []);

	// const getLocation = () => {
	// 	navigator.geolocation.getCurrentPosition(setLocation);
	// };

	// const setLocation = ({ coords }) => {
	// 	const { latitude, longitude } = coords;
	// 	setFormData({ location: { coordinates: [longitude, latitude] } });
	// };

	const isFormValid = () => {
		if (isNaN(formData.phone_number)) {
			CustomAlert({
				icon: "error",
				text: "Number is not a valid number",
			});
			return false;
		}
		const {
			first_name,
			last_name,
			country_code,
			phone_number,
			street,
			address_line_1,
			state,
			city,
			postal_code,
			type,
		} = formData;

		if (
			!first_name ||
			!last_name ||
			!country_code ||
			!phone_number ||
			!street ||
			!address_line_1 ||
			!state ||
			!city ||
			!postal_code ||
			!type
		) {
			CustomAlert({ icon: "error", text: "Field required" });
			return false;
		}

		return true;
	};
	const submitAddition = (e) => {
		e.preventDefault();
		const ADD_PAYLOAD = { ...formData };
		if (isFormValid()) {
			requestNewAddress(ADD_PAYLOAD)
				.then(() => {
					CustomAlert({ icon: "success", title: "Added" });
					requestGetProfile().then(({ data }) =>
						dispatch(getProfile(data))
					);
					setIsAdding(false);
				})
				.catch((e) => {
					console.log(e);
				});
		}
	};
	return (
		<form className="addresses" onSubmit={submitAddition}>
			<div className="inputs">
				<div className="input-wrapper">
					<label htmlFor="firstname">First name</label>
					<input
						onChange={({ target }) =>
							setFormData({ first_name: target.value })
						}
						id="firstname"
						type="text"
						placeholder={"Your first name"}
						className="addresses__input"
					/>
				</div>
				<div className="input-wrapper">
					<label htmlFor="lastname">Last name</label>
					<input
						id="lastname"
						onChange={({ target }) =>
							setFormData({ last_name: target.value })
						}
						type="text"
						placeholder={"your last name"}
						className="addresses__input"
					/>
				</div>
				<div className="input-wrapper">
					<label htmlFor="countrycode">Country code</label>
					<input
						onChange={({ target }) =>
							setFormData({ country_code: target.value })
						}
						id="countrycode"
						type="text"
						placeholder={"your country code"}
						className="addresses__input"
					/>
				</div>
				<div className="input-wrapper">
					<label htmlFor="phonenumber">Phone number</label>
					<input
						onChange={({ target }) =>
							setFormData({ phone_number: target.value })
						}
						id="phonenumber"
						type="text"
						placeholder={"your phone number"}
						className="addresses__input"
					/>
				</div>
				<div className="input-wrapper">
					<label htmlFor="street">Street</label>
					<input
						onChange={({ target }) =>
							setFormData({ street: target.value })
						}
						id="street"
						type="text"
						placeholder={"your street name"}
						className="addresses__input"
					/>
				</div>
				<div className="input-wrapper">
					<label htmlFor="address">Address</label>
					<input
						onChange={({ target }) =>
							setFormData({ address_line_1: target.value })
						}
						id="address"
						type="text"
						placeholder={"your address"}
						className="addresses__input"
					/>
				</div>
				<div className="input-wrapper">
					<label htmlFor="postalcode">Postal code</label>
					<input
						onChange={({ target }) =>
							setFormData({ postal_code: target.value })
						}
						id="postalcode"
						type="text"
						placeholder={"your psotal code"}
						className="addresses__input"
					/>
				</div>
				<div className="input-wrapper">
					<label htmlFor="state">city</label>
					<input
						onChange={({ target }) =>
							setFormData({ city: target.value })
						}
						id="state"
						type="text"
						placeholder={"your city"}
						className="addresses__input"
					/>
				</div>
				<div className="input-wrapper">
					<label htmlFor="state">state</label>
					<input
						onChange={({ target }) =>
							setFormData({ state: target.value })
						}
						id="state"
						type="text"
						placeholder={"your state"}
						className="addresses__input"
					/>
				</div>
				<div className="input-wrapper">
					<label htmlFor="type">Shipping method</label>

					<select
						name="type"
						id="type"
						defaultValue="pickup"
						className="select-input"
						onChange={({ target }) =>
							setFormData({ type: target.value })
						}
					>
						<option value="pickup">pickup</option>
						<option value="warehouse">warehouse</option>
						<option value="work">work</option>
						<option value="shipping_address">
							shipping address
						</option>
						<option value="billing_address">billing address</option>
					</select>
				</div>
			</div>

			<button type={"submit"} className="btn update-address-btn">
				ADD
			</button>
		</form>
	);
};

export default NewAddress;
