import React, { memo, useEffect, useState } from "react";

import HeaderShowcase from "../component/common/HeaderShowcase";
import background from "../assets/image/shopping card/shadow.png";
import resbackimg from "../assets/image/responsive/order complete.png";
import { CustomAlert } from "helpers/alert";
import { usePatch } from "../hooks/usePatch";
import { requestSendMessage } from "../queries/contact-us";
import Spinner from "component/common/Spinner";
import { haveTokens } from "helpers/auth";

const Header = (props) => {
	return (
		<div className="cart-title">
			<h2>{props.title}</h2>
		</div>
	);
};
const SignatureDesign = memo(({ title }) => {
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = usePatch({
		name: "",
		email: "",
		subject: "",
		contact_type: "",
		message: "",
	});

	const isLogin = haveTokens();

	useEffect(() => {
		window.scrollTo(0, 0);
		setFormData({
			name: "",
			email: "",
			subject: "",
			contact_type: "",
			message: "",
		});

		switch (title) {
			case "Event Service":
				return setFormData({ contact_type: "event" });
			case "Signature design":
				return setFormData({ contact_type: "signiture_design" });
			case "Wedding Services":
				return setFormData({ contact_type: "wedding" });
			case "PREMIUM BUOQUET":
				return setFormData({ contact_type: "premium" });
			case "CUSTOM-BOXES":
				return setFormData({ contact_type: "custom_boxes" });
			default:
				return setFormData({ contact_type: "ALAKi" });
		}
	}, [title]);

	const sendMessage = (e) => {
		e.preventDefault();
		const EMAIL_PATTERN =
			/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		if (formData.name.length < 2)
			return CustomAlert({
				icon: "warning",
				text: "Entered name is too short",
			});
		if (!EMAIL_PATTERN.test(formData.email))
			return CustomAlert({
				icon: "warning",
				text: "Entered company name is too short",
			});
		if (formData.subject.length < 2)
			return CustomAlert({
				icon: "warning",
				text: "Entered subject is too short",
			});
		if (!formData.contact_type)
			return CustomAlert({
				icon: "warning",
				text: "Contact type must be selected",
			});
		if (formData.message.length < 5)
			return CustomAlert({
				icon: "warning",
				text: "Entered message is too short",
			});
		setLoading(true);

		const MESSAGE_PAYLOAD = {
			name: formData.name,
			email: formData.email,
			subject: formData.subject,
			contact_type: formData.contact_type,
			message: formData.message,
		};

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
				CustomAlert({ icon: "error", title: "Failed" });
			});
	};

	return (
		<div>
			<HeaderShowcase resbackimg={resbackimg} backimg={background}>
				<Header title={title} />
			</HeaderShowcase>
			<div className="container">
				<div className="SignatureDesign">
					<div className="SignatureDesign__info">
						<h4>{title}</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Ex, corporis. Similique repellat molestias,
							ducimus possimus, esse non voluptates dignissimos
							dolore incidunt deserunt, dolores harum vel sit
							dolorum sapiente fugiat numquam? Numquam expedita
							nesciunt est reprehenderit quae, esse iste! Fugit
							eveniet, tenetur beatae odio ut fugiat totam
							accusamus exercitationem quibusdam esse hic
							laboriosam, saepe consectetur, dicta accusantium et
							mollitia nesciunt labore soluta iusto repellendus
							modi consequuntur praesentium! Rerum placeat soluta
							sequi debitis veniam repudiandae velit impedit?
							Suscipit, laudantium. Temporibus minima velit vitae,
							quod suscipit dolore cumque eum eius quas quidem?
							Tempora incidunt error minima deleniti ad ex ducimus
							sunt. Quibusdam, expedita?
						</p>

						<div className="contact">
							<div className="contact__box">
								<i className="fa fa-phone"></i>
								<p>Give us a call</p>
								<p><a href='tel:+98100453063'>+98100453063</a></p>
							</div>
							<div className="contact__box">
								<i className="fa fa-at"></i>
								<p>or email us at</p>
								<p><a href='mailto:PooriaFaramarzian@gmail.com'>PooriaFaramarzian@gmail.com</a></p>
							</div>
						</div>
					</div>
					<div className="ContactusModal__form">
						<h4>SEND US A MESSAGE</h4>
						<form
							className="ProductDetailReview__form"
							onSubmit={sendMessage}
						>
							<div className="ReviewForm__userInput reviewform-row">
								<div className="ReviewForm__userInput-div">
									<label className="ReviewForm__label">
										Your Name
									</label>
									<input
										className="ReviewForm__input"
										value={formData.name}
										onChange={({ target }) =>
											setFormData({ name: target.value })
										}
									/>
								</div>
								<div className="ReviewForm__userInput-div">
									<label className=" ReviewForm__label">
										Your Email
									</label>
									<input
										className="ReviewForm__input"
										type="email"
										value={formData.email}
										onChange={({ target }) =>
											setFormData({ email: target.value })
										}
									/>
								</div>
							</div>
							<div className="ReviewForm__userInput reviewform-row">
								<div className="ReviewForm__userInput-div">
									<label className="ReviewForm__label">
										Subject
									</label>
									<input
										className="ReviewForm__input"
										value={formData.subject}
										onChange={({ target }) =>
											setFormData({
												subject: target.value,
											})
										}
									/>
								</div>
							</div>
							<div className="ReviewForm__review reviewform-row">
								<label className="ReviewForm__label">
									Write Your Custom Order
								</label>
								<textarea
									className="ReviewForm__textarea"
									value={formData.message}
									onChange={({ target }) =>
										setFormData({ message: target.value })
									}
									rows="4"
								/>
							</div>

							<div className="contactus_btnbox">
								<button
									type="submit"
									style={{ cursor: "pointer" }}
									className="btn third-btn"
								>
									{loading ? <Spinner /> : "submit"}
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
});

export default SignatureDesign;
