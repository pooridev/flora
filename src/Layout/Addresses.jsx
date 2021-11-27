import { Input } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getProfile } from "redux/action-creators/profile";
import AddressesTable from "./../component/Profile/AddressesTable";
import {
	requestDeleteAddress,
	requestGetProfile,
	requestUpdateAddress,
} from "./../queries/me";
import { usePatch } from "./../hooks/usePatch";
import { CustomAlert } from "./../helpers/alert";
/*


{
  "first_name": "string",
  "last_name": "string",
  "country_code": "string",
  "phone_number": "string",
  "alternate_phone_number": "string",
  "location": {
    "coordinates": [
      "string"
    ],
    "type": "Point"
  },
  "street": "string",
  "address_line_1": "string",
  "address_line_2": "string",
  "state": "string",
  "city": "string",
  "postal_code": "string",
  "type": "pickup"
}

*/

const Addresses = () => {
	const { addresses } = useSelector((state) => state.Profile.profile);
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
		type: "",
	});

	const [isEditing, setIsEditing] = useState({
		address_id: null,
		state: false,
	});

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const dispatch = useDispatch();
	const deleteAddressHandler = ({ address_id }) => {
		requestDeleteAddress({ address_id }).then((res) => {
			requestGetProfile().then(({ data }) => dispatch(getProfile(data)));
		});
	};

	const editAddressHandler = (address_id) => {
		setIsEditing({ address_id, state: true });
	};
	const isFormValid = () => {
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
		if (isNaN(formData.phone_number)) {
			CustomAlert({
				icon: "error",
				text: "Number is not a valid number",
			});
			return false;
		}
		return true;
	};
	const submitUpdate = (e) => {
		e.preventDefault();
		const UPDATE_PAYLOAD = {
			address_id: isEditing.address_id,
			body: { ...formData },
		};
		if (isFormValid()) {
			requestUpdateAddress(UPDATE_PAYLOAD)
				.then((_) => {
					CustomAlert({ icon: "success", title: "Edited !" });
					requestGetProfile().then(({ data }) =>
						dispatch(getProfile(data))
					);
					setIsEditing({ address_id: null, state: false });
				})
				.catch((err) => console.log(err));
		}
	};

	useEffect(() => {
		/**
		 * @description set the form data and input default values to the address that is being edited
		 */
		const address = addresses.find(address => address.address_id === isEditing.address_id);
		setFormData({
			first_name: address?.first_name,
			last_name: address?.last_name,
			country_code: address?.country_code,
			phone_number: address?.phone_number,
			alternate_phone_number: address?.alternate_phone_number,
			street: address?.street,
			address_line_1: address?.address_line_1,
			address_line_2: address?.address_line_2,
			state: address?.state,
			city: address?.city,
			postal_code: address?.postal_code,
			type: address?.type,
		})
	} ,[isEditing.state])

	if (isEditing.state) {
		return (
			<form className="addresses" onSubmit={submitUpdate}>
				<div className="inputs">
					<div className="input-wrapper">
						<label htmlFor="firstname">Edit first name</label>
						<input
							onChange={({ target }) =>
								setFormData({ first_name: target.value })
							}
							id="firstname"
							type="text"
							value={formData.first_name}
							placeholder={"Your first name"}
							className="addresses__input"
						/>
					</div>
					<div className="input-wrapper">
						<label htmlFor="lastname">Edit last name</label>
						<input
							id="lastname"
							onChange={({ target }) =>
								setFormData({ last_name: target.value })
							}
							value={formData.last_name}
							type="text"
							placeholder={"your last name"}
							className="addresses__input"
						/>
					</div>
					<div className="input-wrapper">
						<label htmlFor="countrycode">Edit country code</label>
						<input
							onChange={({ target }) =>
								setFormData({ country_code: target.value })
							}
							value={formData.country_code}
							id="countrycode"
							type="text"
							placeholder={"your country code"}
							className="addresses__input"
						/>
					</div>
					<div className="input-wrapper">
						<label htmlFor="phonenumber">Edit phone number</label>
						<input
							onChange={({ target }) =>
								setFormData({ phone_number: target.value })
							}
							value={formData.phone_number}
							id="phonenumber"
							type="text"
							placeholder={"your phone number"}
							className="addresses__input"
						/>
					</div>
					<div className="input-wrapper">
						<label htmlFor="street">Edit street</label>
						<input
							onChange={({ target }) =>
								setFormData({ street: target.value })
							}
							value={formData.street}
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
							value={formData.address_line_1}
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
							value={formData.postal_code}
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
							value={formData.city}
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
							value={formData.state}
							id="state"
							type="text"
							placeholder={"your state"}
							className="addresses__input"
						/>
					</div>
					<div className="input-wrapper">
						<label htmlFor="type">shipping method</label>

						<select
							name="type"
							id="type"
							defaultValue={formData.type}
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
							<option value="billing_address">
								billing address
							</option>
						</select>
					</div>
				</div>

				<button type="submit" className="btn update-address-btn">
					Update
				</button>
			</form>
		);
	}

	return (
		<div>
			{Object.keys(addresses || {}).length ? (
				<AddressesTable
					onEditAddress={editAddressHandler}
					onDeleteAddress={deleteAddressHandler}
					addresses={addresses}
				/>
			) : (
				<h1>There's no address</h1>
			)}
		</div>
	);
};

export default Addresses;
