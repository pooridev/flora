import { Avatar, makeStyles, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import user from "assets/image/user.png";
import { usePatch } from "../../hooks/usePatch";
import { CustomAlert } from "../../helpers/alert";
import { requestUpdateProfile, requestUploadAvatar } from "queries/me";
import { getProfile } from "../../redux/action-creators/profile";
import { getAbsolutePath } from "./../../helpers/strings";

const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		flexWrap: "wrap",
	},
	textField: {
		width: "100%",
		fontSize: "2rem",
	},
}));

const Settings = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const { avatar, date_of_birth, mobile_number, first_name } = useSelector(
		({ Profile }) => Profile.profile
	);

	const [formData, setFormData] = usePatch({
		image: null,
		date_of_birth: date_of_birth || '',
		mobile_number: mobile_number || '',
		settings: {
			language: "EN",
			country_code: "UAE",
		},
		avatar: {
			file_url: null,
			id: null,
		},
	});

	const postAvatarHandler = (e) => {
		const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
		const selected = e.target.files[0];
		const myFormData = new FormData();
		myFormData.append("avatar", selected);

		if (selected && ALLOWED_TYPES.includes(selected.type)) {
			requestUploadAvatar(myFormData).then(({ data }) =>
				setFormData({ avatar: data })
			)
			.catch(() => CustomAlert({ icon: "warning", title: "File size is too large" }));

			return;
		}

		CustomAlert({ icon: "warning", title: "Invalid image format" });
	};

	const validate = (e) => {
	//	const PHONE_NUMBER_PATTER = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;

		if (isNaN(formData.mobile_number) || formData.mobile_number.length < 5) {
			return false;
		}

		if (!formData.date_of_birth && formData.date_of_birth.length < 1) {
			return false;
		}

		return true;
	};

	const updateProfileHandler = (e) => {
		e.preventDefault();
		const isValid = validate();

		const PROFILE_PAYLOAD = {
			date_of_birth: formData.date_of_birth,
			mobile_number: formData.mobile_number,
			settings: {
				language: "EN",
				country_code: "UAE",
			},
			avatar: formData.avatar_id,
		};
		debugger
		if (isValid) {
			requestUpdateProfile(PROFILE_PAYLOAD)
				.then(({ data }) => {
					CustomAlert({ icon: "success", title: "Updated !!!!" });
					dispatch(getProfile(data));
				})
				.catch((err) => console.log(err));
			return;
		}

		CustomAlert({ icon: "error", text: "Fill out fields with correct values" });
	};
	return (
		<main>
			<form className="settings" onSubmit={updateProfileHandler}>
				<div className="avatar-wrapper">
					<label htmlFor="avatar">
						<Avatar
							alt={first_name}
							src={getAbsolutePath(avatar)}
						/>
						<input
							onChange={postAvatarHandler}
							id="avatar"
							type="file"
						/>
						<p>Click to change avatar</p>
					</label>
				</div>
				<div className="inputs">
					<div className="dateofbirth-wrapper">
						<label htmlFor="date">Edit date of birth</label>
						<TextField
							onChange={(event) =>
								setFormData({
									date_of_birth: event.target.value,
								})
							}
							id="date"
							type="date"
							defaultValue={date_of_birth ?? ""}
							className={classes.textField}
							InputLabelProps={{
								shrink: true,
							}}
						/>
					</div>
					<div className="phonenumber-wrapper">
						<label htmlFor="date">Edit your mobile number</label>
						<input
							onChange={({ target }) =>
								setFormData({ mobile_number: target.value })
							}
							type="text"
							placeholder={mobile_number ?? "enter mobile number"}
							className="CheckOutForm__input"
						/>
					</div>
				</div>
				<button type={"submit"} className="btn update-profile-btn">
					Update
				</button>
			</form>
		</main>
	);
};

export default Settings;
