import UseWindowSize from "./../Sizes/UseWindowSize";
import ProfileTabs from "./../component/Profile/ProfleTabs";
import ResponsiveProfileTabs from "./../component/Profile/ResponsiveProfileTabs";
import { usePatch } from "./../hooks/usePatch";
import { useEffect, useState } from "react";
import { Configs } from "configs";
import { requestOrdersList } from "./../queries/orders";
import { requestGetProfile } from "./../queries/me";
import { requestFavouritesList } from "queries/products";
import { haveTokens } from "./../helpers/auth";
import { Redirect } from "react-router";

const Profile = () => {
	const windowSize = UseWindowSize();
	const [orders, setOrders] = useState([]);
	const [favourites, setFavourites] = useState([]);
	const [offset, setOffset] = useState(0);
	const [loading, setLoading] = useState(false);

	const [pagination, setPagination] = usePatch({
		total: 0,
		current: 0,
	});

	const isLogin = haveTokens();

	const getOrders = () => {
		const PAYLOAD = {
			limit: Configs.LIMIT,
			offset: pagination.current * Configs.LIMIT,
		};
		requestOrdersList(PAYLOAD)
			.then((response) => {
				setLoading(false);
				setOrders(response.data.result);
				setPagination({ total: response.data.total });
			})
			.catch((err) => setLoading(false));
	};

	useEffect(() => {
		setLoading(true);
		if (isLogin) {
			getOrders();
			requestFavouritesList({ offset, limit: Configs.LIMIT * 50 })
				.then(({ data }) => {
					setLoading(false);
					setFavourites(data.result);
				})
				.catch((err) => setLoading(false));
		}
	}, [pagination.current]);

	if (!isLogin) {
		return <Redirect to="/" />;
	}
	return (
		<div className="container">
			{windowSize === "md" ||
			windowSize === "xs" ||
			windowSize === "sm" ? (
				<ResponsiveProfileTabs
					loading={loading}
					orders={orders}
					setPagination={setPagination}
					pagination={pagination}
					favourites={favourites}
					setFavourites={setFavourites}
					setOffset={setOffset}
				/>
			) : (
				<ProfileTabs
					loading={loading}
					setOffset={setOffset}
					setFavourites={setFavourites}
					favourites={favourites}
					orders={orders}
					setPagination={setPagination}
					pagination={pagination}
				/>
			)}
		</div>
	);
};

export default Profile;
