import {
	Button,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@material-ui/core";
import { Configs } from "./../../configs/index";
import PaginationComponent from "./../Rang/Pagination";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {
	DeleteOutlined,
	QuestionAnswerOutlined,
	Repeat,
} from "@material-ui/icons";
import Tooltip from "@material-ui/core/Tooltip";
const useStyles = makeStyles({
	table: {
		maxWidth: "100%",
		overflow: "scroll",
	},
	cell: {
		fontSize: "1.5rem",
		padding: "1.5rem 2rem",
	},
});

const getStatus = ({ status, reason }) => {
	if (reason) {
		return (
			<Tooltip placement="top" title={reason}>
				<div>
					<QuestionAnswerOutlined />
					<p style={{ textTransform: "capitalize" }}>
						{status.replaceAll("_", " ")}
					</p>
				</div>
			</Tooltip>
		);
	}
	return (
		<p style={{ textTransform: "capitalize" }}>
			{status.replaceAll("_", " ")}
		</p>
	);
};

const OrderHistoryTable = ({
	orders,
	pagination,
	onOrderAgain,
	onDeleteOrder,
}) => {
	const classes = useStyles();

	if (orders.length) {
		return (
			<div className="OrderHistoryTable">
				<TableContainer style={{ boxShadow: "none" }} component={Paper}>
					<Table className={classes.table} aria-label="simple table">
						<TableHead>
							<TableRow style={{ fontWeight: "bold" }}>
								<TableCell className={classes.cell} style={{ whiteSpace: 'nowrap' }}>
									Items
								</TableCell>
								<TableCell className={classes.cell} style={{ whiteSpace: 'nowrap' }}>
									Price
								</TableCell>
								<TableCell className={classes.cell} style={{ whiteSpace: 'nowrap' }}>
									Discount
								</TableCell>
								<TableCell className={classes.cell} style={{ whiteSpace: 'nowrap' }}>
									Status
								</TableCell>
								<TableCell className={classes.cell} style={{ whiteSpace: 'nowrap' }}>
									Actions
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{orders.map((item) => (
								<TableRow key={item["id"]}>
									<TableCell
										className={classes.cell}
										component="td"
										scope="row"
										style={{ whiteSpace: 'nowrap' }}
									>
										{item["total_items"]}
									</TableCell>
									<TableCell
									style={{ whiteSpace: 'nowrap' }}
										className={classes.cell}
										component="td"
										scope="row"
									>
										{item["total_price"]}
									</TableCell>
									<TableCell
										className={classes.cell}
										component="td"
										scope="row"
									>
										{item["total_discount"]}
									</TableCell>
									<TableCell
									style={{ whiteSpace: 'nowrap' }}
										className={classes.cell}
										component="td"
										scope="row"
									>
										{getStatus({
											status: item["order_status"][
												"status_type"
											],
											reason: item["order_status"][
												"reason"
											],
										})}
									</TableCell>
									<TableCell
									style={{ whiteSpace: 'nowrap' }}
										className={classes.cell}
										component="td"
										scope="row"
									>
										<Tooltip
											placement="top"
											title="Order Again"
										>
											<Button
												color="primary"
												onClick={() =>
													onOrderAgain(item)
												}
											>
												<Repeat
													fontSize="large"
													color="primary"
												/>
											</Button>
										</Tooltip>
										<Tooltip
											placement="top"
											title="Delete order"
										>
											<Button
												color="primary"
												onClick={() =>
													onDeleteOrder(
														item,
														item["order_status"][
															"status_type"
														]
													)
												}
											>
												<DeleteOutlined
													fontSize="large"
													color="error"
												/>
											</Button>
										</Tooltip>
										{/* <Tooltip
											placement="top"
											title="Order details"
										>
											<Button
												color="primary"
												onClick={() =>
													onOrderAgain(item)
												}
											>
												<InfoOutlined
													fontSize="large"
													color="action"
												/>
											</Button>
										</Tooltip> */}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		);
	}

	return (
		<div className="center">
			<h1>
				There's no order, let's go
				<Link to="/category/0867ae0a-2cfe-456a-bdce-8d0c3144397db">
					{" "}
					shopping{" "}
				</Link>
			</h1>
		</div>
	);
};

export default OrderHistoryTable;
