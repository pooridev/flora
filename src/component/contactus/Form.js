import { CustomAlert } from "helpers/alert";
import { useState } from "react";
import { usePatch } from "./../../hooks/usePatch";
import { requestSendMessage } from "./../../queries/contact-us";
import Spinner from "component/common/Spinner";
import { Link } from "react-router-dom";

const Form = () => {
	const [formData, setFormData] = usePatch({
		name: "",
		email: "",
		subject: "",
		contact_type: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);

	const validate = () => {
		let isValid = true;
		if (!formData.name) {
			isValid = false;
		}
		if (!formData.email) {
			isValid = false;
		}
		if (!formData.subject) {
			isValid = false;
		}
		if (!formData.message) {
			isValid = false;
		}
		if (!formData.contact_type) {
			isValid = false;
		}
		return isValid;
	};

	const sendMessageHandler = (e) => {
		e.preventDefault();

		const isValid = validate();

		const MESSAGE_PAYLOAD = {
			name: formData.name,
			email: formData.email,
			subject: formData.subject,
			contact_type: formData.contact_type,
			message: formData.message,
		};
		
		if (isValid) sendMessageRequest(MESSAGE_PAYLOAD);
		else CustomAlert({ text: "Please fill all the fields", icon: "error" });
	};

	const sendMessageRequest = (MESSAGE_PAYLOAD) => {
		setLoading(true);
		requestSendMessage(MESSAGE_PAYLOAD)
			.then((res) => {
				setLoading(false);
				CustomAlert({
					icon: "success",
					title: "Sent !",
					text: "Your message has successfully sent",
				});
			})
			.catch((err) => {
				setLoading(false);
				CustomAlert({
					icon: "error",
					title: "Failed",
					text: "Server error",
				});
			});
	};
	return (
		<div className="ContactusModal__form">
			<h4>SEND US A MESSAGE</h4>
			<form
				className="ProductDetailReview__form"
				onSubmit={sendMessageHandler}
			>
				<div className="ReviewForm__userInput reviewform-row">
					<div className="ReviewForm__userInput-div">
						<label className="ReviewForm__label">Your Name</label>
						<input
							className="ReviewForm__input"
							type="text"
							onChange={({ target }) =>
								setFormData({ name: target.value })
							}
						/>
					</div>
					<div className="ReviewForm__userInput-div">
						<label className=" ReviewForm__label">Your Email</label>
						<input
							className="ReviewForm__input"
							type="email"
							onChange={({ target }) =>
								setFormData({ email: target.value })
							}
						/>
					</div>
				</div>
				<div className="ReviewForm__userInput reviewform-row">
					<div className="ReviewForm__userInput-div">
						<label className="ReviewForm__label">Subject</label>
						<input
							className="ReviewForm__input"
							type="text"
							onChange={({ target }) =>
								setFormData({ subject: target.value })
							}
						/>
					</div>
					<div className="ReviewForm__userInput-div">
						<select
							className="select-input"
							onChange={({ target }) =>
								setFormData({ contact_type: target.value })
							}
						>
							<option value="">Contact type</option>
							<option value="event">event</option>
							<option value="corporate_gift">
								Corporate gift
							</option>
							<option value="wedding">wedding</option>
							<option value="contact_us">Contact us</option>
							<option value="subscription">subscription</option>
							<option value="signiture_design">
								Signiture design
							</option>
							<option value="premium">premium</option>
							<option value="custom_boxes">Custom boxes</option>
						</select>
					</div>
				</div>
				<div className="ReviewForm__review reviewform-row">
					<label className="ReviewForm__label">Your Message</label>
					<textarea
						className="ReviewForm__textarea"
						onChange={({ target }) =>
							setFormData({ message: target.value })
						}
						rows="4"
					/>
				</div>

				<div className="contactus_btnbox">
					<button type="submit" className="btn third-btn">
						{loading ? <Spinner /> : "SEND"}
					</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
