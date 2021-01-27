import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: { height: "90%", display: "flex", alignItems: "center" },
  img: {
    height: "100%",
  },
  link: { height: "100%" },
  label: {
    fontSize: 28,
    fontWeight: 200,
    color: theme.colors.primary,
    marginLeft: 12,
  },
}));

interface IProps {
  className?: string;
}

export const HeaderLogo = (props: IProps) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, props.className)}>
      <NavLink className={classes.link} to="/">
        <img alt="logo" className={classes.img} src="/imgs/logo.png" />
      </NavLink>

      <Typography className={classes.label} component="div">
        APY.vision
      </Typography>
    </div>
  );
};
