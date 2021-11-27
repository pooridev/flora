import {
	Checkbox,
	IconButton,
	Paper,
	Radio,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { TYPES } from "redux/types";
import { Redirect } from "react-router";

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

const SelectAddress = ({ addresses }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	if (addresses === undefined || !addresses)
		return <Redirect to="/shoping-card" />;
	if (addresses.length) {
		return (
			<div className="OrderHistoryTable">
				<TableContainer style={{ boxShadow: "none" }} component={Paper}>
					<Table className={classes.table} aria-label="simple table">
						<TableHead>
							<TableRow style={{ fontWeight: "bold" }}>
								<TableCell className={classes.cell}>
									City
								</TableCell>
								<TableCell className={classes.cell}>
									To
								</TableCell>
								<TableCell className={classes.cell}>
									Postal code
								</TableCell>
								<TableCell className={classes.cell}>
									street
								</TableCell>
								<TableCell className={classes.cell}>
									Actions
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{addresses.map((item) => (
								<TableRow key={item["address_id"]}>
									<TableCell
										className={classes.cell}
										component="td"
										scope="row"
									>
										<p style={{ whiteSpace: "nowrap" }}>
											{item["city"]}
										</p>
									</TableCell>
									<TableCell
										className={classes.cell}
										component="td"
										scope="row"
									>
										<p style={{ whiteSpace: "nowrap" }}>
											{item["first_name"]}{" "}
											{item["last_name"]}
										</p>
									</TableCell>
									<TableCell
										className={classes.cell}
										component="td"
										scope="row"
									>
										<p style={{ whiteSpace: "nowrap" }}>
											{item["postal_code"] ?? "nowhere"}
										</p>
									</TableCell>
									<TableCell
										className={classes.cell}
										component="td"
										scope="row"
									>
										<p style={{ whiteSpace: "nowrap" }}>
											{item["street"]}
										</p>
									</TableCell>
									<TableCell
										className={classes.cell}
										component="td"
										scope="row"
									>
										<Radio
											style={{ whiteSpace: "nowrap" }}
											onChange={() =>
												dispatch({
													type: TYPES.UPDATE_DELIVERY_ADDRESS_ID,
													payload: item["address_id"],
												})
											}
										/>
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
				There's no addresses yet, please add one to continue
			</h1>
		</div>
	);
};

export default SelectAddress;
