import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableRow,
} from "@material-ui/core";

const useStyles = makeStyles({
	table: {
		maxWidth: "100%",
	},
	cell: {
		fontSize: "1.8rem",
		padding: "1.5rem 2rem",
	},
});

function createData(name, value) {
	return { name, value };
}

function AdditionalInfo({ detail }) {
	const classes = useStyles();
	// const product = useSelector((state) => state.product.product);

	const rows = [
		createData("Available", detail.is_enable ? "✔" : "❌"),
		createData("Has warranty", detail.warranty ? "✔" : "❌"),
		createData("Width", detail.dimensions?.width || 0),
		createData("Length", detail.dimensions?.length || 0),
		createData("Height", detail.dimensions?.height || 0),
		createData("Weight", detail.weight),
	];

	return (
		<TableContainer style={{ boxShadow: "none" }} component={Paper}>
			<Table className={classes.table} aria-label="simple table">
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.name}>
							<TableCell
								className={classes.cell}
								component="th"
								scope="row"
							>
								{row.name}
							</TableCell>
							<TableCell className={classes.cell} align="right">
								{row.value}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default AdditionalInfo;
