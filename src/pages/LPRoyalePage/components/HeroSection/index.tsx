import { Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    margin: "16px 0",
  },
  content: {
    margin: "auto",
    maxWidth: 500,
    padding: "0 16px",
  },
  img: {
    width: 260,
    height: 100,
    backgroundColor: theme.colors.primary,
    margin: "auto",
  },
  title: {
    color: theme.colors.black,
    fontWeight: 600,
    fontSize: 32,
    marginTop: 24,
  },
  description: {
    maxWidth: 400,
    margin: "auto",
    marginTop: 24,
  },
  button: { marginTop: 24, textTransform: "none", borderWidth: 2 },
}));

interface IProps {
  className?: string;
}

export const HeroSection = (props: IProps) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, props.className)}>
      <div className={classes.content}>
        <div className={classes.img}></div>
        <Typography align="center" className={classes.title}>
          LP Royale entry tagline/title
        </Typography>
        <Typography align="center" className={classes.description}>
          Some content that explains what this is about, this needs to be
          treated as a landing page
        </Typography>
        <Button className={classes.button} color="secondary" variant="outlined">
          Read the FAQ
        </Button>
      </div>
    </div>
  );
};
