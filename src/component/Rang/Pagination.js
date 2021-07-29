import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }));
const PaginationComponent = () => {
    const classes = useStyles();

    return (
      <div className='center' id='PaginationComponent'>
          <div className={classes.root}>
        <Pagination count={10} shape="rounded" />
      </div>
      </div>
    );
}

export default PaginationComponent
