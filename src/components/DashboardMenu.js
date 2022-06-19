import React from "react";
import { Paper, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";

const useStyles = (theme) => ({
  root: {
    padding: theme.spacing(6),
  },
  title: {
    paddingBottom: theme.spacing(6),
  },
});

const DashboardMenu = ({ children, classes, title }) => (
  <Paper className={classes.root}>
    <Typography variant="h4" align="center" className={classes.title}>
      {title}
    </Typography>
    {children}
  </Paper>
);

export default withStyles(useStyles)(DashboardMenu);
