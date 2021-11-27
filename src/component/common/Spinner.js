import { Box, CircularProgress, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
		justifyContent: 'center'
  },
}));

const Spinner = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress style={{ color: 'gray' }} />
    </div>
  );
};

export default Spinner;
