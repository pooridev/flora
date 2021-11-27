import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import {
	Add,
	CardTravelOutlined,
	Close,
	Settings as SettingsIcon,
	StreetviewOutlined,
} from "@material-ui/icons";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import OrderHistory from "./../../Layout/OrderHistory";
import WishList from "Layout/WishList";
import Addresses from "Layout/Addresses";
import Spinner from "component/common/Spinner";
import Settings from "./Settings";
import NewAddress from "./NewAddress";
import { Button, IconButton, Tooltip } from "@material-ui/core";
import PaginationComponent from "./../Rang/Pagination";
import { Configs } from "configs";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && <Box p={3}>{children}</Box>}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		"aria-controls": `vertical-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		display: "flex",
		minHeight: "700px",
	},
	tabs: {
		borderRight: `1px solid ${theme.palette.divider}`,
		minWidth: "145px",
	},
}));

export default function ProfileTabs({
	profileDetail,
	loading,
	orders,
	pagination,
	setPagination,
	setFavourites,
	favourites,
	// addresses,
	// setAddresses
}) {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);
	const [isAdding, setIsAdding] = useState(false);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<Tabs
				orientation="vertical"
				value={value}
				onChange={handleChange}
				aria-label="Vertical tabs example"
				className={classes.tabs}
			>
				<Tab
					label="Orders"
					icon={<CardTravelOutlined fontSize="large" />}
					{...a11yProps(0)}
				/>
				<Tab
					label="Wishlist"
					icon={<FavoriteBorderIcon fontSize="large" />}
					{...a11yProps(1)}
				/>
				<Tab
					label="Addresses"
					icon={<StreetviewOutlined fontSize="large" />}
					{...a11yProps(2)}
				/>
				<Tab
					label="Setting"
					icon={<SettingsIcon fontSize="large" />}
					{...a11yProps(3)}
				/>
			</Tabs>
			<TabPanel value={value} index={0}>
				{loading ? (
					<div className="center">
						<Spinner />
					</div>
				) : (
					<OrderHistory orders={orders} />
				)}
				{pagination.total > Configs.LIMIT && (
					<PaginationComponent
						pagination={{
							...pagination,
							onChangePage: (page) =>
								setPagination({ current: page }),
						}}
					/>
				)}
			</TabPanel>
			<TabPanel value={value} index={1}>
				<WishList
					favourites={favourites}
					setFavourites={setFavourites}
				/>
			</TabPanel>
			<TabPanel value={value} index={2}>
				<Tooltip
					placement="top"
					title={isAdding ? "addresses" : "Adding new address"}
				>
					<Button
						variant="outlined"
						color="primary"
						onClick={() => setIsAdding((prev) => !prev)}
					>
						{isAdding ? <Close /> : <Add color="primary" />}
					</Button>
				</Tooltip>
				{isAdding ? (
					<NewAddress setIsAdding={setIsAdding} />
				) : (
					<Addresses />
				)}
			</TabPanel>
			<TabPanel value={value} index={3}>
				<Settings />
			</TabPanel>
		</div>
	);
}
