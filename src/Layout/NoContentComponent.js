import React, { useEffect } from "react";
import HeaderShowcase from "../component/common/HeaderShowcase";
import background from "../assets/image/shopping card/shadow.png";
import resbackimg from "../assets/image/responsive/order complete.png";
import { useLocation } from "react-router-dom";

const Header = ({ title }) => {
	return (
		<div className="cart-title">
			<h2>{title}</h2>
		</div>
	);
};
const NoContentComponent = () => {
	const { pathname } = useLocation();
	const pathWihoutDasheshAndSlashes = pathname
		.replaceAll("-", " ")
		.replaceAll("/", "");
	// const pathWihoutSlash = pathname.replaceAll("/", "");
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<HeaderShowcase resbackimg={resbackimg} backimg={background}>
				<Header title={pathWihoutDasheshAndSlashes} />
			</HeaderShowcase>
			<div className="container" style={{ textAlign: "left" }}>
				<h1>{pathWihoutDasheshAndSlashes}</h1>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Accusantium magnam, esse deserunt repellendus unde odio
					laudantium distinctio obcaecati accusamus, consequatur quod
					necessitatibus voluptas quasi temporibus a eos, fugiat
					aspernatur. Voluptates voluptatum, mollitia sapiente
					obcaecati beatae optio. Adipisci esse officiis voluptatibus,
					tenetur explicabo exercitationem eaque, minus quis ipsa
					numquam nulla porro quisquam nemo optio incidunt reiciendis!
					Iusto unde delectus fuga accusantium molestias non deserunt!
					Dolore, facere qui quo cupiditate facilis deleniti?
					Perferendis dolorem ullam tenetur maxime repudiandae et
					similique, architecto veniam atque tempora quis enim
					aspernatur, possimus vero ipsum. Aspernatur nam deserunt
					facilis sunt, dolorum non enim ut nemo facere earum,
					voluptatum dolores hic autem officia dolore, neque
					voluptate. Ipsa recusandae eius atque incidunt consequatur
					explicabo tempore placeat dolorum est! Eos itaque, ea,
					consectetur voluptatum sit explicabo dolore quis ratione
					dolor blanditiis aut aliquam repellendus earum? Maxime
					veritatis fuga enim sint ipsa voluptates, numquam culpa
					minus voluptatum blanditiis quae qui labore! Ipsam suscipit
					inventore eius nobis voluptates! Cumque incidunt numquam qui
					quisquam saepe, maxime perferendis sint! Eos delectus eum
					eveniet, at quia similique voluptatum quae veniam commodi
					alias numquam quidem libero quis amet. Autem, tenetur vel
					totam ipsam maxime suscipit sed numquam asperiores, earum
					neque perspiciatis? Consectetur ea odio esse minima
					perspiciatis error illo, expedita corrupti necessitatibus
					id? Error, nulla veniam nobis delectus, consectetur
					perspiciatis ab laborum alias, officiis reprehenderit
					adipisci! Illo eius, itaque dolorum adipisci ex voluptas
					omnis rerum quisquam, laboriosam veniam eaque! Molestiae,
					voluptatibus laborum aspernatur sint quo incidunt
					perspiciatis id repellendus at magni! Sunt, maxime,
					molestias iure ipsam modi amet, aliquam vel corporis vero
					sequi consequuntur ullam unde! Veniam corporis quae eligendi
					reiciendis amet atque expedita, eos nobis, ipsam rerum
					facere? Fuga necessitatibus, ea ratione sequi pariatur
					repellat iste dolorum fugiat vel blanditiis nostrum unde
					corrupti at, quae molestias eius optio officiis laudantium
					earum veritatis temporibus excepturi eum!
				</p>
			</div>
		</div>
	);
};

export default NoContentComponent;
