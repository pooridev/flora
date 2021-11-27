import React from "react";
import location from "../../assets/image/contactus/location.svg";
import email from "../../assets/image/contactus/Email.svg";
import phone from "../../assets/image/contactus/Phone.png";
import Form from "./Form";
import { Link } from "react-router-dom";

const ContactusInfoBox = ({ icon, title, text }) => {
	return (
		<div className="ContactusInfoBox">
			<div className="ContactusInfoBox__flexbox">
				<img alt="hw" src={icon} />
				<div>
					<p className="ContactusInfoBox__title">{title}</p>
					<p className="ContactusInfoBox__text">{text}</p>
				</div>
			</div>
		</div>
	);
};
const ContactusInfo = () => {
	return (
		<div className="container">
			<div className="ContactusInfo-grid">
				<Form />
				<div className="ContactusInfo__information">
					<ContactusInfoBox
						icon={location}
						title="Address"
						text="Dubai,1901 Thornridge Cir. Shiloh, Hawaii 81063"
					/>
					<ContactusInfoBox
						icon={email}
						title="Email"
						text="kenzi.lawson@example.com"
					/>
					<ContactusInfoBox
						icon={phone}
						title="Phone number"
						text="(319) 555-0115"
					/>
					<div className="ContactusModal__info--footer">
						<div className="d-flex">
							<a href='https://www.facebook.com/firenzeflora1'>
								<div
									className="contactus__social--circle center"
									style={{ backgroundColor: "#365493" }}
								>
									<i class="fab fa-facebook-f"></i>
								</div>
							</a>
							<a href="https://www.instagram.com/firenzeflora/">
								<div
									className="contactus__social--circle center"
									style={{ backgroundColor: "#D455A3" }}
								>
									<i class="fab fa-instagram"></i>
								</div>
							</a>
							<a href='https://api.whatsapp.com/send?phone=971558603515'>
								<div
									className="contactus__social--circle center"
									style={{ backgroundColor: "#00E676" }}
								>
									<i class="fab fa-whatsapp"></i>
								</div>
							</a>
							<a href="https://www.pinterest.com/firenzeflorallc/_saved/">
								<div
									className="contactus__social--circle center"
									style={{ backgroundColor: "#CB2027" }}
								>
									<i class="fab fa-pinterest-p"></i>
								</div>
							</a>
							<a href='https://www.twitter.com'>
								<div
									className="contactus__social--circle center"
									style={{ backgroundColor: "#3CF" }}
								>
									<i class="fab fa-twitter"></i>
								</div>
							</a>
							<a href='mailto:Info@firenzeflora.com'>
								<div
									className="contactus__social--circle center"
									style={{ backgroundColor: "#DD4D42" }}
								>
									<i class="fab fa-google-plus"></i>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactusInfo;
