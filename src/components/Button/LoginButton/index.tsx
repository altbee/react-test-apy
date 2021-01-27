import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 38,
    borderRadius: 19,
  },
  label: {
    color: theme.colors.white,
    textTransform: "none",
    fontSize: 14,
  },
}));

interface IProps {
  className?: string;
}

export const LoginButton = (props: IProps) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.root}
      classes={{ label: classes.label }}
      color="secondary"
      variant="contained"
    >
      PRO Log In
    </Button>
  );
};
