import {
	IconButton,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Delete, Edit } from "@material-ui/icons";
import { requestDeleteAddress } from "queries/me";
import { requestGetProfile } from "./../../queries/me";
import { useDispatch } from "react-redux";
import { getProfile } from "./../../redux/action-creators/profile";

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

const AddressesTable = ({ addresses, onDeleteAddress, onEditAddress }) => {
	const classes = useStyles();
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
									Phonenumber
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
										<p style={{ whiteSpace: 'nowrap' }}>{item["city"]}</p>
									</TableCell>
									<TableCell
										className={classes.cell}
										component="td"
										scope="row"
									>
										<p style={{ whiteSpace: 'nowrap' }}>
											{item["first_name"]}{" "}
											{item["last_name"]}
										</p>
									</TableCell>
									<TableCell
										className={classes.cell}
										component="td"
										scope="row"
									>
										<p style={{ whiteSpace: 'nowrap' }}>{item["phone_number"]}</p>
									</TableCell>
									<TableCell
										className={classes.cell}
										component="td"
										scope="row"
									>
										<p style={{ whiteSpace: 'nowrap' }}>
											{item["postal_code"] ?? "nowhere"}
										</p>
									</TableCell>
									<TableCell
										className={classes.cell}
										component="td"
										scope="row"
									>
										<p style={{ whiteSpace: 'nowrap' }}>{item["street"]}</p>
									</TableCell>
									<TableCell
										className={classes.cell}
										component="td"
										scope="row"
									>
										<IconButton
											onClick={() =>
												onDeleteAddress({
													address_id:
														item["address_id"],
												})
											}
										>
											<Delete
												color="error"
												fontSize="large"
											/>
										</IconButton>
										<IconButton onClick={() => onEditAddress(item['address_id'])}>
											<Edit
												color="action"
												fontSize="large"
											/>
										</IconButton>
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

export default AddressesTable;
