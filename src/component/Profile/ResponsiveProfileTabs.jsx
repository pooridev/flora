import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {
	CardTravelOutlined,
	StreetviewOutlined,
	Settings as SettingsIcon,
	Close,
	Add,
} from "@material-ui/icons";
import OrderHistory from "Layout/OrderHistory";
import WishList from "Layout/WishList";
import Addresses from "Layout/Addresses";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Spinner from "component/common/Spinner";
import Settings from "./Settings";
import Tooltip from "@material-ui/core/Tooltip";
import NewAddress from "./NewAddress";
import { Button } from "@material-ui/core";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`scrollable-prevent-tabpanel-${index}`}
			aria-labelledby={`scrollable-prevent-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
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
		id: `scrollable-prevent-tab-${index}`,
		"aria-controls": `scrollable-prevent-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		marginTop: "2rem",
		width: "100%",
		backgroundColor: theme.palette.background.paper,
	},
	tabs: {
		backgroundColor: "#B8CCC6",
		justifyContent: "center",
		color: "#222F2B",
	},
}));

export default function ResponsiveProfileTabs({
	loading,
	setOffset,
	setFavourites,
	addresses,
	favourites,
	orders,
	setPagination,
	pagination,
}) {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);
	const [isAdding, setIsAdding] = useState(false);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Tabs
					className={classes.tabs}
					value={value}
					onChange={handleChange}
					variant="scrollable"
					scrollButtons="off"
					aria-label="scrollable prevent tabs example"
				>
					<Tab
						label="Orders"
						icon={<CardTravelOutlined />}
						aria-label="orders"
						{...a11yProps(2)}
					/>
					<Tab
						label="Wishlist"
						icon={<FavoriteBorderIcon fontSize="large" />}
						aria-label="wishlist"
						{...a11yProps(3)}
					/>
					<Tab
						label="Adresses"
						icon={<StreetviewOutlined fontSize="large" />}
						aria-label="addresses"
						{...a11yProps(4)}
					/>
					<Tab
						label="Settings"
						icon={<SettingsIcon fontSize="large" />}
						aria-label="Settings"
						{...a11yProps(5)}
					/>
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
				{loading ? (
					<div className="center">
						<Spinner />
					</div>
				) : (
					<OrderHistory
						orders={orders}
						pagination={pagination}
						setPagination={setPagination}
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
