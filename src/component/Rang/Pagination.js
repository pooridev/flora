import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import {Configs} from "configs";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));
const PaginationComponent = ({pagination}) => {
    console.log(pagination)
    const classes = useStyles();

    return (
        <div className='center' id='PaginationComponent'>
            <div className={classes.root}>
                <Pagination count={Math.ceil(pagination.total / Configs.LIMIT)} onChange={(e, page) => pagination.onChangePage((page - 1))} shape="rounded"/>
            </div>
        </div>
    );
}

export default PaginationComponent
