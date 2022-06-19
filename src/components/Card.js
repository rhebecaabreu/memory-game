import React from "react";
import { Typography, CardContent, Card as MUCard } from "@mui/material";
import { withStyles } from "@mui/styles";
import { CssBaseline } from "@mui/material";

import classNames from "classnames";

const width = "160px";
const height = "200px";
const styles = {
  root: {
    width,
    height,
    margin: "12px",
    cursor: "pointer",
  },
  flipper: {
    transition: "0.6s",
    transformStyle: "preserve-3d",
    position: "relative",
  },
  flipperRotate: {
    transform: "rotateY(180deg)",
  },
  page: {
    width,
    height,
    position: "absolute",
    top: 0,
    left: 0,
    backfaceVisibility: "hidden",
  },
  pageFront: {
    transform: "rotateY(0deg)",
    zIndex: 2,
  },
  pageBack: {
    transform: "rotateY(180deg)",
  },
};

const Card = ({ name, classes, isActive, onClick }) => (
  <div role="presentation" className={classes.root} onClick={onClick}>
    <div
      className={classNames(classes.flipper, {
        [classes.flipperRotate]: isActive,
      })}
    >
      <CssBaseline />
      <MUCard
        className={classNames(classes.page, classes.pageFront)}
        style={{ backgroundColor: "silver" }}
      />
      <MUCard
        className={classNames(classes.page, classes.pageBack)}
        style={{ backgroundColor: "tomato" }}
      >
        <CardContent>
          <Typography variant="h5" component="h2" align="center">
            {name}
          </Typography>
        </CardContent>
      </MUCard>
    </div>
  </div>
);

export default withStyles(styles)(Card);
